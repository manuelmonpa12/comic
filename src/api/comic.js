import Vue from "vue";
import { URL_API, CORS_HEADER } from "../config/index";
import VueSuperagent from "vue-superagent";
Vue.use(VueSuperagent);
let data = null;

export const getComic = async () => {
  let apiUrlFormat = "info.0.json";
  const requestUrl = `${CORS_HEADER}/${URL_API}/${apiUrlFormat}`;
  Vue.superagent.get(requestUrl).end((error, response) => {
    if (error) {
      console.log("error :>> ", error);
    }
     data = response.body;
  });
  return data;
};

export const getComicRamdom = (number) => {
    let apiUrlFormat = "info.0.json";
    const requestUrl = `${CORS_HEADER}/${URL_API}/${number}/${apiUrlFormat}`;
    Vue.superagent.get(requestUrl).end((error, response) => {
      if (error) {
        console.log("error :>> ", error);
      }
       data = response.body;
    });
    return data;
};