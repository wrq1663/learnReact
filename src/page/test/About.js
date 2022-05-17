import React, { PureComponent } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

// function Info1(props) {
//   return <h2>信息1</h2>
// }

// function Info2(props) {
//   console.log(props.location.state)
//   return <h2>信息2</h2>
// }

// function Info3(props) {
//   return <h2>信息3 id:{props.match.params.id}</h2>
// }


export default class About extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h2>About</h2>
        <NavLink to="/about">信息1</NavLink>
        <NavLink to="/about/info2">信息2</NavLink>
        <NavLink to="/about/info3">信息3</NavLink>
        {/* <Switch>
          <Route  path='/about' component={Info1} />
          <Route path='/about/info2' component={Info2} />
          <Route path='/about/info3' component={Info3} />
        </Switch> */}
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }

}


