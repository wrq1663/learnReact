import React, { PureComponent } from "react";
import { StoreContext } from "./context";




export default function connect(mapStates, mapDispatchs) {
  return function exchangComt(Compt) {
    class exchangComt extends PureComponent {
      constructor(props, context) {
        super(props, context);
        console.log(context)
        this.state = {
          storeState: mapStates(context.getState())
        }
      }
      componentDidMount() {
        this.storeListener = this.context.subscribe(() => {
          this.setState({
            storeState: mapStates(this.context.getState())
          })
        })
      }
      componentWillUnmount() {
        this.storeListener()
      }
      render() {
        return <Compt {...this.props}
          {...mapStates(this.context.getState())}
          {...mapDispatchs(this.context.dispatch)}
        />
      }
    }
    exchangComt.contextType = StoreContext
    return exchangComt
  }
}