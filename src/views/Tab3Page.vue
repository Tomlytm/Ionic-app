<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Account</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item class="list-item">
        <ion-avatar slot="start">
          <img src="../assets/icons/4.png" alt="" />
        </ion-avatar>
        <ion-label>
          <h1>FIRST-NAME LAST-NAME</h1>
          <p>CLIENT ID: 986802130</p>
          <p>Joined Mar 25, 2021</p>
        </ion-label>
        <ion-chip color="dark">
          <ion-label color="tertiary"> LEVEL 3 </ion-label>
        </ion-chip>
      </ion-item>
      <br />
      <ion-list>
        <ion-item>
          <ion-icon
            size="small"
            slot="start"
            color="danger"
            :icon="arrowUp"
          ></ion-icon>
          <ion-label class="list"> UPGRADE ACCOUNT </ion-label>
          <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
        </ion-item>
        <br />
        <ion-item class="list">
          <ion-avatar size="small" slot="start">
            <img src="../assets/icons/4.png" alt="" />
          </ion-avatar>
          <ion-label> PROFILE </ion-label>
          <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
        </ion-item>
        <br />
        <ion-item class="list">
          <ion-icon
            size="small"
            color="tertiary"
            slot="start"
            :icon="documentText"
          ></ion-icon>
          <ion-label> REQUEST STATEMENT </ion-label>
          <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
        </ion-item>
        <br />
        <ion-item>
          <ion-icon
            size="small"
            color="tertiary"
            slot="start"
            :icon="chatboxEllipses"
          ></ion-icon>
          <ion-label> SUPPORT </ion-label>
          <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
        </ion-item>
        <br />
        <ion-item>
          <ion-icon
            size="small"
            color="tertiary"
            slot="start"
            :icon="card"
          ></ion-icon>
          <ion-label> CARDS & BANKS </ion-label>
          <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
        </ion-item>
        <br />
        <ion-item>
          <ion-icon
            size="small"
            color="tertiary"
            slot="start"
            :icon="lockClosed"
          ></ion-icon>
          <ion-label> SECURITY SETTINGS </ion-label>
          <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
        </ion-item>
        <br />
        <ion-item>
          <ion-icon
            size="small"
            color="tertiary"
            slot="start"
            :icon="cog"
          ></ion-icon>
          <ion-label> PREFERENCES </ion-label>
          <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
        </ion-item>
        <br />
        <ion-item>
          <ion-icon
            size="small"
            color="tertiary"
            slot="start"
            :icon="unlink"
          ></ion-icon>
          <ion-label> ACCOUNT LIMITS </ion-label>
          <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
        </ion-item>
        <br />
        <ion-item>
          <ion-icon
            size="small"
            color="tertiary"
            slot="start"
            :icon="shareSocial"
          ></ion-icon>
          <ion-label> REFER A FRIEND </ion-label>
          <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
        </ion-item>
        <br />
        <ion-item>
          <ion-icon
            size="small"
            color="warning"
            slot="start"
            :icon="star"
          ></ion-icon>
          <ion-label> RATE US </ion-label>
          <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
        </ion-item>
        <br />
        <ion-item>
          <ion-icon
            size="small"
            color="tertiary"
            slot="start"
            :icon="square"
          ></ion-icon>
          <ion-label> ABOUT US </ion-label>
          <ion-icon size="small" slot="end" :icon="chevronForward"></ion-icon>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
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
  chevronForward,
} from "ionicons/icons";
export default defineComponent({
  name: "Tab3Page",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
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
      chevronForward,
    };
  },
});
</script>

<style>
* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
