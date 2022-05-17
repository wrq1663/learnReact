// import { renderRoutes } from "react-router-config";
import Home from '@/page/test/Home.js'
import About from '@/page/test/About.js'
// const a = () => import("../page/test/Home")
function Info1(props) {
  return <h2>信息1</h2>
}

function Info2(props) {
  return <h2>信息2</h2>
}

function Info3(props) {
  return <h2>信息3</h2>
}
const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about',
        exact: true,
        component: Info1,
      },
      {
        path: '/about/info2',
        component: Info2,
      },
      {
        path: '/about/info3',
        component: Info3,
      },
    ]
  }
]
export default routes