<template>
    <ion-header>
          <ion-toolbar>
            <a class='return' href="/splash"> <ion-icon :icon="chevronBackOutline"></ion-icon></a>
            <ion-button slot="end" color="tertiary">Done</ion-button>
          </ion-toolbar>
        </ion-header>
    
        <div class="login-card">
          
         <ion-card>
          <ion-card-header>
            <ion-card-title>Password Reset</ion-card-title>
          </ion-card-header>
      
          <ion-card-content>
            <h4>Please enter the email address on your Top-up account</h4> <br>

            <ion-item>
          <ion-label position="floating">Email Address</ion-label>
          <ion-input type="email" placeholder="youremail@here.com"></ion-input>
        </ion-item>
        
          </ion-card-content>
        </ion-card>
      </div>
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
    </style>