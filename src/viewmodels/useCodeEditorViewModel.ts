import { useEffect, useRef, useState } from "react";
import { safeEval } from "../services/exec";
import { debounce } from "../utils/debounce";
import { formatWithPrettier } from "../services/formatter";
import { transpileTS } from "../services/transpile";

export const useCodeEditorViewModel = () => {
  const [code, setCode] = useState(
    `interface User {\n  name: string\n}\n\nconst getName = (user: User): string => \`Hello user \${user.name}\`\n\nconsole.log(getName({ name: 'JayS' }));`
  );
  const [output, setOutput] = useState("");
  const [language] = useState<"javascript" | "typescript">("typescript");
  const editorRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const monacoRef = useRef<any>(null);
  const monacoEditorInstance = useRef<any>(null);

  const updateOutput = debounce(async () => {
    const jsCode = language === "typescript" ? await transpileTS(code) : code;
    const { result, logs, error } = safeEval(jsCode);

    setOutput(
      (logs.join("\n") || "") +
        (result && result !== "undefined" && result !== undefined
          ? `\n→ ${result}`
          : "") +
        (error ? `\n⚠️ ${error}` : "")
    );
  }, 300);

  useEffect(() => {
    updateOutput();
  }, [code]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const isFormatShortcut =
        (isMac && e.metaKey && e.shiftKey && e.key === "F") ||
        (!isMac && e.ctrlKey && e.shiftKey && e.key === "F");

      if (isFormatShortcut) {
        e.preventDefault();
        void formatWithPrettier(code).then((formatted) => {
          setCode(formatted);
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [code]);

  const onChange = (type: string, value: any) => {
    console.log({ type, value });
    if (type === "code") setCode(value);
    if (type === "editorScroll") {
      if (outputRef.current) outputRef.current.scrollTop = value;
    }
    if (type === "outputScroll") {
      if (editorRef.current) editorRef.current.scrollTop = value;
    }
  };

  const handleEditorMount = (editor: any, monaco: any) => {
    monacoRef.current = monaco;
    monacoEditorInstance.current = editor;

    editor.onDidScrollChange((e: any) => {
      if (!outputRef.current) return;
      outputRef.current.scrollTop = e.scrollTop;
    });

    if (outputRef.current) {
      outputRef.current.onscroll = () => {
        const scrollTop = outputRef.current?.scrollTop || 0;
        editor.setScrollTop(scrollTop);
      };
    }
  };

  return {
    code,
    output,
    onChange,
    editorRef,
    outputRef,
    language,
    handleEditorMount,
  };
};
