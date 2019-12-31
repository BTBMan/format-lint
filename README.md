# 使用方法

- 复制项目内的 `prettier.config.js` `.prettierignore` 文件到项目内 可根据需求自定义该文件
- 在项目的 `package.json` 文件中的 `script` 字段加入本项目的 `prettier` 和 `eslint:fix` 的运行命令

# vue-cli 项目的使用方式

- 如项目使用 `vue-cli`  创建 直接在问答环节选择 `eslint + prettier` 的代码风格检查
- 在最后一步选择保存和 git commit 之前检测 也可以自行配置
    1. 如自行配置 git commit 之前检查 可以在package.json里进行配置 本示例使用 `husky` 插件进行配置 `npm install husky -D`
    2. 复制 `.huskyrc.js` 文件 修改配置即可

# vscode 插件

- 下载 `prettier` 和 `eslint` 插件 根据文档进行配置
- `prettier` 插件会自动识别项目中的 prettier 配置文件 如果项目中没有配置文件 则找 home 目录下的文件
- 可以开启保存自动格式化设置 `editor.formatOnSaveTimeout` 延时可设置大一些 防止大文件格式化超时失败
  ```json
    {
        "editor.formatOnType": true,
        "editor.formatOnSave": true,
        "editor.formatOnSaveTimeout": 30000,
        "editor.formatOnPaste": true,
    }
  ```