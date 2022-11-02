<template>
    <ion-header>
          <ion-toolbar>
            <a class='return' href="/splash"> <ion-icon :icon="chevronBackOutline"></ion-icon></a>
          </ion-toolbar>
        </ion-header>
    
        <div class="card-container">
         <ion-card class="reset-card">
          <ion-card-header>
            <ion-card-title>Reset Password </ion-card-title>
          </ion-card-header>
      
          <ion-card-content>
            <p style="font-size:1.2rem">Please enter the email address on your Top-up account</p> <br>

            <ion-item class="forgot-item" color="light">
              <ion-label
            style="font-family: Verdana; letter-spacing: 0.5px"
            position="floating"
            ><ion-icon
              class="register-ion-icon"
              slot="start"
              size="small"
              :icon="mail"
            ></ion-icon
            >&nbsp;&nbsp;Email</ion-label
          >          <ion-input type="email" placeholder="youremail@here.com"></ion-input>
        </ion-item>
        <br>
        <br>
        <ion-button expand="block" slot="end" color="tertiary">Send Password</ion-button>
          </ion-card-content>
        </ion-card>
      </div>
      </template>
      
      <script>
      import { IonLabel, IonInput, IonItem, IonCard, IonCardContent, IonCardTitle, IonIcon} from '@ionic/vue';
      import { defineComponent } from 'vue';
      import { chevronBackOutline, helpCircleOutline, mail } from "ionicons/icons";
      
      export default defineComponent({
        components: { IonLabel, IonInput, IonCard, IonCardContent,IonCardTitle, IonItem, IonIcon},
        setup(){
          return {
            chevronBackOutline, helpCircleOutline, mail
          }
        }
      });
      </script>
    
      <style>
      .reset-card {
        height: 100%;
        margin: 0;
        background-color: rgb(13, 13, 13);
      }
      .forgot-item {
        box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);
        border-radius: .7rem;
      }
    </style>