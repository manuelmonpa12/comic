<template>
    <v-row 
    style="background-image: url('https://www.nicepng.com/png/full/222-2220797_halftone-circle-stock-photography-illustration-comic-book-explosion.png')">
        <template v-if="!loading" >
              <v-card
    class="elevation-16 mx-auto mt-8"
  >
    <v-card-title class="text-h5">
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="d-flex justify-center mt-2">
                <span class="p-title">Comic Manu</span>
            </v-col>
    </v-card-title>
    <v-card-text>
        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="d-flex justify-center">
                <v-img max-height="450" max-width="250" src="https://imgs.xkcd.com/comics/dark_arts.png"></v-img>
            </v-col>
      <div class="text-center mt-12">
        <v-rating
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
      <v-btn
        block
        color="primary"
        text
      >
        Clasificar
      </v-btn>
    </v-card-actions>
  </v-card>
        </template>
        <loader :visible="true" />
    </v-row>
</template>

<script  src="./Home.js">
   
</script>

<style>

</style>