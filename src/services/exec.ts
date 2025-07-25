export function safeEval(code: string): {
  result: string | null;
  logs: string[];
  error?: string;
} {
  const logs: string[] = [];
  const originalLog = console.log;
  console.log = (...args) => {
    const processed = args.map((arg) => {
      if (typeof arg === "object") {
        try {
          return JSON.stringify(arg, null, 2);
        } catch {
          return "[Unserializable Object]";
        }
      }
      return String(arg);
    });
    logs.push(processed.join(" "));
  };

  let result: any = null;
  try {
    result = new Function(code)();
  } catch (err: any) {
    return { result: null, logs, error: `${err.name}: ${err.message}` };
  } finally {
    console.log = originalLog;
  }

  // If the code produced logs but no return value, use the last log as the result
  if (logs.length > 0 && result === undefined) {
    return {
      result: logs[logs.length - 1],
      logs: logs.slice(0, -1), // Remove the last log since it's now the result
    };
  }

  return {
    result:
      typeof result === "object"
        ? JSON.stringify(result, null, 2)
        : String(result),
    logs,
  };
}
