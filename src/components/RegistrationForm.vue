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
        <ion-item>
            <ion-segment value="default">
                <ion-segment-button value="women">
                    <ion-label>Women</ion-label>
                </ion-segment-button>
                <ion-segment-button value="men">
                    <ion-label>Men</ion-label>
                </ion-segment-button>
            </ion-segment>
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
            formSubmitted: false
        };
    },
    methods: {
        submitForm: function () {
            this.formSubmitted = true;
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