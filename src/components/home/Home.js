import { getComic } from "../../api/comic";

import Loader from '../../components/generic/Loader'
export default {
    components: {
        'loader': Loader,
    },
    data: function () {
        return {
            loading: false
        }
    },
    methods: {
        getComic,
        activeParentModal() {
            this.loading = true
            // setTimeout(() => {
            //     this.$router.push({
            //         name: 'search'
            //     })
            // }, 1400);
        }
    },
    mounted() {
       let data = this.getComic()
       console.log('data :>> ', data);
    }

}
