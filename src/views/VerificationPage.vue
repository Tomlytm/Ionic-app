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
.not3 {
    font-size: 2.3rem;
}
</style>
<template>
  <ion-header>
    <ion-toolbar>
      <a href="/tabs/tab1"><ion-icon :icon="chevronBack"></ion-icon></a>
      <ion-title>Verification</ion-title>
    </ion-toolbar>
  </ion-header>
  <div class="add-container-all">
    <br>
    <div style="margin: 1rem">
    <h5>Select a Document for Verification</h5>
    </div>
    <div class="add-container1" style="padding: 1.5rem 1rem">
        
          <ion-item  id="open-modal2" color="light" style="border-radius:.4rem" class="add-item">
            <ion-label>
                BVN
            </ion-label>
            <ion-icon class="not3" slot="end" :icon="chevronForward"></ion-icon>
          </ion-item>
          <br>
          <ion-item id="open-modal3" color="light" style="border-radius:.4rem" class="add-item">
            <ion-label>
                Drivers License
            </ion-label>
            <ion-icon class="not3" slot="end" :icon="chevronForward"></ion-icon>
          </ion-item>
          <br>
          <ion-item id="open-modal4" color="light" style="border-radius:.4rem" class="add-item">
            <ion-label>
                NIN
            </ion-label>
            <ion-icon class="not3" slot="end" :icon="chevronForward"></ion-icon>
          </ion-item>
    </div>
    <ion-modal
    color="light"
      trigger="open-modal2"
      :initial-breakpoint="0.42"
      :breakpoints="[0, 0.25, 0.5, 0.75]"
      handle-behavior="cycle"
    >
      <ion-content class="ion-padding">
        <h5 style="text-align:center; border-bottom: 1px solid grey; padding: .5rem;">Enter your BVN</h5>
        <div style="margin-top: 1rem;">
        
            <h5>Enter your 11-digit BVN</h5>
            <ion-item style="border-radius: .2rem" color="medium">
                <ion-input placeholder="Your Bvn">

                </ion-input>
                
            </ion-item>
            <br>
            <p style="color: darkgrey; text-align: center;" >We need your BVN to create a virtual bank account for you</p>
            <br>
      <ion-button href="/confirm-exchange" style="margin-top: .3rem;" id="open-modal1" expand="block" color="medium">Confirm</ion-button>
  
          <br>
          
        </div>
      </ion-content>
    </ion-modal>
    <ion-modal
    color="light"
      trigger="open-modal3"
      :initial-breakpoint="0.42"
      :breakpoints="[0, 0.25, 0.5, 0.75]"
      handle-behavior="cycle"
    >
      <ion-content class="ion-padding">
        <h5 style="text-align:center; border-bottom: 1px solid grey; padding: .5rem;">BVN Verification</h5>
        <div style="margin-top: 1rem;">
        
            <h5>Enter your license number</h5>
            <ion-item style="border-radius: .2rem" color="medium">
                <ion-input placeholder="License Number">

                </ion-input>
                
            </ion-item>
            <br>
            <p style="color: darkgrey; text-align: center;" >We need your license number to verify you</p>
            <br>
      <ion-button href="/confirm-exchange" style="margin-top: .3rem;" id="open-modal1" expand="block" color="medium">Confirm</ion-button>
  
          <br>
          
        </div>
      </ion-content>
    </ion-modal>
    <ion-modal
    color="light"
      trigger="open-modal4"
      :initial-breakpoint="0.42"
      :breakpoints="[0, 0.25, 0.5, 0.75]"
      handle-behavior="cycle"
    >
      <ion-content class="ion-padding">
        <h5 style="text-align:center; border-bottom: 1px solid grey; padding: .5rem;">NIN Verification</h5>
        <div style="margin-top: 1rem;">
        
            <h5>Please Enter your NIN</h5>
            <ion-item style="border-radius: .2rem" color="medium">
                <ion-input placeholder="Your NIN">

                </ion-input>
                
            </ion-item>
            <br>
            <p style="color: darkgrey; text-align: center;" >We need your NIN to verify you</p>
            <br>
      <ion-button href="/confirm-exchange" style="margin-top: .3rem;" id="open-modal1" expand="block" color="medium">Confirm</ion-button>
  
          <br>
          
        </div>
      </ion-content>
    </ion-modal>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
</div>
</template>
<script>
import { IonHeader, IonToolbar, IonIcon, IonTitle, IonModal } from "@ionic/vue";
import {
  chevronBack,
  chatboxEllipses,
  chevronForward,
  medal,
  copy
} from "ionicons/icons";
export default {
  components: { IonHeader, IonToolbar, IonIcon, IonTitle, IonModal},

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
