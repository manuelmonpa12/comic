<template>
  <v-row class="d-flex justify-center flex-column align-center my-2 mx-2">
    <v-col
      class="border-item-dashed mb-5"
      cols="12"
      xs="12"
      sm="12"
      md="8"
      lg="7"
      xl="6"
    >
    <div class="content-title ">
        <h2 class=" d-flex justify-center p-title mb-2" >
        Comic Manu
      </h2>
      <v-img contain max-height="50" src="../../assets/masiv.png"></v-img>
    </div>
      <div class="justify-center align-center d-flex flex-column pt-2">
        <h3 class="p-text" v-if="dataComic">{{ dataComic.safe_title }}</h3>
        <v-img
        contain
          v-if="dataComic"
          max-height="250"
          min-width="250"
          :src="dataComic.img"
        ></v-img>
        <v-sheet
          style="width: 100%;"
          v-else
          :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
          class="pa-3"
        >
          <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-sheet>
        <div class="text-center mt-2">
          <v-rating
            v-show="dataComic"
            v-model="rating"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            hover
            large
          ></v-rating>
        </div>
      </div>
      <v-divider></v-divider>
      <v-card-actions class="justify-center">
        <v-btn
          color="primary"
          class="p-text"
          :disabled="!dataComic"
          outlined
          @click="comicClassified"
        >
        <v-icon class="mr-2">mdi-arrow-down-thin-circle-outline</v-icon>
          <b>Clasificar</b>
        </v-btn>
        <v-btn
          color="primary"
          class="p-text"
          :loading="loading"
          @click="ramdomNumber"
          outlined
        >
                <v-icon class="mr-2">mdi-reload</v-icon>
          <b>ramdom</b>
        </v-btn>
      </v-card-actions>
    </v-col>
    <classified :visible="true" />
    <div v-if="false">
      <v-overlay :value="loading" opacity="0.6">
          <v-progress-circular
        :size="70"      
        :width="7"
        color="black"
        indeterminate
      ></v-progress-circular>
      </v-overlay>
    </div>
  </v-row>
</template>

<script src="./Home.js"></script>

<style></style>
