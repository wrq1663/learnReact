import React, { PureComponent } from 'react'
// import connect from './utils/connect';
import { connect } from 'react-redux';
import { addAction, getHomeMultidataAction } from './store/action';
import Routes from 'react-router-dom'
// import Comment from '@/component/comment'
import router from '@/router/router-config'
import Home from '@/page/test/Home'
import About from '@/page/test/About'


//router学习
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';



class App extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {/* {this.props.count}
        <button onClick={e => this.props.addAction(1)}>+1</button>
        <button onClick={e => this.props.getHomeMultidata()}>123213</button> */}
        {/* <Comment/> */}
        <h2>App</h2>
        <BrowserRouter>
          <Link to='/'>首页</Link>
          <Link to='/about/123'>关于</Link>
          {/* <Routes> */}
            <Route exact  path='/' component={<Home/>} />
            <Route exact  path='/about/:id' element={<About/>} />
          {/* </Routes> */}
          {/* {router} */}
        </BrowserRouter>
      </div>
    )
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

export default connect(mapStates, mapDispatchs)(App)

