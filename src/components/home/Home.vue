<template>
  <v-row>
    <v-col
      cols="12"
      xs="12"
      sm="12"
      md="12"
      lg="12"
      xl="12"
      class="d-flex justify-center flex-column align-center mt-2"
    >
      <div class="border-item-dashed mb-5">
        <h2 class=" d-flex justify-center p-title">
          Comic Manu
        </h2>
        <div class="justify-center align-center d-flex flex-column">
          <h3 class="p-text" v-if="dataComic">{{ dataComic.safe_title }}</h3>
          <v-img
            v-if="dataComic"
            max-height="450"
            max-width="250"
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
          <div class="text-center mt-12">
            <v-rating
              v-show="dataComic"
              v-model="rating"
              color="yellow darken-3"
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
            text
            outlined
            @click="comicClassified"
          >
            Clasificar
          </v-btn>
          <v-btn color="primary" class="p-text" :loading="loading" @click="ramdomNumber" text outlined>
            ramdom
          </v-btn>
        </v-card-actions>
      </div>
      <div class="border-item-dashed">
        <h2 class="d-flex justify-center p-title">
          Clasificacion
        </h2>
        <div v-if="comicClassifiedData.length < 1">
          <v-alert dense class="mt-2" type="warning">No hay comic clasificados</v-alert>
        </div>
        <div v-else>
          <v-data-table
            v-if="dataComic"
            :headers="headers"
            :items="comicClassifiedData"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
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
      </div>
    </v-col>
    <loader :visible="true" />
  </v-row>
</template>

<script src="./Home.js"></script>

<style></style>
