import * as esbuild from "esbuild-wasm";

let isInitialized = false;

export async function transpileTS(code: string): Promise<string> {
  if (!isInitialized) {
    await esbuild.initialize({
      wasmURL: "esbuild.wasm", // static relative path (copied by Vite)
      worker: true,
    });
    isInitialized = true;
  }

  const result = await esbuild.transform(code, {
    loader: "ts",
    format: "esm",
  });

  return result.code;
}
