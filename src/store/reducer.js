import { type1 } from "./constantName"
const defaultState = {
  count:0
}
export default function reducer(state=defaultState,action){
  switch(action.type){
    case type1:
     return {...state,count:state.count + action.num};
    default:
      return state
  }
}