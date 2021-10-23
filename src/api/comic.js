import Vue from "vue";
import { URL_API, CORS_HEADER } from "../config/index";
import VueSuperagent from "vue-superagent";
Vue.use(VueSuperagent);
let data = null;

export const getComic = (number, callback) => {
  let apiUrlFormat = "info.0.json";
  let requestUrl = ''
  if(number > 0){
     requestUrl = `${CORS_HEADER}/${URL_API}/${number}/${apiUrlFormat}`;
  }else{
     requestUrl = `${CORS_HEADER}/${URL_API}/${apiUrlFormat}`;
  }
  Vue.superagent.get(requestUrl).end((error, response) => {
    callback(response.body, error);
  });
};