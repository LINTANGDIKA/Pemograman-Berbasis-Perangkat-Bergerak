<template>
  <IonContent :fullscreen="true">
    <div class="content-button">
      <IonButton @click="getData">
        Refresh
      </IonButton>
    </div>
    <IonGrid>
      <IonRow v-for="(item,index) in data" :key="index">
        <IonCol>
          <div class="header">Rank</div>
          <div class="content">{{ item.rank }}</div>
        </IonCol>
        <IonCol>
          <div class="header">{{ item.typeHeader }}</div>
          <div class="content">{{ item.type }}</div>
        </IonCol>
        <IonCol>
          <div class="header">USD</div>
          <div class="content">{{ item.price }}</div>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
</template>

<script setup lang="ts">
import { IonContent, IonCol, IonGrid, IonRow, IonButton} from '@ionic/vue';
import {ref,onMounted} from 'vue';

interface Coin {
  id : string,
  rank : number,
  type : string,
  typeHeader : string,
  price : string;
}

const data = ref<Coin[]>([]);

const getData = async()=> {
  try {
    const response = await (await fetch('https://api.coinlore.net/api/tickers/')).json()

    data.value = response.data.map((data : any, index : number)=>({
      id : index + 1,
      rank : data.rank,
      type: data.symbol,
      typeHeader : data.name,
      price : data.price_usd
    }))
    
  } catch (error) {
    console.log(error)
  }
  
}
onMounted (()=>{
    getData()
  })
</script>

<style scoped>
.header {
  font-size: 12px;
  padding: 10px;
}
.content-button {
  padding: 2rem;
  text-align: center;
  background-color: white;
}
  ion-col {
    background-color: #fef6d6;
    border: solid 1px #e0d8b0;
    color: #000000;
    text-align: center;
  }
</style>
