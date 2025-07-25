import prettier from "prettier/standalone";
import parserBabel from "prettier/plugins/babel"; // correct plugin path in v3+

export async function formatWithPrettier(code: string): Promise<string> {
  try {
    return await prettier.format(code, {
      parser: "babel",
      plugins: [parserBabel],
      semi: true,
      singleQuote: true,
      trailingComma: "es5",
    });
  } catch (err) {
    console.error("Prettier format error:", err);
    return code;
  }
}
