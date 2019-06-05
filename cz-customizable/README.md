# git commit 自定义

## @chengzao/tiny 仓库为例

[![](https://img.shields.io/github/license/chengzao/tiny.svg)](https://github.com/chengzao/tiny)
[![install size](https://packagephobia.now.sh/badge?p=@chengzao/tiny)](https://packagephobia.now.sh/result?p=@chengzao/tiny)
![](https://img.shields.io/npm/v/@chengzao/tiny.svg)
![](https://img.shields.io/github/repo-size/chengzao/tiny.svg)
[![](https://img.shields.io/bundlephobia/minzip/@chengzao/tiny.svg)](https://github.com/chengzao/tiny)
[![](https://img.shields.io/github/languages/top/chengzao/tiny.svg)](https://github.com/chengzao/tiny)

## start

```bash
npm install @chengzao/tiny
```

## use

```js
const tiny = require('@chengzao/tiny')

tiny('So mush space!')
```

## 发布公共包

- 注册 npm 账户 [npmjs 官方地址](https://www.npmjs.com/)
- 登录 npm 登录 `npm login`
- 初始化仓库 `mkdir tiny && cd tiny && git init && npm init`
- 编写 package 包代码
- 设置包版本 `npm version [major(主*)| minor(次^) | patch(补丁~)]`
- 发布版本 `npm publish [build path] --access=public`
- `npm version patch && git push --follow-tags origin master && npm publish`

## 仓库徽章地址

- [shields 徽章](https://shields.io/#/)
- [packagephobia 徽章](https://packagephobia.now.sh/)
- [travis-ci](https://www.travis-ci.org/)
- [An emoji guide for your commit messages](https://gitmoji.carloscuesta.me/)
- [unpkg](https://unpkg.com/#/) 例如：[@chengzao/tiny](https://unpkg.com/@chengzao/tiny@1.0.11/src/index.js)

## 其他

- `npm install -g standard-version`
- `npm install commitizen -g`
- `npm install`
- `git cz 替代 git commit 命令提交代码, 其他不变`
