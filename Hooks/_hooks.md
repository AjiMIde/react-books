## Hooks

`Hooks`帮助你在**不使用类**的情况下，获取一些`react的特性`，即使用一些**类**才有的功能

#### Hooks: useState

```jsx harmony
import React, {useState} from 'react'
function TheCount () {
  const [count, setCount] = useState(0)
  const [myAry, setMyAry] = useState([1, 2, 3])
  
  return (
    <div>
      <p>{count}</p>
      <p>{myAry}</p>
      <button onClick={() => setCount(count+1)}></button>
      <button onClick={() => setMyAry([4, 5, 6])}></button>
    </div>
  )
}
```

* 在这里`useState(0)`返回一个值和函数，这意味着`count`可以是`string`, `array` and whatever you named it
* 而同样的`setCount`亦可为`setNameYouDefineIt`任何你命名的参数
* 从上面的代码可以看出，当使用`function`函数组件时，使用`useState`能获取到`state`功能，而在此之间，只有`class`类组件才有些功能
* `Hooks`不影响现有项目，100%向后兼容，也不删除`class`
* `Hooks`的提出在于：解决那些因为某些特性不能使用，而不得不用`class`组件的小组件，即：让那些小组件拥有`class`类组件才有的一些特性


#### Hooks: useEffect

```typescript jsx
function Example3 () {
  const [count, setCount] = useState(0)
  
  let timeout
  // 为什么可以写在这里？这是因为，useEffect是类ComponentDidMount 和 类ComponentDidUpdate 函数，
  // 那么，当count更新了的时候，会调用到 useEffect，即，它每次都会更新这里
  useEffect(() => {
    timeout = setTimeout(() => {
      setCount(count + 1)
    }, 1000)
    if (count >= 10) {
      clearTimeout(timeout)
    }
    // 返回函数模拟了 componentWillUnmount 生命周期，在组件卸载时调用此函数
    // 注意，它不是必须的
    return () => {  
      console.log('oooover')
    }
  })
  return (<div>count: {count}</div>)
}
```

* 
* 
* 

####

* 
* 
* 

####

* 
* 
* 


#### Hooks: useRef

* 访问子组件的Dom对象

```jsx harmony

```
