import React, { PureComponent } from 'react'
// import {getName} from '@/server/api'

export default class MyAxios extends PureComponent {
  render() {
    return (
      <div>MyAxios</div>
    )
  }
  componentDidMount() {
    // console.log(getName)
    // axios.interceptors.request.use(config=>{
    //   console.log(123123)
    // })
    // axios({
    //   url: 'http://httpbin.org/get',
    //   params: {
    //     name: 'why',
    //     age: 18
    //   },
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {

    // })
  }
}
