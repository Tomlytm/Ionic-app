<template>
    <ion-header class="ion-header">
      <ion-item class="header-item" lines="none">
        <ion-button fill="clear" slot="start">
          <ion-icon size="small" slot="icon-only" :icon="grid"></ion-icon>
        </ion-button>
        <p slot="end" class="user-name">@Username.me</p>
        <ion-avatar slot="end">
        <img src="../assets/icons/4.png" alt="">
        </ion-avatar>
        
      </ion-item>
      </ion-header>
      
    <ion-content  color="black">
      <div class="main-header"></div>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-label class="ion-label1">
                <ion-note class="ion-margin-start" color="white">
                 <span class="balance"> ACCOUNT BALANCE</span>
                  <br>
                  <p>
                    <ion-chip color="dark">
                      <ion-label class="balance">
                        ₦2,000,100
                      </ion-label>
                    </ion-chip>
                  </p>
                </ion-note>
              </ion-label>
            </ion-col>
            <ion-col size="6" class="ion-text-end">
              <ion-button class="top-up" color="dark" size="small">
                <ion-text>TOP UP </ion-text>
                <ion-icon slot="end" class="add" :icon="add" color="light" size="small"></ion-icon>
              </ion-button>
            </ion-col>
          </ion-row>
          <ion-row class="ion-margin-horizontal ion-margin-top">
            <ion-col>
              
              <ion-label>
                <b>Quick Access</b>
                <span class="more">     
                <b>more</b>         
                <ion-icon class="more-icon" slot="end" size="small" :icon="chevronForwardOutline"></ion-icon>
                </span>
              </ion-label>
            </ion-col>
          </ion-row>
          <ion-row class="ion-margin-horizontal">
            <ion-col>
              <ion-card class="ion-text-center">
                <ion-card-header>
                  <div align="center">
                    <ion-thumbnail>
                      <img class="ion-img" src="../assets/icons/top-up.png" alt="">
                    </ion-thumbnail>
                  </div>
                </ion-card-header>
                <ion-card-content>
                  <ion-label>
                    Loan Money
                  </ion-label>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card class="ion-text-center">
                <ion-card-header>
                  <div align="center">
                    <ion-thumbnail>
                      <img class="ion-img"  src="../assets/icons/cash-withdrawal.png" alt="">
                    </ion-thumbnail>
                  </div>
                </ion-card-header>
                <ion-card-content>
                  <ion-label>
                    Withdraw
                  </ion-label>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card class="ion-text-center">
                <ion-card-header>
                  <div align="center">
                    <ion-thumbnail>
                      <img class="ion-img"  src="../assets/icons/send.png" alt="">
                    </ion-thumbnail>
                  </div>
                </ion-card-header>
                <ion-card-content>
                  <ion-label>
                    Send Money
                  </ion-label>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card class="ion-text-center">
                <ion-card-header>
                  <div align="center">
                    <ion-thumbnail>
                      <img class="ion-img"  src="../assets/icons/debit-card.png" alt="">
                    </ion-thumbnail>
                  </div>
                </ion-card-header>
                <ion-card-content>
                  <ion-label>
                    Pay Bills
                  </ion-label>
                </ion-card-content>
              </ion-card>
            </ion-col>
            
          </ion-row>
          <ion-list>
            <ion-list-header>
              <ion-label class="rt">RECENT TRANSACTIONS </ion-label>
            </ion-list-header>
            
            <ion-item class="list-item">
              <ion-icon slot="start" size="small" :icon="cash" color="success">
                </ion-icon>
              <ion-label>
               <span>WEEKLY TRIFT </span>
                <p>05 Aug 2021, 12:07</p>
              </ion-label>
              <ion-text slot="end" color="success">₦5,000</ion-text>
            </ion-item>
            <ion-item class="list-item">
                <ion-icon slot="start" size="small" :icon="cash" color="success">
                </ion-icon>
              <ion-label>
               <Span>AIRTIME</Span> 
                <p>05 Oct 2021, 15:04</p>
              </ion-label>
              <ion-text slot="end" color="danger">₦3,000</ion-text>
            </ion-item>
            <ion-item class="ion-no-lines">
              <p slot="end">more</p>
              <ion-icon slot="end" size="small" :icon="chevronForward"></ion-icon>
            </ion-item>
        </ion-list>
        </ion-grid>
      

    </ion-content>
    
 
</template>

<script>
import { IonHeader, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonLabel, IonNote} from '@ionic/vue';
import { grid, add, cash, chevronForwardOutline, chevronForward } from "ionicons/icons";

export default ({
  name: 'Tab1Page',
  components: { IonHeader, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonLabel, IonNote},
  
  setup() {
   
    return {
      grid, add, cash, chevronForwardOutline, chevronForward
    }
    
  }
});
</script>
<style>
ion-header {
  background: transparent;
}
.ion-header {
  background-color:#5e5bb6;

}
ion-item {
  --background: transparent
 }
 /*
ion-menu-button {
  color: white
} */
ion-avatar {
  background: white;
  box-shadow: -1px 11px 13px -6px rgb(0, 0, 0);
}
/* .top-up {
  color: white;
} */

.main-header {
  height: 45vh;
  width: 150%;
  background-image: linear-gradient(#5754a3, #6e6bc9);
  box-shadow: 0 1px 10px var(--ion-color-light);
  border-radius: 0 0 50% 50%;
  margin-left: -14vh;
  margin-top: -60px;
}
* {
  font-family: Verdana, Geneva, Tahoma, sans-serif; 
  
}
.user-name {
  font-size: 0.7rem;
}
ion-icon{
  color: white;
}
ion-grid {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(5vh);
  padding-bottom: 8vh;
  
}
ion-note {
  font-size: 0.8rem;
  letter-spacing: 0.7px;
  text-shadow: -1px 11px 13px -6px rgb(0, 0, 0);

}
ion-chip {
  color: white;
  font-weight: bolder;
  font-size: 1.5rem;
  letter-spacing: 2px;
  
}
.balance {
  font-family: sans-serif;
}
.ion-label1 {
  font-size: 1.4rem;
}
.balance {
  font-family: serif;
}
.top-up {
  box-shadow: -1px 11px 13px -6px rgb(0, 0, 0);
  height: 3.5em !important;
  transform: translateY(10%);
  font-weight: bold;
  font-family: sans-serif;
}
.add {
  font-size: 1.5rem;
  font-family: sans-serif;
}
b {
  font-size: 1.2rem;
  font-weight: bold;
  font-family: sans-serif;
}
ion-card {
  box-shadow: -1px 11px 13px -6px rgb(0, 0, 0);
          border-radius: 10px !important;
          margin: 10px 0;}
ion-thumbnail {
            width: 8vh;
            height: 8vh;
            border-radius: 20px;
            background-color: rgba(45, 178, 211, 0.1);
            font-family: sans-serif;
}
.ion-img {
              width: 4vh;
              height: 4vh;
              transform: translateY(50%);
              box-shadow: -1px 11px 13px -6px rgb(0, 0, 0);

}
ion-list {
  font-family: sans-serif;
}
.list-item {
  width: 95%;
  border-radius: 10px;
  font-family: sans-serif;
}
.rt {
  font-size: 1rem;
  font-family: sans-serif;
}
ion-item {
  font-family: sans-serif;
}
p{
  font-family: sans-serif;
  letter-spacing: 1.5px;
}
.more {
  margin-left: 42%;
  box-shadow: -1px 11px 13px -6px rgb(0, 0, 0);
}
.more-icon {
  transform: translateY(2px);

}
</style>
