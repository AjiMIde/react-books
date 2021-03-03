## React Form

#### 说明

* `React Form`是`react component`下的一个仓库`form`，主要用来做表单的校验、提示、计算值等；
* Github: [https://github.com/react-component/form](https://github.com/react-component/form)
* Example: [http://react-component.github.io/form/](http://react-component.github.io/form/)
* `React Form`依赖于`async-validator`，这是一个做校验的库（不依赖任何环境）；
* `async-validator`的说明看上一篇

## rc-form

```jsx harmony
// npm i rc-form -S

class Form extends React.Component {
  static propTypes = { // 注入 proTypes 验证
    form: formShape
  }
  submit = () => {
    this.props.form.validateFields((error, value) => { // form方法
      console.log(error, value)
    })
  }

  render () {
    window.tf = this
    let errors
    const { getFieldProps, getFieldError } = this.props.form // input包裹方法

    return (<div>
      <div>
        <input {...getFieldProps('phone', { // name / option
          rules: [{ // rules
            required: true,
            message: '请输入手机号'
          }]
        })}/>
        {(errors = getFieldError('phone')) ? errors.join(',') : null}
      </div>
      <div>
        <input {...getFieldProps('code', {
          rules: [{
            required: true,
            message: '请输入验证码'
          }]
        })}/>
        {(errors = getFieldError('code')) ? errors.join(',') : null}
      </div>
      <button onClick={this.submit}>submit</button>
    </div>)
  }
}

const wrappedOption = {}
const WrappedForm = createForm(wrappedOption)(Form)
```

* 通常来讲，使用`rc-form`都是使用`createForm`方法来返回一个包裹的`form`组件，当然，不一定真的需要`htmlDom:form`，而是指使用`createForm`方法包裹的组件即可；


#### Form提供的方法

```jsx harmony
// 使用 props.form 获取 form 对象

submit: () => {
  this.props.form.validateFields((error, value) => { // form方法
    console.log(error, value)
  })
  validateFields([fieldNames: string], options: {}, callback: (errors, values))
  getFieldValue(key)/getFieldsValue(),
  setFieldsValue({key-value})/setFields({more config}),
  setFieldsInitialValue({key-value})
  resetFields([key, ...])
  and so on....
}

```


#### 构建“包裹”的input对象

* 使用`getFieldProps/getFieldDecorator/getFieldError/`

```jsx harmony
class Cls {
  render () {
    return (<div>
          <div>
            <input {...getFieldProps('phone', options)}/> 使用 getFieldProps
            {getFieldDecorator('phone', options)(<input />)}  或使用 getFieldDecorator
            {(errors = getFieldError('phone')) ? errors.join(',') : null}
          </div>
        </div>)
  }
}
```

* **option**选项
* `rules`: `Array[Object, ...]`配置规则，规则与`async-validator`的配置一致
    * `rules.required/message/pattern`可以为一个属性配置多个对应的`rules/message`以满足不同情况下的校验
* `validateFirst`: `Boolean`，当第一条`rule`失败后跳出；
* `validate`: `Array[Object, ...]`
    * `validate.trigger`: `String`此规则触发的事件
    * `validate.rules`: `Array[Object, ...]`同上面的`rules`
* `valuePropName`: `String`, 默认为`value`，当为`eleType:checkbox`时应为`checked`；
* `initialValue`: 设置默认值；
* `hidden`: `Boolean`设置此属性并不会使`Ele.Dom`隐藏，而是在校验值或获取值等方法时，忽略这个`field`；
* `preserve`: `Boolean`是否保留值（当持载、卸载时），为`true`时，路由切换等行为时，已输入的值不会丢失；
* `normalize`: 设置处理函数，通过这个函数可以返回一个自定义处理过的值，`如 normalize: (val, prev, all) => return val.trim()`；
* `trigger`: 触发收集数据的事件，默认为：`onChange`；
* `validateTrigger`触发校验的事件，`[string, ...]`；
* `getValueProps/getValueFromEvent`；

#### wrappedComponentRef 内置方法获取 ref

```jsx harmony
// Recommended
const EnhancedForm = createForm()(Form);
<EnhancedForm wrappedComponentRef={(inst) => this.formRef = inst} />
this.formRef // => The instance of Form
```

#### wrappedOption 配置预设置及监听事件

```jsx harmony
const wrappedOption = {
  validateMessages: '', 
  fieldMetaProp: '',
  fieldNameProp: '',
  fieldDataProp: '',
  onFieldsChange: (props, changed, all) => {
    console.log(props, changed, all)
  },
  onValuesChange: (props, changed, all) => {
    console.log(props, changed, all)
  },
  mapProps: (props) => {
    // return handle props 对 props进行二次加工
  },
  mapPropsToFields: (props) => {
    // return handle props 对 props进行二次加工
  },
}
const WrappedForm = createForm(wrappedOption)(Form)
```


#### 实例

* 通常来讲会有以下这样的要求：通过一个异步获取的数据，填充到`form`中，然后用户输入数据，会自动进行校验
* 当校验通过时，触发`通过事件`，使得一个按钮`可点击`，点击按钮获取`form`的值，进行处理、提交
* 代码如下：这是一个普通的**登录表单**，有`phone/code/graphCode`，其中`graphCode`需要在`code`
* 失败三次后才显示，只有在`phone/code`或`phone/code/graphCode`都校验通过时，`button`才可点击

```jsx harmony

```
