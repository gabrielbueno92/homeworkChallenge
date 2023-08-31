<template>
    <div id="registrationFormContainer">
    <ion-list @submit.prevent="submitForm" v-if="!formSubmitted">
        
        <ion-item>
            <ion-input v-model="name" label="First name:" type="text" placeholder="John"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input v-model="lastName" label="Last name:" type="text" placeholder="Gomez"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input v-model="email" label="Email:" type="email" placeholder="john@gomez.com"></ion-input>
        </ion-item>
        <ion-item>
            <ion-label class="first-name">Date of birth:</ion-label>
            <ion-datetime-button class="date" datetime="datetime">
            <ion-modal :keep-contents-mounted="true">
                <ion-datetime :show-default-buttons="true" presentation="date" id="datetime"></ion-datetime>
            </ion-modal>  
            </ion-datetime-button>
        </ion-item>
        <ion-item>
            <ion-toggle>Are you a popcorn fan?</ion-toggle>
        </ion-item>
        <ion-item>What genre of movie do you prefer?</ion-item>
        <ion-item>
            <ion-segment @ion-change="segmentChanged($event)">
                <ion-segment-button value="comedy">
                    <ion-label>Comedy</ion-label>
                </ion-segment-button>
                <ion-segment-button value="horror">
                    <ion-label>Horror</ion-label>
                </ion-segment-button>
                <p v-if="showComedyText && comedySelected">Yeah, laugh non-stop!</p>
                <p v-else-if="horrorSelected">Afterwards I can't sleep at night</p>
            </ion-segment>
        </ion-item>
        <ion-item>
        </ion-item>
        <ion-item>
                <ion-button>Sign In</ion-button>
        </ion-item>
    </ion-list>
    </div>
</template>
<script lang="ts">
import { IonDatetime, IonDatetimeButton, IonModal, IonToggle, IonLabel, IonSegment, IonSegmentButton, IonItem, IonList, IonInput, IonButton  } from '@ionic/vue';

export default {
    data() {
        return {
            name: "",
            lastName: "",
            email: "",
            formSubmitted: false,
            showComedyText: false,
            comedySelected: false,
            horrorSelected: false,
        };
    },
    methods: {
        submitForm: function () {
            this.formSubmitted = true;
        },
        segmentChanged(ev: CustomEvent){
            console.log(ev)
            if(ev.detail.value == "comedy"){
                this.showComedyText = true;
                this.comedySelected = true;
            }
            if(ev.detail.value == "horror"){
                this.showComedyText = false;
                this.comedySelected = false;
                this.horrorSelected = true;
            }

            if(ev.detail.value == undefined){
                this.showComedyText = false;
                this.comedySelected = false;
                this.horrorSelected = false;
            }
            
        }
    },
    components: { IonDatetime, IonDatetimeButton, IonModal, IonToggle, IonLabel, IonSegment, IonSegmentButton, IonItem, IonList, IonInput, IonButton },
};
</script>

<style scoped>

.content {
    list-style-type: none;
}

</style>