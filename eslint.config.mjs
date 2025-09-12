import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import nextPlugin from "@next/eslint-plugin-next";

const eslintConfig = [
  {
    ignores: ["node_modules/**", ".next/**", "dist/**"],
  },

  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules,

      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    files: [
      "**/__tests__/**/*.{ts,tsx,js,jsx}",
      "**/*.{test,spec}.{ts,tsx,js,jsx}",
    ],
    languageOptions: {
      globals: {
        jest: true,
      },
    },
  },
  {
    files: ["jest.config.mjs", "jest.setup.ts", "**/*.config.{js,cjs,mjs,ts}"],
    languageOptions: {
      sourceType: "module",
    },
  },
];

export default eslintConfig;
