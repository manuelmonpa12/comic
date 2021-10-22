import axios from "axios";
import { URL_API } from "../config/index"
const config = {};

export const getComic = () => {
//   config.headers = {'Access-Control-Allow-Origin':'*',
//   'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'}
config.mode= 'no-cors'
config.headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
}
config.withCredentials = true
  const res = axios.get(`${URL_API}/info.0.json`, config);
  return res;
};