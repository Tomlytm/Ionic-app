<style>
.item1 {
  margin: -1em -1em;
}
.item1 .p1 {
  font-size: 0.65rem;
}
ion-label .new1 {
  margin-top: -0.4em;
}
.icon-bg {
  background-color: rgb(207, 207, 207);
  box-shadow: 4px 15px 16px 7px rgb(0, 0, 0);
  padding: 0.3rem;
  border: .3em solid #6a64ff;
}
</style>
<template>
  <ion-header>
    <ion-toolbar>
      <a href="/tabs/tab1"><ion-icon :icon="chevronBack"></ion-icon></a>
      <ion-title>Payments</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-card color="light">
    <ion-card-content>
      <ion-item color="light" class="item1">
        <ion-label>
          Friends on TopUp
          <ion-button color="success" class="new1">New!</ion-button>
          <p class="p1">Find your contacts on TopUp</p>
        </ion-label>
        <br />
        <ion-button color="tertiary">Connect</ion-button>
      </ion-item>
    </ion-card-content>
  </ion-card>
  <br />
  <ion-card color="light">
    <ion-card-content>
      <ion-item color="light" class="item1">
        <ion-avatar slot="start" class="icon-bg">
          <ion-icon
            size="small"
            color="black"
            :icon="send"
          ></ion-icon>
        </ion-avatar>

        <ion-label>
          Send Money
          <p class="p1">Free transfers to all banks</p>
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
        <ion-avatar slot="start" class="icon-bg">
          <ion-icon
            color="black"
            size="small"
            :icon="phonePortrait"
          ></ion-icon>
        </ion-avatar>

        <ion-label>
          Buy Airtime
          <p class="p1">Recharge any phone easily</p>
        </ion-label>
        <br />
        <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
    </ion-card-content>
  </ion-card></a>
  <ion-card color="light">
    <ion-card-content>
      <ion-item color="light" class="item1">
        <ion-avatar slot="start" class="icon-bg">
          <ion-icon
            color="black"
            size="small"
            :icon="cash"
          ></ion-icon>
        </ion-avatar>
        <ion-label>
          Pay A Bill
          <p class="p1">Take care of your essentials</p>
        </ion-label>
        <br />
        <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
    </ion-card-content>
  </ion-card>
  <ion-card color="light">
    <ion-card-content>
      <ion-item color="light" class="item1">
        <ion-avatar slot="start" class="icon-bg">
          <ion-icon color="black" size="small" :icon="bagHandle"></ion-icon>
        </ion-avatar>

        <ion-label
          >Gift Cards
          <p class="p1">Shop around the world online</p>
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
        <ion-avatar slot="start" class="icon-bg">
          <ion-icon
            color="black"
            size="small"
            :icon="globeOutline"
          ></ion-icon>
        </ion-avatar>

        <ion-label>
          Web Payments
          <p class="p1">Pay online without your card</p>
        </ion-label>
        <br />
        <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
    </ion-card-content>
  </ion-card>
  <ion-card color="light">
    <ion-card-content>
      <ion-item color="light" class="item1">
        <ion-avatar slot="start" class="icon-bg">
          <ion-icon
            color="black"
            size="small"
            :icon="card"
          ></ion-icon>
        </ion-avatar>

        <ion-label
          >ATM & POS Payments
          <p class="p1">Pay on a POS without your card</p>
        </ion-label>
        <br />
        <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
    </ion-card-content>
  </ion-card>
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
