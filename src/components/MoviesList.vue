<template>
    
    <ion-select class="genre-select" placeholder="Select genre" v-model="selectedGenre" @ionChange="filterMovies">
        <ion-select-option v-for="genre in genreList" :value="genre" :key="genre">{{ genre[<any>'name'] }}</ion-select-option>
    </ion-select>
    <ion-button class="btn-clear-filter" v-if="selectedGenre" expand="full" @click="clearFilter">Clear filter</ion-button>
    <div id="moviesListContainer">  
        <ion-card class="card-list" v-for="movie in filteredMovies" :key="movie['Id']" expand="block" @click="setMovie(movie) && setOpen(true)">
            <div class="card-img">
                <img :alt="movie['Name']" :src="movie['LargePosterUrl']" />
            </div>
            <ion-card-header>
                <ion-card-title>{{movie['Name']}}</ion-card-title>
                <ion-card-subtitle>Director: {{movie['Director'] || 'Unknown'}}</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
                Genres: {{ movie['Genres'] }}
            </ion-card-content>
        </ion-card>
        <ion-modal :movie="selectedMovie" :is-open="isOpen" >
            <ion-header>
                <ion-toolbar>
                <ion-title>Movie details</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="setOpen(false)">Close</ion-button>
                </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
            <ion-card>
                <div class="img-card-modal">
                    <img :src="movieSelected.LargePosterUrl" :alt="movieSelected.Name">
                </div>
                <ion-card-header>
                    <ion-card-title>{{ movieSelected.Name }}</ion-card-title>
                    <ion-card-subtitle> <b>Genres: </b>{{ movieSelected.Genres }}</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <b>Synopsis:</b> {{ movieSelected.Synopsis }}
                </ion-card-content>
                <ion-card-content>
                    <b>Director:</b> {{ movieSelected.Director }}
                </ion-card-content>
                <ion-card-content>
                    <b>Release Date:</b> {{ (movieSelected.ReleasedAt).substr(0,10) }}
                </ion-card-content>
                <ion-card-content>
                    <b>Run time:</b> {{ movieSelected.RunningTime }} minutes
                </ion-card-content>
                <ion-card-content>
                    <b>Cast:</b> {{ movieSelected.MainCast }}
                </ion-card-content>
            </ion-card>
            </ion-content>
        </ion-modal>

    </div>
</template>
<script lang="ts">
import { IonDatetime, IonDatetimeButton, IonToggle, IonLabel, IonSegment, IonSegmentButton, IonItem, IonList, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol } from '@ionic/vue';
import axios from 'axios';

  export default {
    data() {
        return {
            moviesList: [],
            genreList: [],
            selectedMovie: null,
            selectedGenre: null,
            date: ""
        };
    },
    computed: {
        filteredMovies() {
            if (this.selectedGenre) {
                return this.moviesList.filter((movie) => movie['Genres'].includes(this.selectedGenre[<any>'code']) === true);
            }
            return this.moviesList;
        },
    },
    methods: {
        async getDataFromMoviesApi() {
            try {  
                const response = await axios.get('https://cors-proxy-api-gb-dev.fl0.io/https://www.eventcinemas.com.au/Movies/GetNowShowing');
                this.moviesList = response.data.Data.Movies;
                this.genreList = response.data.Data.Genres;
            } catch (error) {
                console.log(error)
            }
        },
        async filterMovies() {
            this.$forceUpdate();
        },
        clearFilter(){
            this.selectedGenre = null;
            this.$forceUpdate();
        },
    },
    created(){
        this.getDataFromMoviesApi();
    },
    components: {IonDatetime, IonDatetimeButton, IonModal, IonToggle, IonLabel, IonSegment, IonSegmentButton, IonContent, IonItem, IonList, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol },
};
</script>

<script lang="ts" setup>
  import { IonButtons, IonButton, IonModal, IonHeader, IonToolbar, IonContent, IonTitle } from '@ionic/vue';
  import { ref } from 'vue';

  const isOpen = ref(false);
  const movieSelected = ref();

  const setMovie = (selectedMovie: Object) => (movieSelected.value = selectedMovie);
  const setOpen = (open: boolean) => (isOpen.value = open);
</script>

<style scoped>



#moviesListContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.card-img{
    width: fit-content;
    height: 500px;
    align-items: stretch;
    display: flex;
    align-content: stretch;
}

@media (min-width: 760px) {
    .img-card-modal {
        width: 550px;
        display: flex;
        justify-content: center;

    }
}

.card-list {
    width: 320px;
    
}

ion-modal {
    justify-content: center;
}

.genre-select {
    margin: 10px;
}

.btn-clear-filter {
    width: fit-content;
    margin: 10px;
}

</style>