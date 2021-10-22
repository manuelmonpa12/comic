import { getComic, getComicRamdom } from "../../api/comic";

import Loader from "../../components/generic/Loader";
export default {
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  components: {
    loader: Loader,
  },
  data: function() {
    return {
      rating: 0,
      loading: false,
      dataComic: null,
      headers: [
        { text: "Titulo", value: "title" },
        { text: "Calificacion", value: "rate" },
      ],
      randomNumber: 1,
      comicClassifiedData: [],
    };
  },
  methods: {
    getComic,
    getComicRamdom,
    filterComic(data) {
      let dataFil = [];
      data.forEach((element) => {
        var exists = dataFil.find((prev) => prev.title === element.title);
        if (exists) {
          exists.rates = element.rates;
        } else {
          dataFil.push(this.dataComic);
        }
      });
      this.comicClassifiedData = dataFil
    },
    comicClassified() {
      console.log("object :>> ", this.dataComic);
      this.dataComic["rate"] = this.rating;
      this.comicClassifiedData.push(this.dataComic);
      this.filterComic(this.comicClassifiedData);
    },
    ramdomNumber() {
      this.loading = true;
      const min = 1;
      const max = 2;
      //   const max = this.dataComic.num;
      this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      this.ramdom();
      this.loading = false;
    },
    async fetchData() {
      this.dataComic = await this.getComic();
      console.log("fin :>> ", this.dataComic);
    },
    async ramdom() {
      this.dataComic = await this.getComicRamdom(this.randomNumber);
      console.log("fin :>> ", this.dataComic);
    },
    activeParentModal() {
      this.loading = true;
    },
  },
  mounted() {
    this.fetchData();
  },
};
