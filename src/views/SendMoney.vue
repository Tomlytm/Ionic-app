<style>
.currency-segment2 {
    width: 80%;
    margin: 1rem auto 0 auto;
    background-color: #abadb8;;
    color: black;
    box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);

}
.currency-segment3 {
    width: 70%;
    margin: 1rem auto 0 auto;
    background-color: #abadb8;;
    color: black;
    box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);

}
.btn3 {
    width: 70%;
    margin-left: 14%;
}
.send-container1 {
    background-color: #18191d;
    padding: .2rem;
}
.flag-icon1 {
    width: .8rem;
    height: .8rem;
    margin-right: .3rem;
  }
  .amount-item {
    display: flex;
  }
  .balance-grid {
    width: 95%;
  }
  
.input1 {
  background-color: #222428;
  /* border-radius: .5rem; */
  width: 90%;
  padding: .3rem;
  margin: 0.5rem auto ;
  border-radius: 0.3rem;
  height: 3rem;
  box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);
}
.input1.has-focus {
  border:.1rem solid #6a64ff;

}
</style>
<template>
  <ion-header>
    <ion-toolbar>
      <a href="/tabs/tab1"><ion-icon :icon="chevronBack"></ion-icon></a>
      <ion-title>Send Money</ion-title>
    </ion-toolbar>
  </ion-header>
  <div>
    <br>
    <br>
    <br>
    <div class="send-container1">
        <ion-segment @ionChange="segmentChangeds($event)" :value="$data.myviews" class="currency-segment2">
    <ion-segment-button value="ngn1">
        <ion-label >
          NGN</ion-label>       
      
    </ion-segment-button>
    <ion-segment-button value="usd1">
        <ion-label >
          USD</ion-label>       
      
    </ion-segment-button>
    <ion-segment-button value="eur1">
        <ion-label >
          EUR</ion-label>       
      
    </ion-segment-button>
    <ion-segment-button value="gbp1">
        <ion-label >
          GBP</ion-label>       
      
    </ion-segment-button>
  </ion-segment>
  <ion-grid class="balance-grid">
    <ion-row>
        <ion-col>
            <ion-note style="font-size: .7rem" color="white">Account Balance</ion-note>
            
        </ion-col>
        <ion-col></ion-col>
        <ion-col v-if="myviews=='ngn1'">
            <ion-note color="white">
            <span  class="amount-item" color="light">
          <ion-avatar slot="start" class="flag-icon1"><img src="../assets/th.png" alt=""></ion-avatar>
            <p class="amount" style="margin-top: .1rem; font-size: smaller;">₦ 2,506.10</p>
          </span>
        </ion-note>
        </ion-col>
        <ion-col v-if="myviews=='usd1'">
            <ion-note color="white">
            <span  class="amount-item" color="light">
          <ion-avatar slot="start" class="flag-icon1"><img src="../assets/usd.jpg" alt=""></ion-avatar>
            <p class="amount" style="margin-top: .1rem; font-size: smaller;">$ 26,506.10</p>
          </span>
        </ion-note>
        </ion-col>
        <ion-col v-if="myviews=='eur1'">
            <ion-note color="white">
            <span  class="amount-item" color="light">
          <ion-avatar slot="start" class="flag-icon1"><img src="../assets/eur.jpg" alt=""></ion-avatar>
            <p class="amount" style="margin-top: .1rem; font-size: smaller;">€ 0.20</p>
          </span>
        </ion-note>
        </ion-col>
        <ion-col v-if="myviews=='gbp1'">
            <ion-note color="white">
            <span  class="amount-item" color="light">
          <ion-avatar slot="start" class="flag-icon1"><img src="../assets/gbp.jpg" alt=""></ion-avatar>
            <p class="amount" style="margin-top: .1rem; font-size: smaller;">£ 606.10</p>
          </span>
        </ion-note>
        </ion-col>
    </ion-row>
  </ion-grid>
    </div>
    <br>
    <br>
    <div class="send-container1">
        <ion-segment @ionChange="segmentChanged($event)" :value="$data.myview" class="currency-segment3">
    <ion-segment-button value="accountnumber">
        <ion-label >
          Account Number</ion-label>       
      
    </ion-segment-button>
    <ion-segment-button value="email">
        <ion-label >
          Email</ion-label>       
      
    </ion-segment-button>
  </ion-segment>
  <br>
  <br>
  <ion-input
            class="input1"
            v-model="amount"
            type="text"
            placeholder=" Amount"
          ></ion-input>
          <ion-input v-if="myview=='accountnumber'"
            class="input1"
            type="text"
            placeholder=" Account Number"
          ></ion-input>
          <ion-input v-if="myview=='email'"
            class="input1"
            type="text"
            placeholder=" Email"
          ></ion-input>
          <ion-select v-if="myview=='accountnumber'" placeholder=" Bank" class="input1">
      <ion-select-option v-if="myviews=='ngn1'" value="apples">GTB</ion-select-option>
      <ion-select-option v-if="myviews=='ngn1'" value="oranges">Access Bank</ion-select-option>
      <ion-select-option v-if="myviews=='ngn1'" value="bananas">Wema Bank</ion-select-option>
      <ion-select-option v-if="myviews=='ngn1'" value="bananas">Wema Bank</ion-select-option>
      <ion-select-option v-if="myviews=='ngn1'" value="bananas">Kuda Bank</ion-select-option>
      <ion-select-option v-if="myviews=='eur1'" value="bananas">Kuda Bank</ion-select-option>
      <ion-select-option value="bananas">Kuda Bank</ion-select-option>
      <ion-select-option value="bananas">Kuda Bank</ion-select-option>
      <ion-select-option value="bananas">Kuda Bank</ion-select-option>
      <ion-select-option value="bananas">Kuda Bank</ion-select-option>
      <ion-select-option v-if="myviews=='usd1'" value="bananas">Kuda Bank</ion-select-option>
      <ion-select-option v-if="myviews=='usd1'" value="bananas">uss Bank</ion-select-option>
      <ion-select-option v-if="myviews=='usd1'" value="bananas">dss Bank</ion-select-option>
      <ion-select-option v-if="myviews=='usd1'" value="bananas">Khs Bank</ion-select-option>
      <ion-select-option v-if="myviews=='usd1'" value="bananas">Kdg Bank</ion-select-option>
    </ion-select>
    <ion-input
            class="input1"
            v-model="amount"
            type="text"
            placeholder=" Amount"
          ></ion-input>
          <br>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <ion-button class="btn3" color="medium">Proceed</ion-button>
</div>
</template>
<script>
import { IonHeader, IonToolbar, IonIcon, IonTitle, IonSegment, IonSegmentButton } from "@ionic/vue";
import {
  chevronBack,
  chatboxEllipses,
  chevronForward,
  medal,
  copy
} from "ionicons/icons";
export default {
  components: { IonHeader, IonToolbar, IonIcon, IonTitle, IonSegment, IonSegmentButton},
  data(){
        return {
            myview: 'accountnumber',
            myviews: 'ngn1'
        }
    },
    methods: {
        segmentChanged(ev) {
            this.myview = ev.detail.value
        },
        segmentChangeds(ev) {
            this.myviews = ev.detail.value
        },
    },
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
