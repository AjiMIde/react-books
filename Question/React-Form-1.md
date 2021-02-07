## React Form

#### 说明

* `React Form`是`react component`下的一个仓库`form`，主要用来做表单的校验、提示、计算值等；
* Github: [https://github.com/react-component/form](https://github.com/react-component/form)
* `React Form`依赖于`async-validator`，这是一个做校验的库（不依赖任何环境）；
* Github: [https://github.com/yiminghe/async-validator](https://github.com/yiminghe/async-validator)
* `async-validator`依赖于库`async-validate`，可以看做前者是后者的一个优化进步；
* 先来看看`async-validator`的使用方法

## async-validator 使用

```ecmascript 6
import Schema from 'async-validator'

const descriptor = { // 校验规则
  name: {
    type: 'string',
    required: true,
    validator: (rule, value) => value.length > 2
  },
  age: {
    type: 'number',
    required: true,
    validator: (rule, value) => value > 18
  }
}
const validator = new Schema(descriptor)
const object = { // 被校验对象
  name: 'C',
  age: 12
}
const options = { } // 选项（可选）
const callback = (errors, fields) => { console.error(errors, fields) } // 回调
validator.validate(object, options, callback)
```

#### 剖析


#### options
* 可选规则，有3个选项：
* `suppressWarning: Boolean` 是否暴露内部错误（使用场景未知）；
* `first: Boolean`当为`true`，则第一个校验失败时跳出检验；
* `firstFields: Bool|String: []`，被第一个校验的参数，与`first`搭配使用


## 校验规则 rule

* 典型的 rule 如下

```js
const descriptor = { // 校验规则
  name: { // rule
    type: 'string',
    required: true,
    message: '请输入姓名',
    validator: (rule, value) => {
      // rule 为此条 rule 本身
      // value 为值
      return value.length > 2 // 返回结果
    }
  }
}
```

#### validator (rule, value, callback)

* rule: 规则本身, value: 当前值, callback： 回调
* 可返回`Boolean`，亦可返回 `new Error('msg')` 或 `[new Error(), new Error()]`

#### asyncValidator (rule, value, callback)

* 异步校验，一般返回一个`promise`，通常在函数体内做异步处理，如`ajax请求`，同样的在`validate`方法中也应该使用`promise`的处理方式

#### transform (value)

* 转换函数，返回加工后的函数，如 `transform (value) { return value.trim()}`

#### Deep Rules(fields)/defaultField

* 这两个参数用来匹配深层规则，即当**校验值**为`object/array`时配置来校验，如

```js
let rule = {
  fields: {
    city: {type: 'string', required: true},
    street: {type: 'string', required: true},
  }
}
```

#### enum

* 可枚举类型，一般用来匹配几个能存在的结果，如： sex: { type: 'enum', enum: ['man', 'woman']

#### Length/Range

* 用于`type: string/array`，用来匹配子元素的长度，当`len, min, max`同时存在时，`len`优先级高


```js
let rules = {
  type: 'string',
  len: 7,
  min: 3,
  max: 8
}
```

#### 其他 

* **type**  可为 `string/number/boolean/method/regexp/integer/float....`
* **message** 定义提示信息
* **pattern** 正则匹配
* **required** 是否为必须
* **Whitespace** 允许空白格的存在

#### 自定义

```ecmascript 6
// 如果你想定义多个message的返回，可以参考这样的代码
const rule = {
    phone: {
      type: 'string',
      required: true,
      pattern: /^1[\d]{10}$/,
      msg1: '请输入手机号码',
      msg2: '请输入正确的手机号码',
      validator: (rule, value) => {
        if (value === '') {
          rule.message = rule.msg1
          return false
        } else if (!rule.pattern.test(value)) {
          rule.message = rule.msg2
          return false
        } else {
          return true
        }
      }
    }
}
```

