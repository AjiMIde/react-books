# React Router

## 目录
* [安装使用](#安装使用)
* [常用页面与route组合](#常用页面与route组合)
* [使用标签](#使用标签)
* [编程式导航](#编程式导航)
* [读取参数](#读取参数)
* [嵌套路由](#嵌套路由)


## 安装使用

* [reactrouter.com](https://reactrouter.com/web)
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


## 常用页面与route组合

```jsx
import { withRouter } = 'react-router-dom'
const RouterComp = () => <div></div>
const withRouterComp = withRouter(RouterComp)
const render = () => {
  {/*直接将component传参是比较常用的，但这样无法进行有用参数的传递*/}
  <Route path={'/router-comp'}><RouterComp/></Route>

  {/*使用component来渲染组件，props自带 history/match/location等信息（和操作对象）*/}
  <Route path={'/router-comp'} component={RouterComp}/>

  {/*使用render亦可来渲染组件，不同的是，使用要手动传参 props(但可能带来更多灵活的业务操作) */}
  <Route path={'/router-comp'} render={(props)=><RouterComp {...props}/> } />

  {/*使用withRouter包裹组件，也可以在组件props中得到相关的history等信息*/}
  <Route path={'/router-comp'} component={withRouterComp}/>
}
```


## 使用标签

```html
<li> <a href="#/router-usage">a标签</a> </li>
<li> <Link to='/router-usage'>Link标签</Link> </li>
<li> <NavLink to='/router-usage' >NavList标签,自动添加active类，可添加activeClassName/activeStyle</NavLink> </li>
```

## 编程式导航

* 注意，`history`的获取需要特殊的`Route`包裹，查看上面的代码

```js
const { history } = this.props
history.goBack/forward/push/replace...
```

## 读取参数

* 注意，`match, location`的获取需要特殊的`Route`包裹，查看上面的代码

```jsx harmony
<Route path="/page/:name"/>
<Link to="/path/:Curry?sex=boy">page A</Link>
<Link to={{pagename: '', state: {age: 18, locate: 'USA'} }}>page B</Link>
```

```js
const {location, match} = this.props
// pageA
match.params.name + location.search

// pageB
location.state.age + location.state.locate
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

* 也可以引入`react-router-dom`的子模块，推荐如下：

```jsx
// const { match, location } = this.props

<div>
 <NavLink to={`${match.url}`}>首页</NavLink>
 <NavLink to={`${match.url}/page-a`}>页面A</NavLink>
 <NavLink to={`${match.url}/page-b`}>页面B</NavLink>
</div>

<Switch>
  <Route path={`${match.path}/page-a`} component={PageA} />
  <Route path={`${match.path}/page-b`} component={PageB} />
  <Route path={match.path}>
    这里默认显示的 father page
  </Route>
</Switch>
```


## 使用loadable动态加载页面

* 这里建议与`react.lazy`对比使用

```js
// cnpm i -S @loadable/component
const pack = {
  path: 'test2',
  name: 'test2',
  comp: loadable(() => import(/*webpackChunkName: "test2"*/'@views/Test/Test2'))
}
```


