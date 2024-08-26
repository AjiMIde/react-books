
https://react-guide.github.io/react-router-cn/docs/Introduction.html
https://blog.csdn.net/weixin_53312997/article/details/129248753o
https://www.google.com/search?q=react%E4%B8%AD%E8%AE%BE%E8%AE%A1+debounce+%E5%87%BD%E6%95%B0&oq=react%E4%B8%AD%E8%AE%BE%E8%AE%A1+debounce+%E5%87%BD%E6%95%B0&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigAdIBCDY2MjBqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8
https://ahooks-v2.surge.sh/zh-CN/hooks/side-effect/use-debounce-fn/
https://www.tapd.cn/22164871/markdown_wikis/show/#1122164871001007347




## React.PropsWithChildren

* 它能使你天然地使用`children`，而不用去`type`中重新定义
* 适合接收一个"普遍"的`children`
* 如果你想特定一个`children`，请在`type`中直接定义

```ts
interface TT extends React.PropsWithChildren, React.PropsWithRef<{}> {}

const Test1 = ({ children }: TT) => {
  return <div>{children}</div>;
};
```


## 
