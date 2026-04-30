import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

const config = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "public/vendor/**",
      "src/**"
    ]
  },
  ...compat.extends("next/core-web-vitals")
];

export default config;
