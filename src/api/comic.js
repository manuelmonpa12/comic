import axios from "axios";
import { URL_API } from "../config/index"
const config = {};

export const getComic = () => {
    
  config.headers = {'Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
  'Content-Type': 'application/json',
}
config.withCredentials = true
config.mode= 'no-cors'
  const res = axios.get(`${URL_API}/info.0.json`, config);
// const res = axios.create({
//     baseURL: "http://xkcd.com/info.0.json",
//     withCredentials: false,
//     headers: {
//       'Access-Control-Allow-Origin' : '*',
//       'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//       }
//   });
  return res;
};