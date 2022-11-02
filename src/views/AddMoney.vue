<style>

.add-container1 {
    background-color: #121316;
    box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);
}
.add-item {
    box-shadow: -1px 11px 15px -6px rgb(13, 13, 13);
}
.add-item p {
  margin-top: .4rem;
}
.add-container-all {
  height: 100%;
  background-color: rgb(13, 13, 13);
}
</style>
<template>
  <ion-header>
    <ion-toolbar>
      <a href="/tabs/tab1"><ion-icon :icon="chevronBack"></ion-icon></a>
      <ion-title>Add Money</ion-title>
    </ion-toolbar>
  </ion-header>
  <div class="add-container-all">
    <br>
    <div style="margin: 1rem">
    <h5>How do you want to add money to your account?</h5>
    </div>
    <div class="add-container1" style="padding: 1.5rem 1rem">
        <a href="/choose">
          <ion-item color="light" style="border-radius:.4rem" class="add-item">
            <ion-label>
                Bank Transfer
                <p style="color: darkgrey">Bank transfer to this account</p>
            </ion-label>
          </ion-item></a>
          <br>
          <ion-item color="light" style="border-radius:.4rem" class="add-item">
            <ion-label>
                From linked account
                <p style="color: darkgrey">Transfer from linked account to this account</p>
            </ion-label>
          </ion-item>
          <br>
          <ion-item color="light" style="border-radius:.4rem" class="add-item">
            <ion-label>
                From other Fintech Apps
                <p style="color: darkgrey">Transfer from other fintech app to this account</p>
            </ion-label>
          </ion-item>
    </div>
    <br>
    <br>
    <br>
    <br>
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
  components: { IonHeader, IonToolbar, IonIcon, IonTitle},

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
