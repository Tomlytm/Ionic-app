<style>
/* ion
ion-input{
    width: 100%;
    background-color: grey;
} */
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
  border-radius: 0.3rem;
  height: 3rem;
  box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);
}
.input.has-focus {
  border:.1rem solid #6a64ff;

}
.avatar1 {
  text-align: center;
  margin: auto;
  box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);
}
.small {
  font-size: 0.6rem;
  text-align: center;
}
.choose {
  font-size: smaller;
}
.airtime-page {
  background-color: rgb(13, 13, 13);
} 
.airtime-container {
  border-radius: .5em;
  box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);
}
.airtime-label {
  font-size: smaller;
}
.avatar2 {
  border: 3px solid #6a64ff;
  text-align: center;
  margin: auto;
  box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);

}
.small {
  text-align: center;
  margin-top: 1rem;
}
.airtime-col{
  width: 4.5rem;
}
.item-radio-checked {
  border:.1rem solid #6a64ff;
}

</style>

<template>
  <ion-page class="airtime-page">
    <ion-header>
      <ion-toolbar>
        <a href="/tabs/tab2"><ion-icon :icon="chevronBack"></ion-icon></a>
        <ion-title>Buy Airtime</ion-title>
      </ion-toolbar>
    </ion-header>
    <div class="purchase">
      <ion-card color="black">
        <ion-label><b style="font-family:sans-serif;">Choose Network</b>  </ion-label>
        <br />
        <ion-grid>
          <ion-radio-group>
            <ion-row>
              <ion-col> 
                <ion-item class="airtime-container" color="light">
                  <ion-avatar class="avatar1">
                    <img src="../assets/icons/airtel-logo.jpg" alt="" />
                  </ion-avatar>
                  <span class="airtime-label"> <em>Airtel</em> </span>
                  <p><ion-radio class="rad" value="airtel"></ion-radio></p>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item class="airtime-container" color="light">
                  <ion-avatar  class="avatar1">
                    <img src="../assets/icons/mtn-logo.jpg" alt="" />
                  </ion-avatar>
                  <span class="airtime-label"> <em>MTN</em></span>
                  <p><ion-radio value="mtn"></ion-radio></p>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item class="airtime-container" color="light">
                  <ion-avatar slot="start" class="avatar1">
                    <img src="../assets/icons/9mobile.jpg" alt="" />
                  </ion-avatar>
                  <span class="airtime-label"><em>9mobile</em></span>
                  <p><ion-radio value="etisalat"></ion-radio></p>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item class="airtime-container" color="light">
                  <ion-avatar class="avatar1">
                    <img src="../assets/icons/glo.webp" alt="" />
                  </ion-avatar>
                <span class="airtime-label"><em>Glo</em></span>
                  <p><ion-radio value="glo"></ion-radio></p>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-radio-group>
        </ion-grid>
        <ion-card-content>
          <ion-label style="font-family: verdana; font-weight: 600; font-size: smaller;">Amount</ion-label>
          <ion-input
            class="input"
            v-model="amount"
            type="text"
            placeholder=" How much?"
          ></ion-input>
          <br />
          <ion-label style="font-family: verdana; font-weight: 600; font-size: smaller;">Phone Number</ion-label>
          <ion-input
            class="input"
            v-model="amount"
            type="text"
            placeholder=" Enter Phone Number"
          ></ion-input>
          <br />
          <br />
              
          <ion-icon
            slot="start"
            color="light"
            size="small"
            :icon="time"
          ></ion-icon>
         <span style="font-size:small; ">Most Recent</span> 
        <br />
        <ion-grid>
          <ion-row>
            <ion-col class="airtime-col"
              ><ion-avatar class="avatar2">
                <img src="../assets/icons/airtel-logo.jpg" alt="" />
              </ion-avatar>
              <p class="small" style=" font-size:.5rem; margin-top: .5rem;">08089954674</p>
            </ion-col>
            <ion-col class="airtime-col"
              ><ion-avatar class="avatar2">
                <img src="../assets/icons/mtn-logo.jpg" alt="" />
              </ion-avatar>
              <p class="small" style="font-size:.5rem; margin-top: .5rem;">0819754674</p></ion-col
            >
            <ion-col class="airtime-col"
              ><ion-avatar class="avatar2">
                <img src="../assets/icons/mtn-logo.jpg" alt="" />
              </ion-avatar>
              <p class="small" style="font-size:.5rem; margin-top: .5rem;">09089954674</p></ion-col
            >
            <ion-col class="airtime-col"
              ><ion-avatar class="avatar2">
                <img src="../assets/icons/glo.webp" alt="" />
              </ion-avatar>
              <p class="small" style="font-size:.5rem; margin-top: .5rem;">08046737374</p></ion-col
            >
          </ion-row>
          </ion-grid>
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
  