import { getComic } from "../../api/comic";
import Classified from "../generic/classified/Classified.vue";
export default {
  components: {
    classified: Classified,
  },
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  data: function() {
    return {
      text: null,
      snackbar: false,
      rating: 0,
      loading: false,
      randomNumber: 1,
    };
  },
  computed: {
    languages() {
      return [
        {
          title: this.$t("langEs"),
          lang: "es",
          flag: "es.png",
        },
        {
          title: this.$t("langEn"),
          lang: "en",
          flag: "en.png",
        },
      ];
    },
    comicClassifiedData: {
      get() {
        return this.$store.state.comicClassifiedData || [];
      },
      set(value) {
        this.$store.commit("SET_EDITING_OBJECT", {
          key: "comicClassifiedData",
          value,
        });
      },
    },
    dataComic: {
      get() {
        return this.$store.state.dataComic || null;
      },
      set(value) {
        this.$store.commit("SET_EDITING_OBJECT", {
          key: "dataComic",
          value,
        });
      },
    },
  },
  methods: {
    getComic,
    comicClassified() {
      this.$store.commit("ADD_RATE", this.rating);
      this.$store.commit("ADD_COMIC", this.dataComic);
      this.rating = 0;
    },
    setInterfaceLang(lang) {
      localStorage.setItem("usr-lang", lang || "en");
      location.reload();
    },
    ramdomNumber() {
      this.loading = true;
      const min = 1;
      let max = 0;
      if (this.dataComic) {
        max = this.dataComic.num;
      } else {
        max = 2;
      }
      this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      this.ramdom();
    },
    fetchData() {
      this.getComic(0, (res, error) => {
        if (error) {
          this.snackbar = true;
          this.text = "Ocurrio un error";
        } else {
          this.snackbar = true;
          this.text = "Cargado con exito";
          this.dataComic = res;
        }
        this.loading = false;
      });
    },
    ramdom() {
      this.getComic(this.randomNumber, (res, error) => {
        if (error) {
          this.snackbar = true;
          this.text = this.$t('loaded');
        } else {
          this.snackbar = true;
          this.text = this.$t('loaded');
          this.dataComic = res;
        }
        this.loading = false;
        this.rating = 0;
      });
    },
    activeParentModal() {
      this.loading = true;
    },
  },
  mounted() {
    this.loading = true;
    this.fetchData();
  },
};
