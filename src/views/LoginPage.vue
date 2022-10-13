<template>
    <ion-header>
          <ion-toolbar>
           <a class='return' href="/splash">Return</a>
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
        <ion-button expand="block" color="primary">Sign In</ion-button>
        
          </ion-card-content>
        </ion-card>
      </div>
      
        <ion-item >
          <p class="ion-text-center">
          <a href="#"><b>Change Password</b>
        </a></p>
        </ion-item>
      </template>
      
      <script>
      import { IonLabel, IonInput, IonItem, IonCard, IonCardContent, IonCardTitle, } from '@ionic/vue';
      import { defineComponent } from 'vue';
      
      export default defineComponent({
        components: { IonLabel, IonInput, IonCard, IonCardContent,IonCardTitle, IonItem, }
      });
      </script>
    
      <style>
    .login-card {
    
      margin-top: 40%;
    }
    a{
      text-decoration: none;
      color: white;
    }
    .return {
      color: aliceblue;
    }
    .ion-text-center {
        text-align: center;
    }
    </style>