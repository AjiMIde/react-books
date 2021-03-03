## React Router

#### 安装、使用

* [https://reactrouter.com/web](https://reactrouter.com/web)
* **React Router**为核心库，而一般我们会使用`react-router-dom`来提供更多路由功能
* `cnpm i -S react-router-dom`
* **BrowserRouter** 使用常规`path`，如：`/a/b/c`
* **HashRouter** `hash`路由，如：`/#/a/b/c`
* **Switch**与**Route**用来匹配路由
* **Route**， * 在`Route`中，`path: '/'`匹配所有可能的路径(因为'/'只匹配开头)，这一点与其他`Router`工具不同，
* 所以，当要匹配一个公用的页面，应把它置于最后面，或是使用 `<Route exact />`
* **Link**与**NavLink**起到`<a>`一样作用的导航，只不过**NavLink**能自动填充`class=active`
* **Redirect**是强制跳转，但一般情况下，只有要强制跳转到某个路由，你才把它渲染到**Router**里面（相当于一个`function`跳转）


```jsx harmony
// in App.js
import { BrowserRouter as Router, HashRouter as RouterH, Switch, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

<Router>
<nav>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/users">Users</Link></li>
  </ul>
</nav>

<Switch>
  <Route path="/about"><About /></Route>
  <Route path="/users"><Users /></Route>
  <Route path="/"><Home /></Route>
</Switch>
</Router>
```


#### 嵌套路由

* 在路由下的页面嵌套`switch/route`可实现路由页面嵌套；
* 在以下代码，使用`useRouteMatch`匹配路由`url`数据；
* 使用`useParams`实现路由带参：`path/:param`（注意，带参的与不带参的同时匹配时，带参的应在不带参的`route`之前定义）

```jsx harmony
// 子路由下的组件
function NbaTeam () {
  const params = useParams()

  return <div>
    <h2>Welcome to {params.param}</h2>
  </div>
}

function Nba() {
  const match = useRouteMatch(); // 匹配 url route

  return <div>
    <h2>Welcome to NBA</h2>

    <ul>
      <li><Link to={`${match.url}/warriors`}>Warriors</Link></li>
      <li><Link to={`${match.url}/net`}>Net</Link></li>
    </ul>

    {/*嵌套的路由：*/}
    <Switch>
      <Route path={`${match.path}/:param`}><NbaTeam /></Route>
      <Route path={match.path}><h3>Select What you like</h3></Route>
    </Switch>

  </div>
}
```
