<template>
<ion-header>
      <ion-toolbar>
       <a class='return' href="/splash">Return</a>
      </ion-toolbar>
    </ion-header>

    <div class="register-card">
      
     <ion-card>
      <ion-card-header>
        
        <ion-card-title>Email & Password</ion-card-title>
        <br>
        <ion-card-subtitle>Open an account with a few details. Your Password
          must have at least 8 characters including letters and a number.
        </ion-card-subtitle>
      </ion-card-header>
  
      <ion-card-content>
        <ion-item>
      <ion-label position="floating">Email Address</ion-label>
      <ion-input type="email" placeholder="youremail@here.com"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Password</ion-label>
      <ion-input type="password" placeholder="**********"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Confirm Password</ion-label>
      <ion-input type="password" placeholder="**********"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Referral Code(optional)*</ion-label>
      <ion-input></ion-input>
    </ion-item>
    <br>
    <ion-button expand="block" color="primary">Next</ion-button>
    
      </ion-card-content>
    </ion-card>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  
    <ion-item >
      <p align="center">
      By tapping 'Next', you agree to our <a href="#"><b>Terms & Conditions and Policy Privacy</b>
    </a></p>
    </ion-item>
  </template>
  
  <script>
  import { IonLabel, IonInput, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    components: { IonLabel, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, }
  });
  </script>

  <style>
.register-card {

  margin-top: 25%;
}
a{
  text-decoration: none;
  color: white;
}
.return {
  color: aliceblue;
}
</style>