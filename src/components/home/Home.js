import { getComic } from "../../api/comic";

import Loader from '../../components/generic/Loader'
export default {
    inject: {
        theme: {
          default: { isDark: false },
        },
      },
    components: {
        'loader': Loader,
    },
    data: function () {
        return {
            rating:0,
            loading: false,
            dataComic:null
        }
    },
    methods: {
        getComic,
        async fetchData (){
            this.dataComic = await this.getComic()
            console.log('data :>> ', this.dataComic);
        },
        activeParentModal() {
            this.loading = true
        }
    },
    mounted() {
       this.fetchData()
    }

}
