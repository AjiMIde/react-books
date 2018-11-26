## CRA 配置路径本地打开网站

* 参考：stack overflow[https://stackoverflow.com/questions/38565538/create-react-app-css-and-js-path/](https://stackoverflow.com/questions/38565538/create-react-app-css-and-js-path/)
* 参考：(重要)jiansh[https://www.jianshu.com/p/f9535acd0462](https://www.jianshu.com/p/f9535acd0462)
* 参考：(重要)github blog[https://github.com/facebook/create-react-app/blob/884d56738dd21f750b880a9bf3a8abff02023f3e/template/README.md#deploying](https://github.com/facebook/create-react-app/blob/884d56738dd21f750b880a9bf3a8abff02023f3e/template/README.md#deploying)

https://www.cnblogs.com/fengnovo/p/6951533.html?utm_source=itdadao&utm_medium=referral

> * CRA build 打包文件默认是在服务器根目录下打开的，见如下：

```bash
The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

yarn global add serve
serve -s build
```

* 大概意思就是说：输出时默认假设你是在服务器根目录部署的
* 可以到 `package.json` 中配置 `homepage` 字段来配置
* 例如配置成 `homepage: http://myname.github.io/myapp`
* 或者可以添加 `serve` node-serve 插件来预览

But 实际情况下还是有很多需要在其他配置目录下打开项目的，故查看如何配置：


#### 0.在 `package.json` 中配置 `homepage`字段

```bash
# in package.json

"homepage": "."  # 打包时会读取此配置并覆盖到默认配置里面去
```

#### 1.根据打包提示，添加路径到 `homepage`，打包脚本会自动参照

```bash
# in package.json

"homepage": "http://myuser.github.io/myproject"  # 打包时会读取此配置并覆盖到默认配置里面去
```


#### 然而笔者发现似乎对路由不友好。。。todo

#### 2.npm run eject 修改 `paths.js`

```bash
npm run eject

# in config/paths.js
envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : './');
```

#### 3.到项目 `node_modules/react-scripts/config` 中查找 `paths.js` 文件并修改

```bash
# in config/paths.js
envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : './');
```

#### 4.打包时添加配置命令

```bash
# windows
set PUBLIC_URL=./ yarn build

# mac
PUBLIC_URL=./ yarn build

```
