<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <a href="/tabs/tab1"><ion-icon :icon="chevronBack"></ion-icon></a>
          <ion-title> Transaction</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <p style="color: darkgrey; text-align:center; font-size: smaller;">On Sep 29 at 21:14PM</p>
        <ion-item>
            <ion-label>
                <h1>1,000.00</h1>
                <h2 style="color: darkgrey;">GLOBACOMNG-239150888367</h2>
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
                <p style="color: darkgrey;">To</p>
                <h2>GLOBACOMNG</h2>
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
                <p style="color: darkgrey;">Description</p>
                <h2>GLOBACOMNG-239150888367</h2>
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
                <p style="color: darkgrey;">Payment method</p>
                <h2>GLOBACOMNG</h2>
            </ion-label>
            <p>Fees</p>
            <h3>#0.00</h3>
        </ion-item>
        <ion-item>
            <ion-label>
                <p style="color: darkgrey;">Session ID</p>
                <h2>AMmbE7GV1270eUM</h2>
            </ion-label>
        </ion-item>
        <br>
        <h4>More Actions</h4>
        <ion-item color="light">
            
            <ion-label><h2>Report Transaction</h2>
            <p style="color: darkgrey">Report an issue with this payment</p></ion-label>
        </ion-item>
         </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import {chevronBack}  from "ionicons/icons";

  export default({
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
    setup() {
    return {
      chevronBack
    };
}
  });
  </script>
  