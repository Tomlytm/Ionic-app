<style>
/* ion
ion-input{
    width: 100%;
    background-color: grey;
} */
.avatar {
    background-color: aliceblue;
}
.purchase{
    position:absolute;
    top: 3rem;
    width: 100%
}
.input {
    background-color: rgb(32, 32, 32);
    /* border-radius: .5rem; */
    width: 100%;
    margin-top: .5rem;
}
</style>

<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
        <ion-icon :icon="chevronBack"></ion-icon>
          <ion-title>Buy Airtime</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="purchase">
          <ion-card color="black">
       
           <ion-card-content>
            <ion-label>Amount</ion-label>
           <ion-input class="input" v-model="amount" type="text" placeholder="   How much?"></ion-input>
         <br>
            <ion-label>Network </ion-label>
            <ion-select class="input" placeholder="Choose Network">
                <ion-select-option value="mtn"> MTN </ion-select-option>
                <ion-select-option value="airtel">Airtel</ion-select-option>
                <ion-select-option value="glo">Glo</ion-select-option>
                <ion-select-option value="etisalat">Etisalat</ion-select-option>
            </ion-select>
         <br>
            <ion-label>Phone Number</ion-label>
           <ion-input class="input" v-model="amount" type="text" placeholder="   Enter Phone Number"></ion-input>
         <br>
         <br>
           </ion-card-content>
         </ion-card>
       </div>
       <ion-avatar><ion-image src="../assets/icons/4.png"></ion-image></ion-avatar>
       <ion-card color="black">
        <ion-button class=".btn" @click="logIn" expand="block" color="tertiary">Buy</ion-button>
       </ion-card>
    </ion-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import {IonPage, IonHeader, IonToolbar, IonTitle} from '@ionic/vue';
  import { arrowUp, documentText, chatboxEllipses, card, lockClosed, cog, unlink, shareSocial, star, square, chevronBack, IonAvatar } from "ionicons/icons";
  export default defineComponent({
    name: 'Tab3Page',
    components: {IonHeader, IonToolbar, IonTitle, IonPage, IonAvatar },
    setup (){
      return { arrowUp, documentText, chatboxEllipses, card, lockClosed, cog, unlink, shareSocial, star, square, chevronBack }
    }
  });
  </script>
  
  <style>
  *{
    font-family: Verdana, Geneva, Tahoma, sans-serif
  }
  </style>
  