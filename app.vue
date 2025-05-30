import { ProductoVue } from './.nuxt/components';
<template>
  <v-app>
   <HeaderApp></HeaderApp> 
   <v-main>
     <v-container>
       <ManagerProducto></ManagerProducto>
     </v-container>
   </v-main>   
  </v-app>
</template>
<script setup>


useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css'
    }
  ]
})
</script>