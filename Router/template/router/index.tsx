import { lazy, Suspense } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Loading from './Loading';
import NotFound from './NotFound';

/**
 * * 这是一个 data router 采用 hash 模式
 * * 注意 lazy 引入，完成按需引用
 * * 使用 suspense 与 fallbackElement 进行异步加载包裹，通常来说，Suspense意义更多,fallbackElement 意义仍不明
 * * 404 notfound 页面
 */

const router = createHashRouter([
  {
    path: "/",
    Component: lazy(() => import('./Home')),
    children: [
      {
        index: true,
        Component: lazy(() => import('./pages/Home1')),
      },
      {
        path: 'home1',
        Component: lazy(() => import('./pages/Home1')),
      },
      {
        path: "home2",
        Component: lazy(() => import('./pages/Home2')),
      },
      {
        path: "home3",
        Component: lazy(() => import('./pages/Home3')),
      }
    ]
  },
  {
    path: "about",
    Component: lazy(() => import('./About')),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const HashRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} fallbackElement={<div>...loading?...</div>} />
    </Suspense>
  )
}

export default HashRouter

