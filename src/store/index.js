import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comicClassifiedData: [],
    dataComic: null,
    loadingTable: false,
    itemDetail: null,
    dlgConfirmation: false,
    dlgConfirmationText:null,
    dlgConfirmationType:false
  },
  mutations: {
    SET_EDITING_OBJECT(state, payload) {
      state[payload.key] = payload.value;
    },
    ADD_COMIC(state, commic) {
      state.loadingTable = true;
      var exists = state.comicClassifiedData.find(
        (prev) => prev.title === commic.title
      );
      if (exists) {
        state.dlgConfirmationType = false;
        state.dlgConfirmationText = 'Este comic ya ha sido calificado'
        state.dlgConfirmation = true
      } else {
        state.comicClassifiedData.push(commic);
      }
      state.loadingTable = false;
    },
    ADD_RATE(state, rate) {
      state.dataComic["rate"] = rate;
    },
    DELETE_COMIC(state, title) {
      state.comicClassifiedData = state.comicClassifiedData.filter(function(
        obj
      ) {
        return obj.title !== title;
      });
    },
  },
  actions: {},
  modules: {},
});
