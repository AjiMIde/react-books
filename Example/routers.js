import { BrowserRouter as Router, HashRouter as RouterH, Switch, Route, Link, withRouter, } from "react-router-dom";
import loadable from '@loadable/component'

const arrayRouter = [
  {
    path: 'router-usage',
    name: 'routerUsage',
    comp: loadable(() => import(/*webpackChunkName: "routerUsage"*/'@views/RouterUsage/RouterUsage'))
  },
]

const array = [].concat(arrayRouter)

// export {
//   array as Routers
// }

export default function R () {
  return (
    <RouterH>
      <Suspense fallback={<div>...</div>}>
        <Switch>
        {
          array.map(o => {
            return (
              <Route key={o.name} path={'/' + o.path} component={o.comp} />
            )
          })
        }
        {/*直接将component传参是比较常用的，但这样无法进行有用参数的传递*/}
        {/*<Route path={'/router-comp'}><RouterComp/></Route>*/}
        {/*使用component来渲染组件，props自带 history/match/location等信息（和操作对象）*/}
        {/*<Route path={'/router-comp'} component={RouterComp}/>*/}
        {/*使用render亦可来渲染组件，不同的是，使用要手动传参 props(但可能带来更多灵活的业务操作) */}
        {/*<Route path={'/router-comp'} render={(props)=><RouterComp {...props}/> } />*/}
        {/*使用withRouter包裹组件，也可以在组件props中得到相关的history等信息*/}
        {/*<Route path={'/router-comp'} component={withRouterComp}/>*/}
      </Switch>
      </Suspense>
    </RouterH>
  )
}
