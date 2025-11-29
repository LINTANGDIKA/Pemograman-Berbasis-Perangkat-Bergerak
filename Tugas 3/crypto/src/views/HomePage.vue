<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="refresh">
        <IonButton @click="getData">Refresh</IonButton>
      </div>
      <ion-grid>
        <ion-row v-for="(data,index) in dataCrypto" :key="index" class="content">
          <ion-col>
            <div class="header">Rank</div>
            <div class="content">{{ data.rank }}</div>
          </ion-col>
          <ion-col>
            <div class="header">{{ data.typeHeader }}</div>
            <div class="content">{{ data.type }}</div>
          </ion-col>
          <ion-col>
            <div class="header">USD</div>
            <div class="content">{{ data.price }}</div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonCol, IonGrid, IonRow,IonContent,IonButton } from '@ionic/vue';
import {ref, onMounted} from 'vue';

interface Coin {
  id : string,
  rank : number,
  price : string,
  type : string,
  typeHeader : string;
}

const dataCrypto = ref<Coin[]>([]);

const getData = async ()=>{
  try {
      const fetchApi = await fetch('https://api.coinlore.net/api/tickers/')
      const response = await fetchApi.json()
      
      dataCrypto.value = response.data.map((data : any,index : number)=>({
        id : index + 1,
        rank : data.rank,
        type : data.symbol,
        price : data.price_usd,
        typeHeader : data.nameid
      }));
    
  } catch (error) {
    console.log(error)
  }
}

onMounted(()=>{
  getData()
})

</script>

<style scoped>
  .refresh{
    background-color: white;
    padding: 2rem;
    text-align: center;
  }

  ion-col {
    background-color: #fef6d6;
    border: solid 1px #e0d8b0;
    color: #000000;
    text-align: center;
  } 
  .header {
    font-size: 12px;

  }
</style>
