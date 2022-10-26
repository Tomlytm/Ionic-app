<style>
  .not {
    font-size: 1.4rem;
    margin-top: 1.2rem;
  }
  ion-segment-button {
    padding: .5rem;
    border-radius: 1.5rem;  
  }
    ion-segment {
      border-radius: 1rem;
      background-color: rgb(33, 33, 33);
      box-shadow: -1px 11px 15px -6px rgb(0, 0, 0);
    }
  .balance-container {
    background-color: rgb(29, 29, 29);
    box-shadow: rgba(0, 0, 0, 0.24) 2px 5px 8px;
  }
  .balance-icon{
    text-shadow: rgba(0, 0, 0, 0.24) 2px 5px 8px;
  }
</style>

<template>
    <ion-header class="ion-header">
      <ion-item color="light" class="dashboard-header">
        <ion-avatar slot="start">
          <img class="ion-img" src="../assets/icons/user-avatar-1.png">
</ion-avatar>
        <ion-label>
          <p style="color: rgb(220, 220, 220); font-size: .8rem; ">Good Afternoon!</p>
          <b class="payment-label" style="font-size: 1rem; font-family: Verdana;" >Tomilayo Damilola</b>
        </ion-label>
        <br />
        <ion-icon class="not" slot="end" :icon="notificationsOutline"></ion-icon>
      </ion-item>
      </ion-header><ion-content  color="light">
      <br>
      
  <ion-segment  value="default">
    <ion-segment-button value="default">
      
        <p>Flex Naira</p>
        <ion-label >
          <ion-chip class="balance-container">
       <h2 style="font-weight: bold; font-family: serif; letter-spacing: 1px;"> ₦ 723,000</h2>
       </ion-chip>
       <br>
       <br>
       <ion-icon class="balance-icon" :icon="arrowForwardCircle"></ion-icon></ion-label>       
      
    </ion-segment-button>
    <ion-segment-button value="segment">
      
        <p>Flex Dollar</p><ion-label >
          <ion-chip class="balance-container">
       <h2 style="font-weight: bold; font-family: serif; letter-spacing: 1px;"> $ 7,050</h2>
       </ion-chip>
       <br>
       <br>
       <ion-icon class="balance-icon"  :icon="arrowForwardCircle"></ion-icon></ion-label>       
       
      
    </ion-segment-button>
    <ion-segment-button value="segmwent">
      
        <p>Flex Euro</p><ion-label >
          <ion-chip class="balance-container">
       <h2 style="font-weight: bold; font-family: serif;letter-spacing: 1px;"> € 2,000</h2>
       </ion-chip>
       <br>
       <br>
       <ion-icon class="balance-icon"  :icon="arrowForwardCircle"></ion-icon></ion-label>
       
       
      
    </ion-segment-button>
    
  </ion-segment>
    
      <!-- <div class="main-header"></div>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-label class="ion-label1">
                <ion-note class="ion-margin-start" color="white">
                  <p>Hi, {{info}}</p>
                 <span class="balance"> ACCOUNT BALANCE</span>
                  <br>
                </ion-note>
              </ion-label>
            </ion-col>
            <ion-col size="6" class="ion-text-end">
              <ion-button class="top-up" color="dark" size="small">
                
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
                    <a href="/pb">
                    <ion-thumbnail>
                     <img class="ion-img"  src="../assets/icons/debit-card.png" alt="">
                    </ion-thumbnail></a> 
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
                <p>05 Oct 2021, 15:04</p>
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
       -->

    </ion-content>
    
 
</template>

<script>
import { IonHeader, IonAvatar, IonLabel} from '@ionic/vue';
import { grid, add, cash, chevronForwardOutline, chevronForward, notificationsOutline, arrowForwardCircle } from "ionicons/icons";
// import RegisterPage from '../views/RegisterPage.vue'
export default ({
  name: 'Tab1Page',
  components: { IonHeader, IonAvatar,  IonLabel},
  data() {
    return {
    info: ''
  }

  },
  setup() {
   
    return {
      grid, add, cash, chevronForwardOutline, chevronForward, notificationsOutline, arrowForwardCircle
    }
  },
  created(){
    let user = JSON.parse(localStorage.getItem('user-info'))
    this.info =user.data;
  }
  // mounted(){
  //       let user = localStorage.getItem('user-info');
  //       if(!user){
  //         this.$router.push({name:'register'})
  //       }
  //     }
});
</script>
