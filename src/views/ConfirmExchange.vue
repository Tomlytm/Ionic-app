<style>
.success-image {
   display: block;
   margin: 10rem auto 0 auto ;
   
}
</style>

<template>
    <ion-header>
          <ion-toolbar color="black">
            <a class='return' href="/exchange"> <ion-icon :icon="chevronBackOutline"></ion-icon></a>
          </ion-toolbar>
        </ion-header>
        <div style="background-color:black; height: 100%;">
    <img class="success-image" src="../assets/success.png" alt="">
            <div style="text-align:center">
                <h4>Success !!</h4>
                <p>Way to go champ,</p>
                <p>Exchange successful.</p>
            </div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <div style="margin: 4rem;">
        <ion-button expand="block" slot="end" color="medium">Back Home</ion-button>
        </div>
        
    </div>
      </template>
      
      <script>
      import { } from '@ionic/vue';
      import { chevronBackOutline, helpCircleOutline, mail } from "ionicons/icons";
      
      export default({
        components: { },
        setup(){
          return {
            chevronBackOutline, helpCircleOutline, mail
          }
        }
      });
      </script>
    