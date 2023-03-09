## 🔄 Trns-uniapp

### 🎉 Feature plan 
- Translate Chinese to English
- Translate English to Chinese

### 🤨 Why do this?
- I created this project as a tool for translating Chinese to English, and vice versa. 😏
- It is a beneficial thing for me, because developing this project can not only create one more tool for me but also improve my development skills. 🤣

### How to publish TS Project on NPM 🎉 
- First of all, run `yarn add typescript --global`
- Checking if install successfully by run `tsc -V`
- Run `tsc --init` to create tsconfig.json file
- Set tsconfig.json's 'outDir' field to "dist/"
- Add shebang `#!/use/bi/env node` in cli.js
- Add `bin` and `files` in package.json
- Run `npm adduser` under NPM origin registry
- Run `npm publish` after input your account info

### If you do not want to publish ? 🤹‍♂️
- Run `vi ./bashrc` and input `alias trns='/d/.../trns-uniapp/src/cli.ts'`
- Run `source ./bashrc` to activate local alias
- Run `trns apple` to tranalate Chinese to English, and vice versa.
