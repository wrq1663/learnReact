import axios from 'axios'
import { BASE_URL } from './config';
const instance = axios.create({
  baseURL: BASE_URL
});

export default function (option = { method: 'get' }) {
  return new Promise((reslove, reject) => {
    instance.request(option).then(data => {
      reslove(data)
    }).catch(error => {
      reject(error)
    })
  })
}