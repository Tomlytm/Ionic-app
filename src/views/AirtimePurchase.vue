<style>
/* ion
ion-input{
    width: 100%;
    background-color: grey;
} */
.avatar {
  background-color: aliceblue;
}
.airtime {
  background-color: #222428;
}
.list {
  margin: -2em 0;
  width: 100%;
}
.purchase {
  position: absolute;
  top: 3rem;
  width: 100%;
}
.input {
  background-color: #222428;
  /* border-radius: .5rem; */
  width: 100%;
  margin-top: 0.5rem;
}
.avatar1 {
  border: 3px solid #6a64ff;
  text-align: center;
  margin: auto;
}
.small {
  font-size: 0.6rem;
  text-align: center;
}
.choose {
  font-size: smaller;
}
</style>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <a href="/pb"><ion-icon :icon="chevronBack"></ion-icon></a>
        <ion-title>Buy Airtime</ion-title>
      </ion-toolbar>
    </ion-header>
    <div class="purchase">
      <ion-card color="black">
        <ion-label>
          <ion-icon
            slot="start"
            color="light"
            size="small"
            :icon="time"
          ></ion-icon>
          Most Recent
        </ion-label>
        <br />
        <ion-grid>
          <ion-row>
            <ion-col
              ><ion-avatar class="avatar1">
                <img src="../assets/icons/airtel-logo.jpg" alt="" />
              </ion-avatar>
              <p class="small">08089954674</p>
            </ion-col>
            <ion-col
              ><ion-avatar class="avatar1">
                <img src="../assets/icons/mtn-logo.jpg" alt="" />
              </ion-avatar>
              <p class="small">0819754674</p></ion-col
            >
            <ion-col
              ><ion-avatar class="avatar1">
                <img src="../assets/icons/mtn-logo.jpg" alt="" />
              </ion-avatar>
              <p class="small">09089954674</p></ion-col
            >
            <ion-col
              ><ion-avatar class="avatar1">
                <img src="../assets/icons/glo.webp" alt="" />
              </ion-avatar>
              <p class="small">08046737374</p></ion-col
            >
          </ion-row>
        </ion-grid>
        <ion-card-content>
          <ion-label>Amount</ion-label>
          <ion-input
            class="input"
            v-model="amount"
            type="text"
            placeholder=" How much?"
          ></ion-input>
          <br />
          <ion-label>Phone Number</ion-label>
          <ion-input
            class="input"
            v-model="amount"
            type="text"
            placeholder=" Enter Phone Number"
          ></ion-input>
          <br />
          <ion-card>
            <ion-card-content class="airtime list">
              <ion-list class="airtime">
                <ion-radio-group>
                  <ion-list-header>
                    <ion-label class="choose"> Choose Network</ion-label>
                  </ion-list-header>
                  <br />
                  <ion-item color="light">
                    <ion-avatar slot="start">
                      <img src="../assets/icons/airtel-logo.jpg" alt="" />
                    </ion-avatar>
                    <ion-label>Airtel</ion-label>
                    <ion-radio slot="end" value="airtel" checked></ion-radio>
                  </ion-item>
                  <br />
                  <ion-item color="light">
                    <ion-avatar slot="start">
                      <img src="../assets/icons/Etisalat.jpg" alt="" />
                    </ion-avatar>
                    <ion-label>9Mobile</ion-label>
                    <ion-radio slot="end" value="etisalat"></ion-radio>
                  </ion-item>
                  <br />
                  <ion-item color="light">
                    <ion-avatar slot="start">
                      <img src="../assets/icons/glo.webp" alt="" />
                    </ion-avatar>
                    <ion-label>Glo</ion-label>
                    <ion-radio slot="end" value="glo"></ion-radio>
                  </ion-item>
                  <br />
                  <ion-item color="light">
                    <ion-avatar slot="start">
                      <img src="../assets/icons/mtn-logo.jpg" alt="" />
                    </ion-avatar>
                    <ion-label>MTN</ion-label>
                    <ion-radio slot="end" value="mtn"></ion-radio>
                  </ion-item>
                </ion-radio-group>
                <br />
              </ion-list>
            </ion-card-content>
          </ion-card>
          <br />
          <br />
        </ion-card-content>
      </ion-card>
    </div>
    <ion-avatar><ion-image src="../assets/icons/4.png"></ion-image></ion-avatar>
    <ion-card color="black">
      <ion-button class=".btn" @click="logIn" expand="block" color="tertiary"
        >Buy</ion-button
      >
    </ion-card>
  </ion-page>
</template>
  
<script>
import { defineComponent } from "vue";
import { IonPage, IonHeader, IonToolbar, IonTitle } from "@ionic/vue";
import {
  arrowUp,
  documentText,
  chatboxEllipses,
  card,
  lockClosed,
  cog,
  unlink,
  shareSocial,
  star,
  square,
  chevronBack,
  IonAvatar,
  time,
} from "ionicons/icons";
export default defineComponent({
  name: "Tab3Page",
  components: { IonHeader, IonToolbar, IonTitle, IonPage, IonAvatar },
  setup() {
    return {
      arrowUp,
      documentText,
      chatboxEllipses,
      card,
      lockClosed,
      cog,
      unlink,
      shareSocial,
      star,
      square,
      chevronBack,
      time,
    };
  },
});
</script>

  <style>
* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
  