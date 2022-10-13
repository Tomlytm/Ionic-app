<template>
  <ion-slides pager="true" :options="slideOpts">
    <ion-slide>
      <div>

        <ion-card>
    <ion-card-header>
      <ion-card-subtitle>Noname</ion-card-subtitle>
      <ion-card-title></ion-card-title>
      <ion-img :src="imgss.srcs1"></ion-img>
    </ion-card-header>
  </ion-card>

          
              <h2>Welcome to TOPUP space</h2>
            </div>
            <!-- <div class="item-text-wrap">
            <ion-button color="primary" href="/register">Register</ion-button>
            <ion-button color="primary" href="/c">Test</ion-button>
          </div> -->
    </ion-slide>
    <ion-slide>
      <div>
       <ion-img :src="imgss.srcs2"></ion-img>
            <h2><i class="fa-solid fa-piggy-bank"></i>Bank</h2>
            <p>
              <b>Get</b> Get Monthly free transfers, a free debit card and smarter budgeting.
            </p>
          </div>
    </ion-slide>
    <ion-slide>
      <div>
      <ion-img :src="imgss.srcs3"></ion-img>
            <h2>Save</h2>
            <p>
              <b>Earn</b> Earn more Interest on your savings and save automatically when you spend.
            </p>
          </div>
          
        
    </ion-slide>
  </ion-slides>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <ion-content><ion-button href="/register" expand="block">Open an Account</ion-button> 
    <p align="center"><b>Have An Account?</b> <a href="/l" color="green">Sign In</a></p>
  </ion-content>
 
</template>


<script>
import { IonSlides, IonSlide, IonImg, } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonSlides, IonSlide, IonImg, },
  setup() {
    // Optional parameters to pass to the swiper instance. See https://swiperjs.com/swiper-api for valid options.
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    const imgss = {
      srcs1: '/assets/bills.png',
      srcs2: '/assets/fintech_09.jpg',
      srcs3: '/assets/deposit.png',
    };
    return { slideOpts, imgss }
  }
});
</script>