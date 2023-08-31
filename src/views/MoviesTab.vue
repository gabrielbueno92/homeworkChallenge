<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Movies</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Movies</ion-title>
        </ion-toolbar>
      </ion-header>
      <MoviesList/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import MoviesList from '@/components/MoviesList.vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>
