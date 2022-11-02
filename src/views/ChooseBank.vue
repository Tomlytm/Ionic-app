<style>
.add-bank-btn {
  margin: 2rem;
}
.choose-container {
    background-color: rgb(20, 19, 22);
}
.choose-item:hover {
    color: rgb(20, 19, 22);
}
</style>
<template>
  <ion-header>
    <ion-toolbar>
      <a href="/add"><ion-icon :icon="chevronBack"></ion-icon></a>
      <ion-title>Choose Bank</ion-title>
    </ion-toolbar>
  </ion-header>
  <div class="add-bank-btn">
    <ion-button
      expand="full"
      color="light"
      id="open-modal"
      class="choose-bank"
    >
      <ion-icon slot="start" :icon="addCircle"></ion-icon>
      Add bank account
    </ion-button>
  </div>
  <ion-modal
    ref="modal"
    trigger="open-modal"
    :presenting-element="presentingElement"
  >
    <ion-header>
      <ion-toolbar color="light">
        <ion-title>Select a Bank</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="dismiss()"
            ><ion-icon  :icon="closeOutline"></ion-icon
          ></ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content color="light" class="ion-padding">
      <ion-list>
        <div class="choose-container" style="padding: 1.5rem 1rem">
          <ion-item color="light" style="border-radius:.4rem" class="choose-item">
            <ion-label>
                Wema Bank
            </ion-label>
          </ion-item>
          <br>
          <ion-item color="light" style="border-radius:.4rem" class="choose-item">
            <ion-label>
                Wema Microfinance Bank
            </ion-label>
          </ion-item>
          <br>
          <ion-item color="light" style="border-radius:.4rem" class="choose-item">
            <ion-label>
                Access Bank
            </ion-label>
          </ion-item>
    </div>
      </ion-list>
    </ion-content>
  </ion-modal>
</template>
<script>
import { IonHeader, IonToolbar, IonIcon, IonTitle, IonModal } from "@ionic/vue";
import {
  chevronBack,
  chatboxEllipses,
  chevronForward,
  medal,
  copy,
  addCircle,
  closeOutline
} from "ionicons/icons";
export default {
  components: { IonHeader, IonToolbar, IonIcon, IonTitle, IonModal },
  data(){
        return {
            presentingElement: null,
        }
    },
      methods: {
        dismiss() {
        this.$refs.modal.$el.dismiss();
      },
      },
  mounted() {
      this.presentingElement = this.$refs.page.$el;
    },
  setup() {
    return {
      chevronBack,
      chatboxEllipses,
      chevronForward,
      medal,
      copy,
      addCircle,
      closeOutline
    };
  },
};
</script>
