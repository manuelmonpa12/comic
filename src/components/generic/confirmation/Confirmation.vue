<template>
  <v-dialog v-model="dlgConfirmation" width="350">
    <v-card>
      <v-col
        class="border-item-dashed"
        cols="12"
        xs="12"
        sm="12"
        md="12"
        lg="12"
        xl="12"
      >
        <div class="content-title ">
          <h2 class=" d-flex justify-center p-title mb-2">
            Confirmacion
          </h2>
          <span v-if="dlgConfirmationText" class="d-flex justify-center p-sub-title-white">{{dlgConfirmationText}}</span>
        </div>
      </v-col>
      <v-card-actions>
        <v-btn block color="primary" text @click="deleteItem()">
          Aceptar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "Confirmation",
  data: function() {
    return {
    };
  },
  computed: {
    itemDetail: {
      get() {
        return this.$store.state.itemDetail || null;
      },
    },
    dlgConfirmationText: {
      get() {
        return this.$store.state.dlgConfirmationText || null;
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
    }
  },
  methods: {
      deleteItem() {
        this.dlgConfirmation = false
        if(this.dlgConfirmationType){
            this.$store.commit("DELETE_COMIC", this.itemDetail.title);
        }
    },
  },
  mounted() {},
};
</script>
