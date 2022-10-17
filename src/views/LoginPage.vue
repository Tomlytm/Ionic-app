<template>
    <ion-header>
          <ion-toolbar>
            <a class='return' href="/splash"> <ion-icon :icon="chevronBackOutline"></ion-icon></a>
            <ion-icon slot="end" :icon="helpCircleOutline"></ion-icon>
          </ion-toolbar>
        </ion-header>
    
        <div class="login-card">
          
         <ion-card>
          <ion-card-header>
            
            <ion-card-title align="center">Hello!</ion-card-title>
            <br>
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
          <ion-button expand="block" color="tertiary">Sign In</ion-button>
        
        
          </ion-card-content>
        </ion-card>
      </div>
        <ion-content>
          <p align="center">
          <a href="#"><b>Change Password</b>
        </a></p>
        </ion-content>
      </template>
      
      <script>
      import { IonLabel, IonInput, IonItem, IonCard, IonCardContent, IonCardTitle, IonIcon} from '@ionic/vue';
      import { defineComponent } from 'vue';
      import { chevronBackOutline, helpCircleOutline } from "ionicons/icons";
      
      export default defineComponent({
        components: { IonLabel, IonInput, IonCard, IonCardContent,IonCardTitle, IonItem, IonIcon},
        setup(){
          return {
            chevronBackOutline, helpCircleOutline
          }
        }
      });
      </script>
    
      <style>
      ion-label {
        font-family: 'Verdana';
      }
    .login-card {
    
      margin-top: 40%;
    }
    </style>