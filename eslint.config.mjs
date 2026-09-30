import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  // Global directory and file ignores
  globalIgnores([
    ".next",
    ".next/**",
    "node_modules/**",
    ".git/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  ...nextVitals,
  ...nextTs,
]);

export default eslintConfig;
