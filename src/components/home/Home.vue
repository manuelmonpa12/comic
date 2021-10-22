<template>
  <v-row>
    <template v-if="!loading">
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="12"
        lg="12"
        xl="12"
        class="d-flex justify-center mt-2"
      >
        <v-col
          cols="4"
          xs="12"
          sm="12"
          md="4"
          lg="4"
          xl="4"
          class="d-flex justify-center mt-2"
        >
          <v-card width="100%">
            <v-card-title class="text-h5 d-flex justify-center">
                <span class="p-title">Comic Manu</span>
            </v-card-title>
            <v-card-text>
                <v-img
                  v-if="dataComic"
                  max-height="450"
                  max-width="250"
                  :src="dataComic.img"
                ></v-img>
                <h3 v-if="dataComic">{{dataComic.safe_title}}</h3>
                <v-sheet
                  style="width: 100%;"
                  v-else
                  :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                  class="pa-3"
                >
                  <v-skeleton-loader
                    class="mx-auto"
                    type="card"
                  ></v-skeleton-loader>
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
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="justify-center">
              <v-btn block color="primary" :disabled="!dataComic" text>
                Clasificar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
          cols="8"
          xs="12"
          sm="12"
          md="8"
          lg="8"
          xl="8"
          class="d-flex justify-center mt-2"
        >
          <v-card width="100%">
            <v-card-title class="text-h5 d-flex justify-center">
                <span class="p-title">Clasificacion</span>
            </v-card-title>
            <v-card-text>
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
                  <v-skeleton-loader
                    class="mx-auto"
                    type="table-tbody"
                  ></v-skeleton-loader>
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
            </v-card-text>
          </v-card>
        </v-col>
      </v-col>
    </template>
    <loader :visible="true" />
  </v-row>
</template>

<script src="./Home.js"></script>

<style></style>
