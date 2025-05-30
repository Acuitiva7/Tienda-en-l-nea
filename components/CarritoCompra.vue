<template>
  <v-card color="pink">
        <v-card-title class="text-h5">Carrito de compras</v-card-title>
        <v-divider class="mb-2"></v-divider>

        <div class="contenido-scroll">
      <v-data-table :items="tiendaStore.getCompras" density="confortable">
      <template v-slot:headers>
        <tr>
           <th>Id</th>
          <th>Imagen</th>
          <th>Descripción</th>
          <th>Precio unidad</th>
          <th>Cantidad</th>
          <th>Total</th>
          
        </tr>
      </template>

      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.id }}</td>
          <td><img class="imagen" :src="item.image" /></td>
          <td>{{ item.name }}</td>
          <td>{{ formatPrice (item.price) }}</td>
          <td>{{ item.cantidad }}</td>
          <td>{{ formatPrice(item.price * item.cantidad) }}</td> <!--Calcula el total del producto-->
        </tr>
      </template>
     <!-- ✅ Slot especial: mostrar el total arriba de la paginación -->
  <template v-slot:body.append>
    <tr>
      <td colspan="5" class="text-right font-weight-bold">Total de la compra:</td>
      <td><strong>{{ formatPrice(totalProductos) }}</strong></td>
    </tr>
  </template>
</v-data-table>
</div>
  </v-card>
   
</template>

<script setup>
import { useTiendaStore } from '../stores/store'
import { computed } from 'vue';

const tiendaStore = useTiendaStore()
const totalProductos = computed (() =>

tiendaStore.getCompras.reduce((total, item) => total + item.price * item.cantidad, 0)
)

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0 // para quitar los decimales
  }).format(price)
}

</script>

<style scoped>
.imagen {
  height: 80px;
  width: 80px;
}

.contenido-scroll {
  overflow-y: auto;
  max-height: 60vh;
}
</style>
