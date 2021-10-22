import { getComic } from "../../api/comic";

import Loader from '../../components/generic/Loader'
export default {
    components: {
        'loader': Loader,
    },
    data: function () {
        return {
            loading: false,
            dataComic:[]
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
       
    }

}
