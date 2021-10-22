import Vue from 'vue'
import { URL_API } from "../config/index";
import VueSuperagent from 'vue-superagent'
const config = {};
let corsHeader = "https://comic-steel.vercel.app";
let apiUrl = "http://xkcd.com/";
let apiUrlFormat = "info.0.json";
let superAgent = VueSuperagent;
Vue.use(VueSuperagent)
let data = null
export const getComic = () => {
  const requestUrl = `${corsHeader}/${apiUrl}/${apiUrlFormat}`;
console.log('requestUrl :>> ', requestUrl);
debugger
  Vue.superagent.get(requestUrl).end((error, response) => {
    if (error) {
      console.log("error :>> ", error);
    }
    data = response.body;

    console.log("data :>> ", data);
  });

  //   config.headers = {'Access-Control-Allow-Origin':'*',
  //   'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
  //   'Content-Type': 'application/json',
  // }
  // config.withCredentials = true
  // config.mode= 'no-cors'
  //   const res = axios.get(`${URL_API}/info.0.json`, config);
  // const res = axios.create({
  //     baseURL: "http://xkcd.com/info.0.json",
  //     withCredentials: false,
  //     headers: {
  //       'Access-Control-Allow-Origin' : '*',
  //       'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //       }
  //   });
  return data;
};
