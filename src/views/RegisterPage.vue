<style>
.register-card {
  margin-top: 7%;
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
       <ion-button @click.prevent="signUp" fill="outline" shape="round" slot="end">Next</ion-button>
      </ion-toolbar>
    </ion-header>

    <div class="register-card">
      
     <ion-card>
      <ion-card-header align="center">
        <ion-card-title >Sign Up</ion-card-title>
      </ion-card-header>
      <ion-card-content>
      <ion-item>
      <ion-label position="floating">Your name</ion-label>
      <ion-input v-model="name" type="text" placeholder="Last Name & First Name"></ion-input>
    </ion-item>
    <br>
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
    <ion-item>
      <ion-label position="floating">Confirm Password</ion-label>
      <ion-input v-model="confirm_password" type="password" placeholder="**********"></ion-input>
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
  import axios from 'axios';
  // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*' ;
  // axios.defaults.withCredentials = true;
          
  export default defineComponent({
    components: { IonLabel, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonIcon },

    setup(){
      return { chevronBackOutline }
    },
    data() {
      return {
        name: '',
        email:'',
        password: '',
        confirm_password: ''
      }
    },
    methods: {
      async signUp(){
       const results = await axios.post('http://api.yestopup.com/api/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          confirm_password: this.confirm_password
        }); 
        console.log(results);
        if(results.status==200){
          localStorage.setItem('user-info', JSON.stringify(results.data));
          this.$router.push({name:'splash'})
        }
      }
    }
  });
  </script>
  