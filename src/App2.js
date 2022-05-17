import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addAction, getHomeMultidataAction } from './store/action';
import { renderRoutes } from "react-router-config";
import routes from './router/router-config';
import Home from '@/page/test/Home.js'
import About from '@/page/test/About.js'
import { BrowserRouter, Link, NavLink, Route, Switch, withRouter } from 'react-router-dom';
class App2 extends PureComponent {
  render() {
    return (
      <div>
        <h2>App2</h2>
          <NavLink to='/' exact activeStyle={{ color: 'red' }}>首页</NavLink>
          <NavLink to='/about' activeStyle={{ color: 'red' }}>关于</NavLink>
          {/* <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
          </Switch> */}
          {renderRoutes(routes)}
        <button onClick={e=>this.jumpRoute()}>手动跳转路由</button>
      </div>
    )
  }
  jumpRoute(){
    console.log(this.props)
  }
}

const mapStates = state => {
  return { ...state }
}
const mapDispatchs = dispatch => {
  return {
    addAction: function (num) {
      dispatch(addAction(num))
    },
    getHomeMultidata: function () {
      dispatch(getHomeMultidataAction)
    }
  }
}


export default connect(mapStates, mapDispatchs)(withRouter(App2))
