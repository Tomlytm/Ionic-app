<style>
.exchange-container-all{
  height: 100%;
  background-color: rgb(13, 13, 13);
}
.exchange-container1 {
  background-color: #121316;
    box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);
}
.text-confirm {
  color: white !important
}
.text-cancel {
  color: rgb(138, 14, 14) !important;
}
.flag-icon2 {
  width: 1rem;
  height: 1rem;
  margin-top: -0.3rem;
  margin-right: 0.3rem;
}
</style>
<template>
  <ion-header>
    <ion-toolbar>
      <a href="/tabs/tab1"><ion-icon :icon="chevronBack"></ion-icon></a>
      <ion-title>Exchange</ion-title>
    </ion-toolbar>
  </ion-header>
  <div class="exchange-container-all">
    <br />
    <div style="margin: 1rem"></div>
    <div class="exchange-container1" style="padding: 1.5rem 1rem">
      <ion-item color="light" style="border-radius: 0.4rem" >
        <ion-select
          required
          v-model="tsubview"
          name="tsubview"
          placeholder="Choose currency"
          slot="start"
        >
          <ion-select-option value="ngn">NGN</ion-select-option>
          <ion-select-option value="usd">USD</ion-select-option>
          <ion-select-option value="eur">EUR</ion-select-option>
          <ion-select-option value="gbp">GBP</ion-select-option>
        </ion-select>
        <ion-input
          type="number"
          v-model="amount"
          slot="end"
          placeholder="Amount"
          required
          ></ion-input>
      </ion-item>

      <span v-if="tsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon1"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
        <p class="amount" style="margin-top: 0.1rem; font-size: smaller">
          ₦ 2,506.10
        </p>
      </span>
      <span v-if="tsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon1"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
        <p class="amount" style="margin-top: 0.1rem; font-size: smaller">
          $ 26,506.10
        </p>
      </span>
      <span v-if="tsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon1"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
        <p class="amount" style="margin-top: 0.1rem; font-size: smaller">
          € 0.20
        </p>
      </span>
      <span v-if="tsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon1"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
        <p class="amount" style="margin-top: 0.1rem; font-size: smaller">
          £ 606.10
        </p>
      </span>
      <br />
      <div style="margin-left: 1%">
        <!-- naira to other currencies -->

        <ion-chip
          v-if="ttsubview == 'usd' && tsubview == 'ngn'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1USD = 820NGN</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'eur' && tsubview == 'ngn'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1EUR = 800NGN</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'ngn' && tsubview == 'ngn'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >EQUAL RATES</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'gbp' && tsubview == 'ngn'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1GBP = 950NGN</ion-chip
        >
        <!-- Euro to other currencies -->

        <ion-chip
          v-if="ttsubview == 'usd' && tsubview == 'eur'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1USD = 1.05EUR</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'eur' && tsubview == 'eur'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >EQUAL RATES</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'ngn' && tsubview == 'eur'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1NGN = 800EUR</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'gbp' && tsubview == 'eur'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1EUR = 0.9GBP</ion-chip
        >
        <!-- Pounds to other currencies -->

        <ion-chip
          v-if="ttsubview == 'usd' && tsubview == 'gbp'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1USD = 1.2GBP</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'eur' && tsubview == 'gbp'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1EUR = 0.9GBP</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'ngn' && tsubview == 'gbp'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1GBP = 900NGN</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'gbp' && tsubview == 'gbp'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >EQUAL RATES</ion-chip
        >
        <!-- Dollars to other currencies -->

        <ion-chip
          v-if="ttsubview == 'usd' && tsubview == 'usd'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >EQUAL RATES</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'eur' && tsubview == 'usd'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1USD = 1.05EUR</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'ngn' && tsubview == 'usd'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1USD = 820NGN</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'gbp' && tsubview == 'usd'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1GBP = 1.2USD</ion-chip
        >
        <ion-icon :icon="swapVerticalOutline"></ion-icon>
      </div>
      <br />
      <ion-item
        color="light"
        style="border-radius: 0.4rem; margin-top: 1.5rem"
      >
        <ion-select
          required
          v-model="ttsubview"
          name="tsubview"
          placeholder="Choose currency"
          slot="start"
        >
          <ion-select-option value="ngn">NGN</ion-select-option>
          <ion-select-option value="usd">USD</ion-select-option>
          <ion-select-option value="eur">EUR</ion-select-option>
          <ion-select-option value="gbp">GBP</ion-select-option>
        </ion-select>

        <!-- naira to other currencies -->
        <ion-chip slot="end" v-if="ttsubview == 'usd' && tsubview == 'ngn'"
          >$ {{Math.round(amount / 850) }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'ngn' && tsubview == 'ngn'"
          >₦ {{ Math.round(amount) }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'eur' && tsubview == 'ngn'"
          >€ {{ Math.round(amount / 950) }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'gbp' && tsubview == 'ngn'"
          >£ {{ Math.round(amount / 800) }}</ion-chip
        >
        <!-- dollar to others -->
        <ion-chip slot="end" v-if="ttsubview == 'usd' && tsubview == 'usd'"
          >$ {{ Math.round(amount)}}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'ngn' && tsubview == 'usd'"
          >₦ {{ Math.round(amount * 850) }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'eur' && tsubview == 'usd'"
          >€ {{ Math.round(amount * 1.05) }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'gbp' && tsubview == 'usd'"
          >£ {{ Math.round(amount * 0.9) }}</ion-chip
        >
        <!-- euro to others -->
        <ion-chip slot="end" v-if="ttsubview == 'usd' && tsubview == 'eur'"
          >$ {{ Math.round(amount / 1.05) }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'ngn' && tsubview == 'eur'"
          >₦ {{ Math.round(amount * 950) }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'eur' && tsubview == 'eur'"
          >€ {{ Math.round(amount) }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'gbp' && tsubview == 'eur'"
          >£ {{ Math.round(amount * 0.9) }}</ion-chip
        >
        <!-- pounds to others -->
        <ion-chip slot="end" v-if="ttsubview == 'usd' && tsubview == 'gbp'"
          >$ {{ amount * 1.2 }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'ngn' && tsubview == 'gbp'"
          >₦ {{ amount * 800 }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'eur' && tsubview == 'gbp'"
          >€ {{ amount * 0.9 }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'gbp' && tsubview == 'gbp'"
          >£ {{ amount }}</ion-chip
        >
      </ion-item>

      <span v-if="ttsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon1"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
        <p class="amount" style="margin-top: 0.1rem; font-size: smaller">
          ₦ 2,506.10
        </p>
      </span>
      <span v-if="ttsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon1"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
        <p class="amount" style="margin-top: 0.1rem; font-size: smaller">
          $ 26,506.10
        </p>
      </span>
      <span v-if="ttsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon1"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
        <p class="amount" style="margin-top: 0.1rem; font-size: smaller">
          € 0.20
        </p>
      </span>
      <span v-if="ttsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon1"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
        <p class="amount" style="margin-top: 0.1rem; font-size: smaller">
          £ 606.10
        </p>
      </span>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div style="margin: 10rem 1.5rem 0 1.5rem">
      <ion-button id="open-modal1" expand="block" color="medium">Proceed</ion-button>
    </div>
    <ion-modal
    color="light"
      trigger="open-modal1"
      :initial-breakpoint="0.38"
      :breakpoints="[0, 0.25, 0.5, 0.75]"
      handle-behavior="cycle"
    >
      <ion-content class="ion-padding">
        <h5 style="text-align:center; border-bottom: 1px solid grey; padding: .5rem;">Confirm Exchange</h5>
        <div style="margin-top: 1rem;">
        <ion-grid >
          <ion-row>
            <ion-col align="center">
              <div>From</div>
              <div><ion-chip><span v-if="tsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
      </span>
      <span v-if="tsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="tsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="tsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
      </span> {{amount}}</ion-chip></div>
            </ion-col>
            <ion-col>
              <div></div>
              <div style="margin-left: -.8rem;" align="center"><ion-icon :icon="swapHorizontalOutline"></ion-icon></div>
            </ion-col>
            <ion-col align="center">
              <div style="margin-left: .4rem;">To</div>
              <div>
                
                <!-- naira to other currencies -->
        <ion-chip  slot="end" v-if="ttsubview == 'usd' && tsubview == 'ngn'"
          >
          <span v-if="ttsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
      </span>{{Math.round(amount / 850) }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'ngn' && tsubview == 'ngn'"
          >
          <span v-if="ttsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
      </span>{{ Math.round(amount) }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'eur' && tsubview == 'ngn'"
          > <span v-if="ttsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
      </span> {{ Math.round(amount / 950) }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'gbp' && tsubview == 'ngn'"
          > <span v-if="ttsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
      </span> {{ Math.round(amount / 800) }}</ion-chip
        >
        <!-- dollar to others -->
        <ion-chip slot="end" v-if="ttsubview == 'usd' && tsubview == 'usd'"
          ><span v-if="ttsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
      </span> {{ Math.round(amount)}}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'ngn' && tsubview == 'usd'"
          ><span v-if="ttsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
      </span> {{ Math.round(amount * 850) }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'eur' && tsubview == 'usd'"
          ><span v-if="ttsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
      </span> {{ Math.round(amount * 1.05) }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'gbp' && tsubview == 'usd'"
          ><span v-if="ttsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
      </span> {{ Math.round(amount * 0.9) }}</ion-chip
        >
        <!-- euro to others -->
        <ion-chip slot="end" v-if="ttsubview == 'usd' && tsubview == 'eur'"
          ><span v-if="ttsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
      </span> {{ Math.round(amount / 1.05) }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'ngn' && tsubview == 'eur'"
          ><span v-if="ttsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
      </span> {{ Math.round(amount * 950) }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'eur' && tsubview == 'eur'"
          ><span v-if="ttsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
      </span> {{ Math.round(amount) }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'gbp' && tsubview == 'eur'"
          ><span v-if="ttsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
      </span>£ {{ Math.round(amount * 0.9) }}</ion-chip
        >
        <!-- pounds to others -->
        <ion-chip slot="end" v-if="ttsubview == 'usd' && tsubview == 'gbp'"
          ><span v-if="ttsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
      </span> {{ amount * 1.2 }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'ngn' && tsubview == 'gbp'"
          ><span v-if="ttsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
      </span> {{ amount * 800 }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'eur' && tsubview == 'gbp'"
          ><span v-if="ttsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
      </span> {{ amount * 0.9 }}</ion-chip
        >
        <ion-chip slot="end" v-if="ttsubview == 'gbp' && tsubview == 'gbp'"
          ><span v-if="ttsubview == 'ngn'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/th.png" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'usd'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/usd.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'eur'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/eur.jpg" alt=""
        /></ion-avatar>
      </span>
      <span v-if="ttsubview == 'gbp'" class="amount-item" color="light">
        <ion-avatar slot="start" class="flag-icon2"
          ><img src="../assets/gbp.jpg" alt=""
        /></ion-avatar>
      </span> {{ amount }}</ion-chip
        >
              </div>
            </ion-col>
          </ion-row>
        </ion-grid> 
        <div>
          <h6 style="text-align:center;">Exchange Rate</h6>
          <br>
          <div style="margin-left: .8rem;" align="center">
        <!-- naira to other currencies -->

        <ion-chip
          v-if="ttsubview == 'usd' && tsubview == 'ngn'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1USD = 820NGN</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'eur' && tsubview == 'ngn'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1EUR = 800NGN</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'ngn' && tsubview == 'ngn'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >EQUAL RATES</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'gbp' && tsubview == 'ngn'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1GBP = 950NGN</ion-chip
        >
        <!-- Euro to other currencies -->

        <ion-chip
          v-if="ttsubview == 'usd' && tsubview == 'eur'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1USD = 1.05EUR</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'eur' && tsubview == 'eur'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >EQUAL RATES</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'ngn' && tsubview == 'eur'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1NGN = 800EUR</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'gbp' && tsubview == 'eur'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1EUR = 0.9GBP</ion-chip
        >
        <!-- Pounds to other currencies -->

        <ion-chip
          v-if="ttsubview == 'usd' && tsubview == 'gbp'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1USD = 1.2GBP</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'eur' && tsubview == 'gbp'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1EUR = 0.9GBP</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'ngn' && tsubview == 'gbp'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1GBP = 900NGN</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'gbp' && tsubview == 'gbp'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >EQUAL RATES</ion-chip
        >
        <!-- Dollars to other currencies -->

        <ion-chip
          v-if="ttsubview == 'usd' && tsubview == 'usd'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >EQUAL RATES</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'eur' && tsubview == 'usd'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1USD = 1.05EUR</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'ngn' && tsubview == 'usd'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1USD = 820NGN</ion-chip
        >
        <ion-chip
          v-if="ttsubview == 'gbp' && tsubview == 'usd'"
          style="margin-top: -1.5rem; margin-right: 1rem"
          >1GBP = 1.2USD</ion-chip
        >
      </div>
        </div> 
      <ion-button href="/confirm-exchange" style="margin-top: .3rem;" id="open-modal1" expand="block" color="medium">Confirm</ion-button>
  
          <br>
          
        </div>
      </ion-content>
    </ion-modal>
  </div>
</template>
<script>
import {
  IonHeader,
  IonToolbar,
  IonIcon,
  IonTitle,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonModal
} from "@ionic/vue";
import {
  chevronBack,
  chatboxEllipses,
  chevronForward,
  medal,
  copy,
  swapVerticalOutline,
  closeOutline,
  swapHorizontalOutline
} from "ionicons/icons";
// import { ref } from 'vue';
export default {
  components: {
    IonHeader,
    IonToolbar,
    IonIcon,
    IonTitle,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonModal
  },
  data() {
    return {
      tsubview: "ngn",
      ttsubview: "usd",
      amount: "",
    };
  },

  setup() {
   
    return {
      chevronBack,
      chatboxEllipses,
      chevronForward,
      medal,
      copy,
      swapVerticalOutline,
      // result,
      closeOutline,
      swapHorizontalOutline
    };
  },
};
</script>
