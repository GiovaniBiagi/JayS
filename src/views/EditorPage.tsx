import MonacoEditor from "@monaco-editor/react";
import draculaTheme from "monaco-themes/themes/Dracula.json";

import { useCodeEditorViewModel } from "../viewmodels/useCodeEditorViewModel";

const EditorPage = () => {
  const {
    code,
    output,
    onChange,
    editorRef,
    outputRef,
    language,
    handleEditorMount,
  } = useCodeEditorViewModel();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Code Editor */}
      <div
        style={{
          width: "50%",
          borderRight: "1px solid #444",
          overflow: "auto",
        }}
        ref={editorRef}
        onScroll={(e) => onChange("editorScroll", e.currentTarget.scrollTop)}
      >
        <MonacoEditor
          height="100%"
          defaultLanguage={language}
          theme="dracula"
          value={code}
          onChange={(val) => onChange("code", val)}
          onMount={(editor, monaco) => {
            try {
              monaco.editor.defineTheme("dracula", draculaTheme as any);
              monaco.editor.setTheme("dracula");
            } catch (error) {
              console.warn(
                "Failed to load Dracula theme, using default:",
                error
              );
              monaco.editor.setTheme("vs-dark");
            }
            handleEditorMount(editor, monaco);
          }}
        />
      </div>

      {/* Output Panel */}
      <div
        style={{
          width: "50%",
          backgroundColor: "#1e1e2f",
          color: "#eee",
          padding: 16,
          overflow: "auto",
          scrollbarWidth: "none",
        }}
        ref={outputRef}
        onScroll={(e) => onChange("outputScroll", e.currentTarget.scrollTop)}
      >
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default EditorPage;
