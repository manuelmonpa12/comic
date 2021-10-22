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
        fetchData (){
            this.dataComic = this.getComic()
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
