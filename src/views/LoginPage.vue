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
          <ion-input v-model="email" type="email" placeholder="youremail@here.com"></ion-input>
        </ion-item>
        <br>
        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input v-model="password" type="password" placeholder="**********"></ion-input>
        </ion-item>
        
        <br>
          <ion-button @click="logIn" expand="block" color="tertiary">Sign In</ion-button>
          </ion-card-content>
        </ion-card>
      </div>
        <ion-content>
          <p align="center">
          <a href="/f"><b>Forgot Password</b>
        </a></p>
        </ion-content>
      </template>
      
      <script>
      import { IonLabel, IonInput, IonItem, IonCard, IonCardContent, IonCardTitle, IonIcon} from '@ionic/vue';
      import { defineComponent } from 'vue';
      import { chevronBackOutline, helpCircleOutline } from "ionicons/icons";
      import axios from 'axios';
      export default defineComponent({
        components: { IonLabel, IonInput, IonCard, IonCardContent,IonCardTitle, IonItem, IonIcon},
        setup(){
          return {
            chevronBackOutline, helpCircleOutline
          }
        },
        data(){
          return {
          email: '',
          password: ''
          }
        },
        methods: {
          logIn(){
            axios.post('http://api.yestopup.com/api/login', {
              email: this.email,
              password: this.password
            })
            .then((response)=>{
              console.log(response);
        
        
              if(response.status==201){
                localStorage.setItem('user-info', JSON.stringify(response.data));
                this.$router.push({redirect: '/tabs/tab1'})
        }
            })
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