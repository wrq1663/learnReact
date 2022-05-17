import axios from "axios";
import { type1, type2, type3 } from "./constantName";
export const addAction = num => ({
  type: type1,
  num
});
export const getHomeMultidataAction = dispatch => {
  console.log(dispatch)
      axios({
      url: 'http://httpbin.org/get',
      params: {
        name: 'why',
        age: 18
      },
    }).then(({data}) => {
      dispatch({
        type:type2,
        data
      })
    })
};