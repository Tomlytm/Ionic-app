<style>
.register-card {
  margin-top: 30%;
}
a{
  text-decoration: none;
  color: white;
}
.return {
  color: aliceblue;
}
ion-icon {
  font-size: 2.5em;
}
ion-toolbar a {
  color:white;
}
ion-item ion-label {
        font-family: 'Verdana';
      }
.foot {
  position: fixed;
  bottom: 20px;
}
</style>
<template>
<ion-header>
      <ion-toolbar>
       <a class='return' href="/splash"> <ion-icon :icon="chevronBackOutline"></ion-icon></a>
       <ion-button fill="outline" shape="round" slot="end">Next</ion-button>
      </ion-toolbar>
    </ion-header>

    <div class="register-card">
      
     <ion-card>
      <ion-card-header align="center">
        <ion-card-title >Sign Up</ion-card-title>
      </ion-card-header>
      <ion-card-content>
      <ion-item>
      <ion-label position="floating">Email Address</ion-label>
      <ion-input type="email" placeholder="youremail@here.com"></ion-input>
    </ion-item>
    <br>
    <ion-item>
      <ion-label position="floating">Password</ion-label>
      <ion-input type="password" placeholder="**********"></ion-input>
    </ion-item>
    <br>
    <ion-item>
      <ion-label position="floating">Confirm Password</ion-label>
      <ion-input type="password" placeholder="**********"></ion-input>
    </ion-item>
    <br>
    <ion-item>
      <ion-label position="floating">Referral Code (optional) *</ion-label>
      <ion-input></ion-input>
    </ion-item>
    <br>
      </ion-card-content>
    </ion-card>
  </div>
  <br>
  <br>
    <ion-footer class="foot">
      <h6 align="center">
      By tapping 'Next', you agree to our <a href="#"><b>Terms & Conditions and Policy Privacy</b>
    </a></h6>
    <br>
    </ion-footer>
  </template>
  
  <script>
  import { IonLabel, IonInput, IonItem, IonCard, IonCardContent, IonCardHeader,IonCardTitle, IonIcon} from '@ionic/vue';
  import { chevronBackOutline } from "ionicons/icons";
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    components: { IonLabel, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonIcon },

    setup(){
      return { chevronBackOutline }
    }
  });
  </script>
  