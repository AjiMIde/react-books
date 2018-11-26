## 在 WebStorm 中配置 React for Flow

* 参考：[jet brains Flow Type Checker](https://www.jetbrains.com/help/webstorm/2017.1/flow-type-checker.html)

#### Flow Type checker

* WB 提供了`Flow`静态类型检查器，为`Js`带来了类型注释。包含了类型识别及高亮
* **目录：**
* 准备
* 安装`Flow`
    * 全局安装`Flow`
    * 项目安装`Flow`
* WB 配置`Flow`


#### 准备

* 确保 `Node.js` 环境健全，打开 `setting->plugins->node.js`即可查看是否启用
* 当然还要确定您已经安装 `Node.js`
* 打开 `setting->Languages & Frameworks->Node.js and NPM` 查看路径是否指定正确
* 如未，请打开上面的参考自己看看

#### 安装Flow

* 有三种方法可以安装 `Flow`，分别是全局安装、在特定项目中安装、在本项目安装`dev dependency`

```bash
yarn add flow-bin -D

# 如果你在全局安装，这样会默认生成环境 `PATH` 变量，那就可以在anywhere使用Flow命令了
yarn add flow-bin -g
```

* 安装完毕之后，打开`setting->Languages & Frameworks->Node.js and NPM`
* 查看已可用的插件列表中是否有`Flow-bin`插件，如无，则在右上角上点击 `+` 号添加
* 注意，添加`Flow-bin`是记得选上 `-g` 参数
* 如有意外（一般为路径上的问题）请打开最上面的参考链接查看问题

#### WB 配置Flow

* 在 WB 上配置完`Flow`，WB 才能正确识别、检查、高亮，报错 
* 打开 `setting->Languages & Frameworks->JavaScript` 选择语言版本为`Flow`
* `Type Checking` 选中它，语法，高亮，错误提示才会生效，否则只有内置的`highlight`
* `Navigation, code completion, and type hinting`选中它，才会有`Flow`提供的建议列表、代码补全，如不选，则只有WB提供的计算的建议列表

#### 额外的

* 你需要在每个文件头上放上 `// @flow`，WB 才会对此文件进行`Flow`检查
* 快捷键 `flow->tab` 即可生成 `// @flow`
* 使用命令`npm run flow init`生成`.flowconfig`文件，至于它是做什么用的，请参阅`Flow`篇章

