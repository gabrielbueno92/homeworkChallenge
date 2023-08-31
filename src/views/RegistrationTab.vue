<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Registration</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Registration</ion-title>
        </ion-toolbar>
      </ion-header>
      <RegistrationForm />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import RegistrationForm from '@/components/RegistrationForm.vue';
</script>
