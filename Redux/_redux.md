# Redux

* 可预测状态容器，暂且把它归为于`vuex`一类的状态管理器（统一管理）
* 整个应用程序应当有且只有一个`redux.store`

```js
import { createStore } from 'redux'

const value = 0
const store = createStore((state = value, actionType) => { // 使用 state = initValue 这样的方式来定义 state
  let newState = 0
  switch (actionType) {
    case 'xx':
      // do sth...
      newState = state + 1    // 与普遍的认识相同，不能直接修改 state 的值
      break
    default:
      break
  }
  return newState       // 通过 actionType 来进行不同的业务更新，并返回新的 state
}, otherParam)          // 第二个参数，这个参数会覆盖上面的 state=value 的值

store.getState()      // 获取所有 state 数据

store.dispatch({      // 分发行为，一般来讲，这是更新 store.state 的方法
  type: 'actionType', // 其中，type 是必须的
  content: ''
})

const unSubscribe = store.subscribe(() => {   // 订阅行为，当state发生改变时，获取内容
  store.getState()
})

unSubscribe()     // 取消订阅
```

## combineReducers 

* `redux`提供一个可整合所有`reducer`函数的方法，这在后期应用开发的量增大时有用（文件管理作用）

```js
import { createStore, combineReducers } from 'redux';

const age = (state = 18, action) => {
  switch (action.type) {
    case 'add':
      return state + action.value
    case 'cut':
      return state - action.value
    default:
      return state
  }
}

const sex = (state = 'man', action) => {
  switch (action.type) {
    case 'man':
      return 'man'
    case 'woman':
      return 'woman'
    default:
      return state
  }
}

const Store = createStore(combineReducers({
  age, sex
}))

```  



