<style>
.dashboard-img {
  width: 2rem;
  height: 2rem;
}
.not {
  font-size: 1.5rem;
}
.not1 {
  font-size: 2rem;
}
.content1 {
  background-color: #18191d;
  padding: 0.2rem;
  box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);
}
.currency-segment {
  width: 80%;
  margin: 1rem auto 0 auto;
  background-color: rgb(197, 195, 195);
  color: black;
  box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);

}
.flag-icon {
  width: 1.3rem;
  height: 1.3rem;
  margin-top: -0.3rem;
  margin-right: 0.3rem;
}
.db-btn {
  width: 32%;
  box-shadow: -1px 11px 15px -6px rgb(25, 25, 23);

}
.content2 {
  background-color: #0e0f11;
  padding: 1px 0;
  margin-top: -0.4rem;
  box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);

}
.content2-card {
  margin: 0.5rem 0.7rem;
}
.content3 {
  background-color: #0e0f11;
  height: 100%;
}
.content3 ion-list {
  background-color: #0e0f11;
}
.content3 ion-item {
  margin-top: .6rem;
  box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);

}
.dashboard-content {
  background-color: rgb(13, 13, 13);
  height: 100%;
}
.dashboard-content ion-item {
  box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);

}
</style>
<template>
  <ion-page>
    <ion-header>
      <ion-item color="black" class="dashboard-header">
        <a slot="start" href="/profile">
          <ion-avatar class="dashboard-img">
            <img
              class="ion-img"
              src="../assets/francisjayeola.jpg"
            /> </ion-avatar
        ></a>
        <ion-label>
          Hi,
          <b class="payment-label" style="font-size: 1rem; font-family: Verdana"
            >Francis</b
          >!
        </ion-label>
        <br />
        <span style="cursor: pointer" id="open-modal" @click="openModal()"
          ><ion-icon class="not" slot="end" :icon="notifications"></ion-icon>
        </span>
      </ion-item>
    </ion-header>
    <!-- notifications -->
    <ion-modal
    ref="modal"
    trigger="open-modal"
    :presenting-element="presentingElement"
  >
    <ion-header>
      <ion-toolbar color="light">
        <ion-title>Notifications</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="dismiss()"
            ><ion-icon class="not1" color="dark" :icon="closeOutline"></ion-icon
          ></ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <div class="ion-padding content3">
      <ion-list>
        <ion-item color="light">
          <ion-icon slot="start" class="not" :icon="navigateCircle"></ion-icon>

          <ion-label>
            <span style="font-size: 0.8rem">Rapheal, Provehub</span>
            <p style="color: rgb(197, 195, 195); font-size: 0.8rem">11:00am</p>
          </ion-label>
          <p slot="end" style="font-size: 0.8rem">-N22,000.00</p>
        </ion-item>
        <ion-item color="light">
          <ion-icon slot="start" class="not" :icon="phonePortrait"></ion-icon>

          <ion-label>
            <span style="font-size: 0.8rem">07034765786</span>
            <p style="color: rgb(197, 195, 195); font-size: 0.8rem">03:25pm</p>
          </ion-label>
          <p slot="end" style="font-size: 0.8rem">-N2,000.00</p>
        </ion-item>
        <ion-item color="light">
          <ion-icon slot="start" class="not" :icon="navigateCircle"></ion-icon>

          <ion-label>
            <span style="font-size: 0.8rem">Rapheal, Provehub</span>
            <p style="color: rgb(197, 195, 195); font-size: 0.8rem">11:00am</p>
          </ion-label>
          <p slot="end" style="font-size: 0.8rem">-N22,000.00</p>
        </ion-item>
        <ion-item color="light">
          <ion-icon slot="start" class="not" :icon="phonePortrait"></ion-icon>

          <ion-label>
            <span style="font-size: 0.8rem">07034765786</span>
            <p style="color: rgb(197, 195, 195); font-size: 0.8rem">03:25pm</p>
          </ion-label>
          <p slot="end" style="font-size: 0.8rem">-N2,000.00</p>
        </ion-item>
        <ion-item color="light">
          <ion-icon slot="start" class="not" :icon="navigateCircle"></ion-icon>

          <ion-label>
            <span style="font-size: 0.8rem">Rapheal, Provehub</span>
            <p style="color: rgb(197, 195, 195); font-size: 0.8rem">11:00am</p>
          </ion-label>
          <p slot="end" style="font-size: 0.8rem">-N22,000.00</p>
        </ion-item>
        <ion-item color="light">
          <ion-icon slot="start" class="not" :icon="phonePortrait"></ion-icon>

          <ion-label>
            <span style="font-size: 0.8rem">07034765786</span>
            <p style="color: rgb(197, 195, 195); font-size: 0.8rem">03:25pm</p>
          </ion-label>
          <p slot="end" style="font-size: 0.8rem">-N2,000.00</p>
        </ion-item>
      </ion-list>
    </div>
  </ion-modal>
  <ion-content >
  <div class="dashboard-content">
  <!-- page-content -->
      <div class="content1">
        <ion-segment
          @ionChange="segmentChanged($event)"
          :value="$data.subview"
          class="currency-segment"
        >
          <ion-segment-button value="ngn">
            <ion-label> NGN</ion-label>
          </ion-segment-button>
          <ion-segment-button value="usd">
            <ion-label> USD</ion-label>
          </ion-segment-button>
          <ion-segment-button value="eur">
            <ion-label> EUR</ion-label>
          </ion-segment-button>
          <ion-segment-button value="gbp">
            <ion-label> GBP</ion-label>
          </ion-segment-button>
        </ion-segment>
        <ion-grid v-if="subview == 'ngn'">
          <ion-row>
            <ion-col>
              <ion-note style="color: white">
                <p style="font-size: 0.9rem">
                  Account balance <ion-icon :icon="eye" size="small"></ion-icon>
                </p>
                <span class="amount-item" color="light">
                  <ion-avatar slot="start" class="flag-icon"
                    ><img src="../assets/th.png" alt=""
                  /></ion-avatar>
                  <h3 class="amount" style="margin-top: -0.5rem">₦ 2,506.10</h3>
                </span>
              </ion-note>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <a href="/add"
                ><ion-button class="db-btn" color="light">
                  <ion-icon
                    class="not"
                    slot="start"
                    :icon="addCircle"
                  ></ion-icon>
                  <span style="font-size: smaller">Add Money</span>
                </ion-button></a
              >
              <a href="/exchange"
                ><ion-button class="db-btn" color="light">
                  <ion-icon
                    class="not"
                    slot="start"
                    :icon="swapHorizontal"
                  ></ion-icon>
                  <span style="font-size: smaller">Exchange</span></ion-button
                ></a
              >
              <a href="/send"
                ><ion-button class="db-btn" color="light">
                  <ion-icon
                    class="not"
                    slot="start"
                    :icon="navigateCircle"
                  ></ion-icon>
                  <span style="font-size: smaller">Send Money</span></ion-button
                ></a
              >
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-grid v-if="subview == 'usd'">
          <ion-row>
            <ion-col>
              <ion-note style="color: white">
                <p style="font-size: 0.9rem">
                  Account balance <ion-icon :icon="eye" size="small"></ion-icon>
                </p>
                <span class="amount-item" color="light">
                  <ion-avatar slot="start" class="flag-icon"
                    ><img src="../assets/usd.jpg" alt=""
                  /></ion-avatar>
                  <h3 class="amount" style="margin-top: -0.5rem">
                    $ 26,506.10
                  </h3>
                </span>
              </ion-note>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <a href="/add"
                ><ion-button class="db-btn" color="light">
                  <ion-icon
                    class="not"
                    slot="start"
                    :icon="addCircle"
                  ></ion-icon>
                  <span style="font-size: smaller">Add Money</span>
                </ion-button></a
              >
              <a href="/exchange"
                ><ion-button class="db-btn" color="light">
                  <ion-icon
                    class="not"
                    slot="start"
                    :icon="swapHorizontal"
                  ></ion-icon>
                  <span style="font-size: smaller">Exchange</span></ion-button
                ></a
              >
              <a href="/send"
                ><ion-button class="db-btn" color="light">
                  <ion-icon
                    class="not"
                    slot="start"
                    :icon="navigateCircle"
                  ></ion-icon>
                  <span style="font-size: smaller">Send Money</span></ion-button
                ></a
              >
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-grid v-if="subview == 'eur'">
          <ion-row>
            <ion-col>
              <ion-note style="color: white">
                <p style="font-size: 0.9rem">
                  Account balance <ion-icon :icon="eye" size="small"></ion-icon>
                </p>
                <span class="amount-item" color="light">
                  <ion-avatar slot="start" class="flag-icon"
                    ><img src="../assets/eur.jpg" alt=""
                  /></ion-avatar>
                  <h3 class="amount" style="margin-top: -0.5rem">€ 0.20</h3>
                </span>
              </ion-note>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <a href="/add"
                ><ion-button class="db-btn" color="light">
                  <ion-icon
                    class="not"
                    slot="start"
                    :icon="addCircle"
                  ></ion-icon>
                  <span style="font-size: smaller">Add Money</span>
                </ion-button></a
              >
              <a href="/exchange"
                ><ion-button class="db-btn" color="light">
                  <ion-icon
                    class="not"
                    slot="start"
                    :icon="swapHorizontal"
                  ></ion-icon>
                  <span style="font-size: smaller">Exchange</span></ion-button
                ></a
              >
              <a href="/send"
                ><ion-button class="db-btn" color="light">
                  <ion-icon
                    class="not"
                    slot="start"
                    :icon="navigateCircle"
                  ></ion-icon>
                  <span style="font-size: smaller">Send Money</span></ion-button
                ></a
              >
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-grid v-if="subview == 'gbp'">
          <ion-row>
            <ion-col>
              <ion-note style="color: white">
                <p style="font-size: 0.9rem">
                  Account balance <ion-icon :icon="eye" size="small"></ion-icon>
                </p>
                <span class="amount-item" color="light">
                  <ion-avatar slot="start" class="flag-icon"
                    ><img src="../assets/gbp.jpg" alt=""
                  /></ion-avatar>
                  <h3 class="amount" style="margin-top: -0.5rem">£ 606.10</h3>
                </span>
              </ion-note>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <a href="/add"
                ><ion-button class="db-btn" color="light">
                  <ion-icon
                    class="not"
                    slot="start"
                    :icon="addCircle"
                  ></ion-icon>
                  <span style="font-size: smaller">Add Money</span>
                </ion-button></a
              >
              <a href="/exchange"
                ><ion-button class="db-btn" color="light">
                  <ion-icon
                    class="not"
                    slot="start"
                    :icon="swapHorizontal"
                  ></ion-icon>
                  <span style="font-size: smaller">Exchange</span></ion-button
                ></a
              >
              <a href="/send"
                ><ion-button class="db-btn" color="light">
                  <ion-icon
                    class="not"
                    slot="start"
                    :icon="navigateCircle"
                  ></ion-icon>
                  <span style="font-size: smaller">Send Money</span></ion-button
                ></a
              >
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <h4>&nbsp; KYC</h4>
      <a href="/verification">
      <ion-item color="light">
        <span style="font-size: 1rem">Finish verifying your account</span>
        <ion-icon class="not" slot="end" :icon="chevronForward"></ion-icon>
      </ion-item>
    </a>
      <div v-if="subview == 'ngn'">
        <h5>&nbsp;&nbsp;Latest Transactions</h5>

        <div class="content2">
          <ion-card class="content2-card">
            <ion-item color="light">
              <ion-icon
                slot="start"
                class="not"
                :icon="navigateCircle"
              ></ion-icon>

              <ion-label>
                <span style="font-size: 0.8rem">Rapheal, Provehub</span>
                <p style="color: rgb(197, 195, 195); font-size: 0.8rem">
                  11:00am
                </p>
              </ion-label>
              <p slot="end" style="font-size: 0.8rem">-N22,000.00</p>
            </ion-item>
            <ion-item color="light">
              <ion-icon
                slot="start"
                class="not"
                :icon="phonePortrait"
              ></ion-icon>

              <ion-label>
                <span style="font-size: 0.8rem">07034765786</span>
                <p style="color: rgb(197, 195, 195); font-size: 0.8rem">
                  03:25pm
                </p>
              </ion-label>
              <p slot="end" style="font-size: 0.8rem">-N2,000.00</p>
            </ion-item>
          </ion-card>
        </div>
      </div>
      <div v-if="subview == 'usd'">
        <h5>&nbsp;&nbsp;25 October 2022</h5>
        <div class="content2">
          <ion-card class="content2-card">
            <ion-item color="light">
              <ion-icon
                slot="start"
                class="not"
                :icon="navigateCircle"
              ></ion-icon>

              <ion-label>
                <span style="font-size: 0.8rem">Rapheal, Provehub</span>
                <p style="color: rgb(197, 195, 195); font-size: 0.8rem">
                  11:00am
                </p>
              </ion-label>
              <p slot="end" style="font-size: 0.8rem">-N22,000.00</p>
            </ion-item>
            <ion-item color="light">
              <ion-icon
                slot="start"
                class="not"
                :icon="phonePortrait"
              ></ion-icon>

              <ion-label>
                <span style="font-size: 0.8rem">07034765786</span>
                <p style="color: rgb(197, 195, 195); font-size: 0.8rem">
                  03:25pm
                </p>
              </ion-label>
              <p slot="end" style="font-size: 0.8rem">-N2,000.00</p>
            </ion-item>
          </ion-card>
        </div>
      </div>
      <div v-if="subview == 'ngn'">
        <h5>&nbsp;&nbsp;24 October 2022</h5>
        <div class="content2">
          <ion-card class="content2-card">
            <ion-item color="light">
              <ion-icon
                slot="start"
                class="not"
                :icon="navigateCircle"
              ></ion-icon>

              <ion-label>
                <span style="font-size: 0.8rem">Rapheal, Provehub</span>
                <p style="color: rgb(197, 195, 195); font-size: 0.8rem">
                  11:00am
                </p>
              </ion-label>
              <p slot="end" style="font-size: 0.8rem">-N22,000.00</p>
            </ion-item>
            <ion-item color="light">
              <ion-icon
                slot="start"
                class="not"
                :icon="phonePortrait"
              ></ion-icon>

              <ion-label>
                <span style="font-size: 0.8rem">07034765786</span>
                <p style="color: rgb(197, 195, 195); font-size: 0.8rem">
                  03:25pm
                </p>
              </ion-label>
              <p slot="end" style="font-size: 0.8rem">-N2,000.00</p>
            </ion-item>
          </ion-card>
        </div>
      </div>
      <div v-if="subview == 'ngn'">
        <h5>&nbsp;&nbsp;23 October 2022</h5>
        <div class="content2">
          <ion-card class="content2-card">
            <ion-item color="light">
              <ion-icon
                slot="start"
                class="not"
                :icon="navigateCircle"
              ></ion-icon>

              <ion-label>
                <span style="font-size: 0.8rem">Rapheal, Provehub</span>
                <p style="color: rgb(197, 195, 195); font-size: 0.8rem">
                  11:00am
                </p>
              </ion-label>
              <p slot="end" style="font-size: 0.8rem">-N22,000.00</p>
            </ion-item>
            <ion-item color="light">
              <ion-icon
                slot="start"
                class="not"
                :icon="phonePortrait"
              ></ion-icon>

              <ion-label>
                <span style="font-size: 0.8rem">07034765786</span>
                <p style="color: rgb(197, 195, 195); font-size: 0.8rem">
                  03:25pm
                </p>
              </ion-label>
              <p slot="end" style="font-size: 0.8rem">-N2,000.00</p>
            </ion-item>
          </ion-card>
        </div>
      </div>
  </div>
</ion-content>
  </ion-page>

</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonSegment,
  IonSegmentButton,
  IonModal
} from "@ionic/vue";
import {
  notifications,
  arrowForwardCircle,
  addCircle,
  swapHorizontal,
  navigateCircle,
  eye,
  chevronForward,
  phonePortrait,
  closeOutline
} from "ionicons/icons";
export default defineComponent({
  name: "Tab1Page",
  components: { IonHeader, IonPage, IonSegment, IonSegmentButton, IonModal },
  data() {
    return {
      subview: "ngn",
      presentingElement: null,
    };
  },
  methods: {
    segmentChanged(ev) {
      this.subview = ev.detail.value;
    },
    openModal() {
    this.presentingElement = this.$refs.page.$el;
  },
    dismiss() {
      this.$refs.modal.$el.dismiss();
    },
  },
  setup() {
    return {
      notifications,
      arrowForwardCircle,
      addCircle,
      swapHorizontal,
      navigateCircle,
      eye,
      chevronForward,
      phonePortrait,
      closeOutline
    };
  },
  
  
});
</script>
