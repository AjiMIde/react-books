import { defineConfig } from 'vitepress'
// import './config.css' todo 有问题

const sideReact18ViteTs = {
  text: 'React 18 vite ts',
  items: [
    { text: 'vite搭建', link: 'react18-vite-ts/0.vite-create.md' },
  ]
}

const sideReactRouter = {
  text: 'React Router',
  items: [
    { text: 'react router v5', link: 'Router/1.v5-react-router.md' },
    { text: 'react router v6', link: 'Router/2.v6-react-router.md' },
    { text: 'react router v6 完善', link: 'Router/3.v6-react-router-all-config.md' },
    { text: 'react router v6 Hook', link: 'Router/4.v6-react-router-all-hooks.md' },
  ]
}

const sideStore = {
  text: 'Store',
  items: [
    { text: 'jotai', link: 'Store/1.jotai.md' },
  ]
}

const sideAdvanced2 = {
  text: '高级指引2',
  items: [
    { text: 'ref', link: 'Advanced2/0.ref.md' },
  ]
}
const sideTs = {
  text: '挑屎',
  items: [
    { text: 'Html 应用', link: 'Ts/0.Html-ts.md' },
    // https://juejin.cn/post/7021674818621669389
  ]
}



// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My react books",
  description: "My react boos for react 16/18",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          {text: 'Markdown Examples', link: '/markdown-examples'},
          {text: 'Runtime API Examples', link: '/api-examples'}
        ]
      },
      sideReact18ViteTs,
      sideReactRouter,
      sideStore,
      sideAdvanced2,
      {
        text: '安装1',
        collapsed: true,
        items: [
          {text: '开始', link: '/Installation/0.Started'},
          {text: '使用 React 开发新项目CRA', link: '/Installation/1.Create-New-React-App'},
          {text: '在现有项目中添加CRA', link: '/Installation/2.Add-React-To-Old'},
          {text: 'CDN 支持', link: '/Installation/3.CDN'},
        ]
      },
      {
        text: '基础',
        items: [
          {text: 'Jsx 与元素渲染', link: '/Basic/0.Jsx'},
          {text: '组件', link: '/Basic/1.Components'},
          {text: '条件判断与列表渲染', link: '/Basic/2.Judgment-and-List'},
          {text: '表单技术', link: '/Basic/3.Form'},
          {text: '状态提升、组件组合、React理念', link: '/Basic/4.StatusLift'}
        ]
      },
      {
        text: '高级指引',
        items: [
          {text: '深入使用 Jsx', 'link': 'Advanced/0.Deep-in-Jsx.md'},
          {text: 'Prop Types 使用', 'link': 'Advanced/1.PropTypes.md'},
          {text: 'Type-checker 类型检查器使用', 'link': 'Advanced/2.Type-Checker.md'},
          {text: 'Refs 操纵 Dom 使用', 'link': 'Advanced/3.Refs&Dom.md'},
          {
            text: 'React.Memo, PureComponent, Function组件及组件渲染',
            'link': './Advanced/04.React.memo-and-pure-comp-and-so-on.md'
          },
          {text: 'React.lazy与Suspense', 'link': './Advanced/05.React.lazy-Suspense.md'},
          {text: 'Context与Provider', 'link': './Advanced/06.Context-****provider.md'}
        ]
      },
      {
        'text': '配置',
        'items': [
          {'text': '0.CRA-react-app-rewired使用', 'link': 'Config/00.react-app-rewired.md'},
          {'text': '1.从零配置一个react项目', 'link': 'Config/01.react-0-to-1.md'}
        ]
      },
      {
        'text': 'Hooks使用',
        'items': [
          {'text': 'Hooks使用', 'link': './Hooks/_hooks.md'},
          {'text': '01.UseMemo', 'link': './Hooks/01.UseMemo.md'},
          {'text': '02.UseCallback', 'link': './Hooks/02.UseCallback.md'},
          {'text': '03.useState', 'link': './Hooks/03.useState.md'},
          {'text': '00.面试题', 'link': './Hooks/00.mianshi.md'}
        ]
      },
      {
        'text': 'React-Dnd 使用',
        'items': [
          {'text': '1.React-Dnd介绍', 'link': 'React-Dnd/1.React-dnd.md'},
          {'text': '2.Dnd 基本例子', 'link': 'React-Dnd/2.React-dnd-Example.md'},
          {'text': '3.Dnd html NativeTypes', 'link': 'React-Dnd/3.React-html-NativeTypes.md'},
          {'text': '4.简单的排序及自由拖动', 'link': './React-Dnd/4.React-dnd-sort-free-drag.md'},
          {'text': '5.结合 resize 及组合拖动', 'link': './React-Dnd/5.React-dnd-resize-group.md'}
        ]
      },
      {
        "text": "博客",
        "items": [
          {"text": "配置React打包路径（本地打开）", "link": "Question/20170910-Config-Open-At-local.md"},
          {"text": "在 WebStorm 中配置 React for Flow", "link": "Question/20171010-Config-flow-in-WebStorm.md"},
          {"text": "配置 React + Antd", "link": "Question/20180204-Install-antd.md"},
          {"text": "React Router", "link": "CreactReactApp/2.v5-react-router.md"}
        ],
      },
      {
        "text": "CreateReactApp",
        "items": [
          {"text": "初识", "link": "CreateReactApp/0.create-react-app.md"},
          {"text": "react-app-rewired", "link": "CreateReactApp/1.react-app-rewired.md"},
          {"text": "react-router-v5", "link": "CreateReactApp/2.v5-react-router.md"},
          {"text": "react-router-v6", "link": "CreateReactApp/2.v6-react-router.md"},
          {"text": "typescript", "link": "CreateReactApp/3.typescript-cra.md"},
          {"text": "style", "link": "CreateReactApp/4.styles.md"}
        ]
      }
    ].map((o: any) => {
      if (!('collapsed' in o)) {
        o.collapsed = true
      }
      return o
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
