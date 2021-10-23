<template>
  <v-col
    class="border-item-dashed"
    cols="12"
    xs="12"
    sm="12"
    md="8"
    lg="7"
    xl="6"
  >
    <div class="content-title ">
      <h2 class=" d-flex justify-center p-title mb-2">
        {{$t('classification')}}
      </h2>
      <v-img contain max-height="50" src="../../../assets/masiv.png"></v-img>
    </div>
    <div v-if="comicClassifiedData.length > 0">
      <v-simple-table v-if="dataComic" dense class="mt-2">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                {{$t('title')}}
              </th>
              <th class="text-left">
                {{$t('classification')}}
              </th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in comicClassifiedData" :key="item.title">
              <td>{{ item.title }}</td>
              <td>
                <v-rating
                  readonly
                  small
                  hover
                  length="5"
                  size="64"
                  :value="item.rate"
                ></v-rating>
              </td>
              <td>
                <v-btn small outlined color="red" @click="setItem(item)">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-sheet
        style="width: 100%;"
        v-else
        :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-3"
      >
        <v-skeleton-loader
          class="mx-auto"
          type="table-tbody"
        ></v-skeleton-loader>
      </v-sheet>
    </div>
    <div v-else>
      <v-alert dense class="mt-2" type="info" outlined
        >{{$t('emptyMsg')}}</v-alert
      >
    </div>
    <confirmation :visible="dlgConfirmation" />
  </v-col>
</template>
<script>
import Confirmation from "../confirmation/Confirmation.vue";
export default {
  components: {
    confirmation: Confirmation,
  },
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  name: "Classified",
  data: function() {
    return {
    };
  },
  computed: {
    loadingTable: {
      get() {
        return this.$store.state.loadingTable || false;
      },
    },
    comicClassifiedData: {
      get() {
        return this.$store.state.comicClassifiedData || [];
      },
    },
    dataComic: {
      get() {
        return this.$store.state.dataComic || null;
      },
    },
    itemDetail: {
      get() {
        return this.$store.state.itemDetail || null;
      },
      set(value) {
        this.$store.commit("SET_EDITING_OBJECT", {
          key: "itemDetail",
          value,
        });
      },
    },
    dlgConfirmationText: {
      get() {
        return this.$store.state.dlgConfirmationText || null;
      },
       set(value) {
        this.$store.commit("SET_EDITING_OBJECT", {
          key: "dlgConfirmationText",
          value,
        });
      },
    },
    dlgConfirmation:{
      get() {
        return this.$store.state.dlgConfirmation || null;
      },
      set(value) {
        this.$store.commit("SET_EDITING_OBJECT", {
          key: "dlgConfirmation",
          value,
        });
      },
    },
    dlgConfirmationType:{
      get() {
        return this.$store.state.dlgConfirmationType || null;
      },
      set(value) {
        this.$store.commit("SET_EDITING_OBJECT", {
          key: "dlgConfirmationType",
          value,
        });
      },
    }
  },
  methods: {
    setItem(item) {
      this.dlgConfirmationType = true;
      this.dlgConfirmationText = this.$t('existsMsg')+' '+item.title
      this.dlgConfirmation = true;
      this.itemDetail = item;
    },
  },
  mounted() {},
};
</script>
