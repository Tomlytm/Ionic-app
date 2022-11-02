<style>
.payment-content {
  background-color: rgb(13, 13, 13);
  height: 100%;

}
.sub-heading-container {
  padding: .2rem;
  background-color: #101013;
  box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);
  margin: .1rem;

}
.payment-label1 {
  font-size: .9rem;
}
.not2 {
  font-size: 1.8rem;
}
.payment-item {
  margin-top: .7rem;
  box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);
}
.payment-item p {
  margin-top: .4rem;
}
</style>
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Payments</ion-title>
      </ion-toolbar>
    </ion-header>
    <div class="payment-content">
      <br>
      <ion-item  color="light">
        <ion-label>
          <b style="margin-top: .5rem;" class="payment-label">Find Friends</b>
          <p class="p1" style="color: rgb(189, 189, 189); margin-top: .5rem;">
            Find your contacts on TopUp
          </p>
        </ion-label>
        <br />
        <ion-button shape="round" style="margin-top: 1rem; padding: .1rem;" color="medium">Connect</ion-button>
      </ion-item>
      <ion-item class="payment-item" color="light">
        <ion-icon
          class="not2"
          slot="start"
          :icon="send"
        ></ion-icon>
        <ion-label>
          <b class="payment-label1">Send Money</b>
          <p style="color: rgb(189, 189, 189)" class="p1">
            Free transfers to all banks
          </p>
        </ion-label>
        <br />
        <ion-icon class="not2" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
      <a href="/airtime">
        <ion-item class="payment-item" color="light">
          <ion-icon
            class="not2"
            slot="start"
            :icon="phonePortrait"
          ></ion-icon>

          <ion-label>
            <b class="payment-label1">Buy Airtime</b>
            <p style="color: rgb(189, 189, 189)" class="p1">
              Recharge any phone easily
            </p>
          </ion-label>
          <br />
          <ion-icon class="not2" slot="end" :icon="chevronForward"></ion-icon>
        </ion-item>
      </a>
      <ion-item class="payment-item" color="light">
        <ion-icon
          class="not2"
          slot="start"
          :icon="cash"
        ></ion-icon>
        <ion-label>
          <b class="payment-label1">Pay Bills</b>
          <p style="color: rgb(189, 189, 189)" class="p1">
            Take care of your essentials
          </p>
        </ion-label>
        <br />
        <ion-icon class="not2" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
      <ion-item class="payment-item" color="light">
        <ion-icon
          slot="start"
          class="not2"
          :icon="bagHandle"
        ></ion-icon>

        <ion-label
          ><b class="payment-label1">Gift Cards</b>
          <p style="color: rgb(189, 189, 189)">
            Shop around the world online
          </p>
        </ion-label>
        <br />
        <ion-icon class="not2" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
      <ion-item class="payment-item" color="light">
        <ion-icon
          class="not2"
          slot="start"
          :icon="globeOutline"
        ></ion-icon>

        <ion-label>
          <b class="payment-label1">Web Payments</b>
          <p style="color: rgb(189, 189, 189)">
            Pay online without your card
          </p>
        </ion-label>
        <br />
        <ion-icon class="not2" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
      <ion-item class="payment-item" color="light">
        <ion-icon
          class="not2"
          slot="start"
          :icon="card"
        ></ion-icon>

        <ion-label>
          <b class="payment-label1">ATM & POS Payments</b>
          <p style="color: rgb(189, 189, 189)">
            Pay on a POS without your card
          </p>
        </ion-label>
        <br />
        <ion-icon class="not2" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
    </div>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
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
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/vue";

export default defineComponent({
  name: "Tab2Page",
  components: { IonHeader, IonToolbar, IonTitle, IonPage },
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
});
</script>
