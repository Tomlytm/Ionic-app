<style>
.payment-page{
  background-color: rgb(18, 18, 18);
  height: 100%;
  margin: 0;
  padding-top: .6rem;
}
.item1 {
  margin: -1em -1em;
  box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);
}
.item1:active {
  border: .1rem solid #6a64ff;
}
.item1 .p1 {
  font-size: 0.65rem;
  color: rgb(189, 189, 189);
}
ion-label .new1 {
  margin-top: -0.4em;
}
.icon-bg {
  background-color: rgb(0, 0, 0);
  padding: 0.3rem;
  border: .3em solid #000000;
}
.payment-label {
  font-size: small;
  font-family: verdana;
}
.ion-icon {
  box-shadow: -1px 11px 6px -6px rgb(0, 0, 0);
  background-color: aliceblue;
  border-radius: 50%;
  padding: .5rem;
}

</style>
<template>
  <ion-header>
    <ion-toolbar>
      <a href="/tabs/tab1"><ion-icon :icon="chevronBack"></ion-icon></a>
      <ion-title>Payments</ion-title>
    </ion-toolbar>
  </ion-header>
  <div class="payment-page">
  <ion-card color="light">
    <ion-card-content>
      <ion-item color="light" class="item1">
        <ion-label>
          <b class="payment-label">Friends on TopUp</b>  <b></b>
          <ion-button color="success" class="new1">New!</ion-button>
          <p class="p1" style="color:rgb(189, 189, 189);">Find your contacts on TopUp</p>
        </ion-label>
        <br />
        <ion-button color="tertiary">Connect</ion-button>
      </ion-item>
    </ion-card-content>
  </ion-card>
  <ion-card class="payment-card2" color="light">
    <ion-card-content>
      <ion-item color="light" class="item1">
          <ion-icon
          class="ion-icon"
          slot="start"
          size="small"
          color="tertiary"
            :icon="send"
          ></ion-icon>

        <ion-label>
           <b class="payment-label">Send Money</b> 
          <p style="color:rgb(189, 189, 189);" class="p1">Free transfers to all banks</p>
        </ion-label>
        <br />
        <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
    </ion-card-content>
  </ion-card>
  <a href="/ap">
  <ion-card color="light">
    <ion-card-content>
      <ion-item color="light" class="item1">
          <ion-icon
          class="ion-icon"
          color="tertiary"
          size="small"
          slot="start"
            :icon="phonePortrait"
          ></ion-icon>

        <ion-label>
          <b class="payment-label">Buy Airtime</b> 
          <p style="color:rgb(189, 189, 189);" class="p1">Recharge any phone easily</p>
        </ion-label>
        <br />
        <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
    </ion-card-content>
  </ion-card></a>
  <ion-card color="light">
    <ion-card-content>
      <ion-item color="light" class="item1">
          <ion-icon
          class="ion-icon"
          slot="start"
          size="small"
          color="tertiary"
            :icon="cash"
          ></ion-icon>
        <ion-label>
          <b class="payment-label">Pay A Bill</b> 
          <p style="color:rgb(189, 189, 189);" class="p1">Take care of your essentials</p>
        </ion-label>
        <br />
        <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
    </ion-card-content>
  </ion-card>
  <ion-card color="light">
    <ion-card-content>
      <ion-item color="light" class="item1">
          <ion-icon slot="start" class="ion-icon" size="small" color="tertiary" :icon="bagHandle"></ion-icon>

        <ion-label
          ><b class="payment-label">Gift Cards</b> 
          <p style="color:rgb(189, 189, 189);" class="p1">Shop around the world online</p>
        </ion-label>
        <ion-button class="new" color="success">New!</ion-button>
        <br />
        <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
    </ion-card-content>
  </ion-card>
  <ion-card color="light">
    <ion-card-content>
      <ion-item color="light" class="item1">
          <ion-icon
          color="tertiary"
          class="ion-icon"
            slot="start"
            size="small"
            :icon="globeOutline"
          ></ion-icon>

        <ion-label>
          <b class="payment-label">Web Payments</b>
          <p style="color:rgb(189, 189, 189);" class="p1">Pay online without your card</p>
        </ion-label>
        <br />
        <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
    </ion-card-content>
  </ion-card>
  <ion-card color="light">
    <ion-card-content>
      <ion-item color="light" class="item1">
          <ion-icon
          color="tertiary"
          class="ion-icon"
          slot="start"
          size="small"
            :icon="card"
          ></ion-icon>

        <ion-label
          > <b class="payment-label">ATM & POS Payments</b> 
          <p style="color:rgb(189, 189, 189);" class="p1">Pay on a POS without your card</p>
        </ion-label>
        <br />
        <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
    </ion-card-content>
  </ion-card>
</div>
</template>
<script>
import { IonHeader, IonToolbar, IonIcon, IonTitle } from "@ionic/vue";
import {
  chevronBack,
  chatboxEllipses,
  chevronForward,
  phonePortrait,
  cash,
  card,
  bagHandle,
  send,
  globeOutline,
} from "ionicons/icons";
export default {
  name: "Tab1Page",
  components: { IonHeader, IonToolbar, IonIcon, IonTitle },

  setup() {
    return {
      chevronBack,
      chatboxEllipses,
      chevronForward,
      phonePortrait,
      cash,
      bagHandle,
      card,
      globeOutline,
      send,
    };
  },
};
</script>
