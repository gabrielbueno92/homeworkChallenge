<template>
    <ion-card>
        <div class="img-card-modal">
            <img :src="movie.LargePosterUrl" :alt="movie.Name">
        </div>
        <ion-card-header>
            <ion-card-title>{{ movie.Name }}</ion-card-title>
            <ion-card-subtitle> <b>Genres: </b>{{ movie.Genres }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
            <b>Synopsis:</b> {{ movie.Synopsis }}
        </ion-card-content>
        <ion-card-content>
            <b>Director:</b> {{ movie.Director }}
        </ion-card-content>
        <ion-card-content>
            <b>Release Date:</b> {{ (movie.ReleasedAt).substr(0,10) }}
        </ion-card-content>
        <ion-card-content>
            <b>Run time:</b> {{ movie.RunningTime }} minutes
        </ion-card-content>
        <ion-card-content>
            <b>Cast:</b> {{ movie.MainCast }}
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/vue';
    export default {
        props: {
            movie:Object,
        },
        components: { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent }
    };

</script>

<style scoped>
    @media (min-width: 760px) {
        .img-card-modal {
            width: 550px;
            display: flex;
            justify-content: center;

        }
    }
</style>
