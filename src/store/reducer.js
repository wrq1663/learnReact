import { type1,type2 } from "./constantName"
const defaultState = {
  count:0,
  testObj:{}
}
export default function reducer(state=defaultState,action){
  switch(action.type){
    case type1:
     return {...state,count:state.count + action.num};
     case type2:
       console.log(action.data)
      return {...state,testObj:action.data};
    default:
      return state
  }
}