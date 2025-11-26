<script setup>
  import { ref, onMounted } from 'vue';

  let dataCuaca = ref([])

  const getData = async () => {
    try {
      const fetchApi = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m")
      const response = await fetchApi.json()

      dataCuaca.value = response.hourly.time.map((time,index)=>({
        jam : time.replace("T", " "),
        suhu : response.hourly.temperature_2m[index]
      }));

    } catch (error) {
      console.log(error)
    }
  }

  onMounted(()=>{
    getData()
  })
</script>

<template>
  <div>
    <h1>Data Cuaca Jakarta</h1>
    
    <p v-if="dataCuaca.length === 0">Sedang memuat...</p>

    <table v-else>
      <thead>
        <tr class="title">
          <th>Waktu</th>
          <th>Suhu (°C)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataCuaca" :key="index" class="content">
          <td>{{ item.jam }}</td>
          <td>{{ item.suhu }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  table {
    width: 100%;
    border-collapse: collapse; 
  }

  th, td {
    border: 1px solid black;   
    padding: 8px;              
    text-align: left;
  }

  th {
    background-color: #f0f0f0; 
  }
  .title{
    color: black;
  }
  .content{
    color: white;
  }
</style>
