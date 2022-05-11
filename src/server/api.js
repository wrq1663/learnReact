import MyAxios from "./axios";

const List = {
  getName: function (option) {
    return MyAxios(option)
  }
}


export {List}