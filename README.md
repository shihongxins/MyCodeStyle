## 说明

❗❗❗ 有问题请善用搜索引擎

## 使用此编码风格

使用时将此目录下所有文件 **除 /package\*.json** 文件拷贝到目标项目 **最外层** （有相同项时注意对比确认后覆盖）

## 安装 ESLint

```bash
npm install --save-dev eslint
```

## 初始化 ESLint

```bash
npx eslint --init
```

按提示选择最后生成 **_/.eslintrc.js_** 基础配置

### 安装 ESLint parser

```bash
npm install --save-dev @babel/eslint-parser
## 或者 vue-eslint-parser 或者其他 parser
```

### ESLint 与 Vite

- 安装 Vite 插件

```bash
npm install --save-dev vite-plugin-eslint
```

- 在 **_/vite.config.js_** 中配置插件

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 引入插件
import pluginESLint from "vite-plugin-eslint";
export default defineConfig({
  plugins: [
    vue(),
    // 配置插件
    pluginESLint({
      include: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
    }),
  ],
});
```

## 安装 prettier 相关依赖

```bash
npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier
```

### ESLint 配置文件中使用 prettier 插件

```js
/** /.eslintrc.js  **/
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  /*
  extends: ["plugin:vue/essential", "standard"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  */
  extends: ["plugin:vue/vue3-recommended", "plugin:vue/essential", "standard", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
    requireConfigFile: false,
    parser: "@babel/eslint-parser",
  },
  plugins: ["vue"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        vueIndentScriptAndStyle: true,
      },
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // ... 其他自定义 ESLint 规则
  },
};
```

## 使用 PostCSS

如果项目中有使用到 PostCSS 注意要安装相应的 loader （部分 CLI 自带） 和插件；

```bash
npm i -D postcss postcss-loader autoprefixer postcss-pxtorem
```

注：视情况安装

## 其他

- VSCode 插件推荐
  /.vscode/etensions.json

```json
{
  "recommendations": [
    "editorconfig.editorconfig",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "christian-kohler.path-intellisense",
    "Vue.volar"
  ]
}
```

- VSCode 配置
  /.vscode/settings.json

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": false,
    "source.fixAll": false
  },
  "editor.unicodeHighlight.allowedLocales": {
    "zh-hant": true
  },
  "editor.fontSize": 18,
  "editor.tabSize": 2,
  "eslint.format.enable": true,
  "path-intellisense.mappings": {
    "/": "${workspaceFolder}",
    "@": "${workspaceFolder}/src",
    "~@": "${workspaceFolder}/src",
    "assets": "${workspaceFolder}/src/assets",
    "~assets": "${workspaceFolder}/src/assets",
    "public": "${workspaceFolder}/src/public",
    "~public": "${workspaceFolder}/src/public",
    "styles": "${workspaceFolder}/src/assets/styles",
    "~styles": "${workspaceFolder}/src/assets/styles",
    "images": "${workspaceFolder}/src/assets/images",
    "~images": "${workspaceFolder}/src/assets/images"
  }
}
```
