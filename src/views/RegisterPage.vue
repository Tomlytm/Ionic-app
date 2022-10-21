<style>
.register-card {
  background-color: rgb(13, 13, 13);
  margin: 0;
  padding: .7rem;
  margin-top: -3rem;
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
.card-container {
  background-color: rgb(13, 13, 13);
  height: 100%;
}
.register-item {
  box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);
  border-radius: .5rem;
}
.register-button {
  box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);

}
.register-card-header {
  text-align: center;
  font-size: 1rem;
}
.register-greeting {
  font-size: large;
}
.register-ion-icon {
  margin-bottom:-.1rem
}
</style>
<template>
<ion-header>
      <ion-toolbar>
       <a class='return' href="/splash"> <ion-icon :icon="chevronBackOutline"></ion-icon></a>
      </ion-toolbar>
    </ion-header>

    <div class="card-container" >
     <ion-card class="register-card">
      <ion-card-header class="register-card-header" align="center">
        <p class="register-greeting">Hey there,</p>
        <ion-card-title style="font-family:Verdana;" >Create an Account</ion-card-title>
      </ion-card-header>
      <ion-card-content>
      <ion-item class="register-item" color="light">
      <ion-label style="font-family:Verdana; letter-spacing:.5px;" position="floating"><ion-icon class="register-ion-icon" slot="start" size="small" :icon="person"></ion-icon>&nbsp;&nbsp;Your name</ion-label>
      <ion-input v-model="name" type="text" placeholder="Last Name & First Name"></ion-input>
    </ion-item>
    <br>
      <ion-item class="register-item" color="light">
      <ion-label style="font-family:Verdana; letter-spacing:.5px;" position="floating"><ion-icon class="register-ion-icon" slot="start" size="small" :icon="mail"></ion-icon>&nbsp;&nbsp;Email </ion-label>
      <ion-input v-model="email" type="email" placeholder="youremail@here.com"></ion-input>
    </ion-item>
    <br>
    <ion-item class="register-item" color="light">
      <ion-label style="font-family:Verdana; letter-spacing:.5px;" position="floating"><ion-icon class="register-ion-icon" slot="start" size="small" :icon="lockClosed"></ion-icon>&nbsp;&nbsp;Password</ion-label>
      <ion-input v-model="password" type="password" placeholder="**********"></ion-input>
      <ion-icon  style="margin-top:2.5rem;" size="small" slot="end" :icon="eye"></ion-icon>
    </ion-item>
    <br>
    <ion-item class="register-item" color="light">
      <ion-label style="font-family:Verdana; letter-spacing:.5px;" position="floating"><ion-icon class="register-ion-icon" slot="start" size="small" :icon="lockClosed"></ion-icon>&nbsp;&nbsp;Confirm Password</ion-label>
      <ion-input v-model="confirm_password" type="password" placeholder="**********"></ion-input>
      <ion-icon  style="margin-top:2.5rem;" size="small" slot="end" :icon="eye"></ion-icon>
    </ion-item>
    <br>
    <ion-item class="register-item" color="light">
      <ion-label style="font-family:Verdana; letter-spacing:.5px;" position="floating"><ion-icon class="register-ion-icon" slot="start" size="small" :icon="key"></ion-icon>&nbsp;&nbsp;Referral Code </ion-label>
      <ion-input></ion-input>
    </ion-item>
    <br>
    <ion-button class="register-button" @click.prevent="signUp" color="tertiary" expand="block" > Sign Up</ion-button>
      </ion-card-content>
    </ion-card>
  
  <br>
  <br>
    <ion-footer class="foot">
      <p style="font-size: .8rem" align="center">
      By tapping 'Sign Up', you agree to our <br> <b style="color:#6370ff">Terms & Conditions and Policy Privacy</b>
    </p>
    <br>
    </ion-footer>
  </div>
  </template>
  
  <script>
  import { IonLabel, IonInput, IonItem, IonCard, IonCardContent, IonCardHeader,IonCardTitle, IonIcon} from '@ionic/vue';
  import { chevronBackOutline, person, mail, lockClosed, key, eye } from "ionicons/icons";
  import { defineComponent } from 'vue';
  import axios from 'axios';
  // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*' ;
  // axios.defaults.withCredentials = true;
          
  export default defineComponent({
    components: { IonLabel, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonIcon },

    setup(){
      return { chevronBackOutline, person, mail, lockClosed, key, eye }
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
  