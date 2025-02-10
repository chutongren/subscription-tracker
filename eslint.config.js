import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
      env: {
        node: true, // 添加 Node.js 环境
      },
    },
  },
  pluginJs.configs.recommended,
];

// import globals from "globals";
// import pluginJs from "@eslint/js";

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
// ];
