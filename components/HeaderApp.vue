<template>
  
  <v-app-bar color="red" class="fondo" density="prominent">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <!-- Botón del carrito -->
      <v-spacer />
    <v-btn icon @click="mostrarCarrito = true" class="mr-8 mt-8">
      <v-badge :content="totalArticulos" color="green" overlap>
        <v-icon >mdi-cart-outline</v-icon>
      </v-badge>
    </v-btn>
  </v-app-bar>

  <!-- VENTANA emergente del carrito -->
  <v-dialog v-model="mostrarCarrito" max-width="1000" >
    <v-card class="carrito-modal">
      <CarritoCompra />
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import CarritoCompra from './CarritoCompra.vue'
import { useTiendaStore } from '../stores/store'

const tiendaStore = useTiendaStore()
const mostrarCarrito = ref(false)

const totalUnidades = computed(() =>
  tiendaStore.getCompras.reduce((sum, item) => sum + item.cantidad, 0)
)

// 👉 Computa la suma de cantidades de todos los productos en el carrito
const totalArticulos = computed(() =>
  tiendaStore.getCompras.reduce((total, producto) => total + producto.cantidad, 0)
)
</script>

<style scoped>
.fondo {
  background-image: url(/img/foto.header.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.carrito-modal {
  max-height: 80vh;
  display: flex;
  flex-direction: column;
}
</style>
