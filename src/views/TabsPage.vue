<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="registration" href="/challenge/registration">
          <ion-icon aria-hidden="true" :icon="newspaperOutline" />
          <ion-label>Registration</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="movies" href="/challenge/movies">
          <ion-icon aria-hidden="true" :icon="filmOutline" />
          <ion-label>Movies</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { newspaperOutline, filmOutline } from 'ionicons/icons';
</script>
