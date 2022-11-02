<style>
.item1 {
    width:80%;
    margin: 0 auto;
    border-radius: .4rem;
}
.item2{
    width:90%;
    margin: 0 auto;
    border-radius: .4rem;
}
.image-avatar {
    height: 100px;
    width: 100px;
    color: rgb(205, 205, 205);
}
</style>
<template>
  <ion-header>
    <ion-toolbar>
      <a href="/tabs/tab1"><ion-icon :icon="chevronBack"></ion-icon></a>
      <ion-title>Profile</ion-title>
    </ion-toolbar>
  </ion-header>
  <div>
    <br>
    <div align="center">
    <ion-avatar class="image-avatar">
        <img src="../assets/francisjayeola.jpg" alt="">
    </ion-avatar>
    <h5 style="font-weight: bold;">Adekunle Francis Jayeola</h5>
    <p> <ion-icon color="warning" style="margin-bottom: -.2rem" size="small" :icon="medal"></ion-icon> T3</p>
</div>
      <ion-item color="light" class="item2">
        <ion-label>
          <h3>Your Username</h3>
          <h2 style="font-weight: bold">@Kunle</h2>
        </ion-label>
        <br />
        <p style="font-size:smaller; color: rgb(131, 205, 131);">COPY</p>
        <ion-icon size="small" color="success" :icon="copy"></ion-icon>
      </ion-item>
      <br>
 
      <ion-item color="light" class="item2">
      
        <ion-label>
            <h3>Your Account Number</h3>
          <h2 style="font-weight: bold">2012764053</h2>
        </ion-label>
        <br />
        <p style="font-size:smaller; color: rgb(131, 205, 131);">COPY</p>
        <ion-icon size="small" color="success" :icon="copy"></ion-icon>
      </ion-item>
      <br>
      <ion-item color="light" class="item1">

        <ion-label>
            <h3 style="font-weight: bold">Adekunle Francis Jayeola</h3>
          <p style="color: rgb(205, 205, 205);">Account name</p>
        </ion-label>
        <br />
        <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
    <br>
      <ion-item color="light" class="item1">
        <ion-label>
            <h3 style="font-weight: bold">46b Harper Crescent Wuse Zone</h3>
          <p style="color: rgb(205, 205, 205);">Address</p>
        </ion-label>
        <br />
        <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
      <br>
      <ion-item color="light" class="item1">
        <ion-label
          ><h3 style="font-weight: bold">+2348037099011</h3>
          <p style="color: rgb(205, 205, 205);">Phone number</p>
        </ion-label>
        <br />
        <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
      <br>
      <ion-item color="light" class="item1">
        <ion-label
          ><h3 style="font-weight: bold">jayeola@rocketmail.com</h3>
          <p style="color: rgb(205, 205, 205);">Email Address</p>
        </ion-label>
        <br />
        <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
      <br>
      <ion-item color="light" class="item1">
        <ion-label
          ><h3 style="font-weight: bold">Verified</h3>
          <p style="color: rgb(205, 205, 205);">Identification</p>
        </ion-label>
        <br />
        <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
      <br>
      
  <br>
      
</div>
</template>
<script>
import { IonHeader, IonToolbar, IonIcon, IonTitle } from "@ionic/vue";
import {
  chevronBack,
  chatboxEllipses,
  chevronForward,
  medal,
  copy
} from "ionicons/icons";
export default {
  name: "Tab1Page",
  components: { IonHeader, IonToolbar, IonIcon, IonTitle, },

  setup() {
    return {
      chevronBack,
      chatboxEllipses,
      chevronForward,
      medal,
      copy
    };
  },
};
</script>
