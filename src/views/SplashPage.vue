<template>
  <ion-slides pager="true" :options="slideOpts">
    <ion-slide>
      <div>
        <ion-card color="black">
          <ion-card color="black">
            <ion-card color="black">
              <ion-img :src="imgss.srcs1"></ion-img>
            </ion-card>
          </ion-card>
        </ion-card>
        <ion-card color="black">
              <h1 style="font-weight:bolder">Welcome to TOPUP space</h1>
              <h4 class="hider">
              <b>Get</b>Monthly free transfers, a free debit card and smarter budgeting budgeting.
            </h4>
            </ion-card>
          </div>
    </ion-slide>
    <ion-slide>
      <div>
        <ion-card color="black">
              <ion-img  :src="imgss.srcs2"></ion-img>
          <ion-card color="black">
            <h2> <b>Funds Transfer</b> </h2>
            <h4>
              <b>Get</b> Monthly free transfers, a free debit card and smarter budgeting.
            </h4>
        </ion-card>
        </ion-card>
        </div>
    </ion-slide>
    <ion-slide>
      <div>
        <ion-card color="black">
          <ion-card color="black">
              <ion-img :src="imgss.srcs3"></ion-img>
            
          </ion-card>
          <ion-card color="black">
            <h2> <b>Save</b></h2>
            <h4>
              <b>Earn </b>Interest on your savings and save automatically when you spend.
            </h4>
          </ion-card>
        </ion-card>
            
          </div>
          
        
    </ion-slide>
    <ion-slide>
      <div>
        <ion-card color="black">
          <ion-card color="black">
              <ion-img :src="imgss.srcs4"></ion-img>
            
          </ion-card>
          <ion-card color="black">
            <h2><b>Pay Bills</b></h2>
            <h4>
              <b>Make </b>any bill payment and Utility payments comfortably, No stress!
            </h4>
          </ion-card>
        </ion-card>
            
          </div>
          
        
    </ion-slide>
  </ion-slides>
  <ion-card color="black">
    <ion-card color="black">
    <ion-button color="tertiary" href="/register" expand="block">Open An Account</ion-button> 
   
  </ion-card>
  <h5 align="center"><b>Have an Account?</b> <a href="/l" color="green">Sign In</a></h5>
</ion-card>
</template>


<script>
import { IonSlides, IonSlide, IonImg, IonCard } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: { IonSlides, IonSlide, IonImg, IonCard},
  setup() {
    // Optional parameters to pass to the swiper instance. See https://swiperjs.com/swiper-api for valid options.
    const slideOpts = {
      initialSlide: 0,
      speed: 300
    };
    const imgss = {
      srcs1: '/assets/bills.png',
      srcs2: '/assets/funds-transfer.png',
      srcs3: '/assets/deposit.png',
      srcs4: '/assets/payments-bills-and-utility.png',
    };
    return { slideOpts, imgss }
    
  }
});
</script>
<style>
*{
  font-family: 'Verdana';
}
ion-card .hider{

  visibility: hidden;
}
.splash-img {
  margin-top: 5rem;
}
</style>