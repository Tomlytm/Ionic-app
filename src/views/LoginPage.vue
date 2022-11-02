<template>
  <ion-header>
    <ion-toolbar>
      <a class="return" href="/splash">
        <ion-icon :icon="chevronBackOutline"></ion-icon
      ></a>
      <ion-icon slot="end" :icon="helpCircleOutline"></ion-icon>
    </ion-toolbar>
  </ion-header>

  <div class="login-container">
    <ion-card class="login-card">
      <ion-card-header class="login-card-title">
        <p class="login-greeting">Hey there,</p>
        <ion-card-title style="font-family:Verdana;" align="center">Welcome Back</ion-card-title>
        <br />
      </ion-card-header>

      <ion-card-content>
        <ion-item class="register-item" color="light">
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
          >
          <ion-input
            v-model="email"
            type="email"
            placeholder="youremail@here.com"
          ></ion-input>
        </ion-item>
        <br />
        <ion-item class="register-item" color="light">
          <ion-label
            style="font-family: Verdana; letter-spacing: 0.5px"
            position="floating"
            ><ion-icon
              class="register-ion-icon"
              slot="start"
              size="small"
              :icon="lockClosed"
            ></ion-icon
            >&nbsp;&nbsp;Password</ion-label
          >
          <ion-input
            v-model="password"
            type="password"
            placeholder="**********"
          ></ion-input>
          <ion-icon
            style="margin-top: 2.5rem"
            size="small"
            slot="end"
            :icon="eye"
          ></ion-icon>
        </ion-item>
        <br>
    <p align="center">
      <a href="/forgot"><b>Forgot Password</b> </a>
    </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <ion-button class="login-button" @click="logIn" expand="block" color="tertiary"
          >Sign In</ion-button
        >
        
      </ion-card-content>
    </ion-card>
  </div>
</template>
      
      <script>
import {
  IonLabel,
  IonInput,
  IonItem,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonIcon,
  IonToolbar
} from "@ionic/vue";
import { defineComponent } from "vue";
import { chevronBackOutline, helpCircleOutline, mail, lockClosed,eye } from "ionicons/icons";
import axios from "axios";
export default defineComponent({
  components: {
    IonLabel,
    IonInput,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonItem,
    IonIcon,
    IonToolbar
    
  },
  setup() {
    return {
      chevronBackOutline,
      helpCircleOutline,
      mail,
      lockClosed,
      eye
    };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async logIn() {
      const result = axios.post("http://api.yestopup.com/api/login", {
        email: this.email,
        password: this.password,
      });
      console.log(result);

      if (result.status == 200) {
        localStorage.clear();
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "tab1" });
      }
    },
  },
});
</script>
    
      <style>
ion-label {
  font-family: "Verdana";
}
.login-card {
  background-color: rgb(13, 13, 13);
  margin: 0;
  padding: 1.5rem;
  
}
.login-container {
  background-color: rgb(13, 13, 13);
  height: 100%;
}
.login-card-title {
  text-align: center;
}
.login-button {
  box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);

}
</style>