import { getComic, getComicRamdom } from "../../api/comic";
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
      rating: 0,
      loading: false,
      randomNumber: 1,
    };
  },
  computed: {
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
    }
  },
  methods: {
    getComic,
    getComicRamdom,
    comicClassified() {
      console.log("dataComic :>> ", this.dataComic);
      this.$store.commit("ADD_RATE", this.rating);
      this.$store.commit("ADD_COMIC", this.dataComic);
      this.rating = 0
    },
    ramdomNumber() {
      this.loading = true;
      const min = 1;
      let max = 0
      if (this.dataComic) {
         max = this.dataComic.num;
      } else {
         max = 2;
      }
      this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      this.ramdom();
    },
    async fetchData() {
      this.dataComic = await this.getComic();
      this.loading = false;
    },
    async ramdom() {
      this.dataComic = await this.getComicRamdom(this.randomNumber);
      this.loading = false;
      this.rating = 0
    },
    activeParentModal() {
      this.loading = true;
    },
  },
  async created() {
    this.fetchData();
  },
};
