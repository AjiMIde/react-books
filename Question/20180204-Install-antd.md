## 配置 React + Antd

#### 安装 

```bash
npm install antd --save

## 亦可用 cdn 或其他方式引入 .js 文件，但不推荐（按需加载）
```

#### 使用：

```jsx
import 'antd/dist/antd.css'
import { DatePicker } from 'antd'


class InstallAntd extends Component {
  render () {
    return (
      <div>
        <DatePicker />
      </div>
    )
  }
}
```


