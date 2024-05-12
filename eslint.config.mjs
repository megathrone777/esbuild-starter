// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginImport from "eslint-plugin-import-x";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    ignores: ["*.mjs", "*.js"],
    plugins: { import: eslintPluginImport },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/quotes": "error",
      "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "_" }],
      "func-style": ["error", "expression"],
      "import/newline-after-import": "error",
      "import/order": [
        "error",
        {
          groups: [["builtin", "external"]],
          "newlines-between": "always",
        },
      ],
      indent: ["error", 2],
      "newline-after-var": "error",
      "newline-before-return": "error",
      "no-console": ["error", { allow: ["warn", "table", "info", "error"] }],
      "no-inline-comments": "error",
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "no-restricted-syntax": ["error", "FunctionDeclaration"],
      "no-trailing-spaces": "error",
      "no-unused-vars": "off",
      "prefer-const": "error",
      semi: "error",
    },
  }
);
