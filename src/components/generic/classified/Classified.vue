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
        <h2 class=" d-flex justify-center p-title mb-2" >
        Clasificación
      </h2>
      <v-img contain max-height="50" src="../../../assets/masiv.png"></v-img>
    </div>
    <div v-if="comicClassifiedData.length > 0">
      <v-simple-table v-if="dataComic" dense class="mt-2">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Titulo
              </th>
              <th class="text-left">
                Calificación
              </th>
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
      <v-alert dense class="mt-2" type="warning"
        >No hay comic clasificados</v-alert
      >
    </div>
  </v-col>
</template>
<script>
export default {
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
      items: [],
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
  },
  methods: {},
  mounted() {},
};
</script>
