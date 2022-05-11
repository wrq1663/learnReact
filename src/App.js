import React, { PureComponent } from 'react'
import connect from './utils/connect';
import { addAction } from './store/action';
import Comment from '@/component/comment'
import { type1 } from './store/constantName'
import store from './store';
 class App extends PureComponent {
  constructor(){
    super();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.count}
        <button onClick={e=>this.props.addAction(1)}>+1</button>
        {/* <Comment/> */}
      </div>
    )
  }
}

const mapStates = state => {
  return {...state}
}
const mapDispatchs = dispatch => {
  return {
    addAction: function (num) { 
      dispatch(addAction(num))
     }
  }
}

export default connect(mapStates,mapDispatchs)(App)

