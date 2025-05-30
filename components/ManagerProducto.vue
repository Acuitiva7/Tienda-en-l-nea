<template>
  <v-container>
    <v-row>
      <v-col v-for="data in productos" :key="data.id">
        <ProductoVue 
          :product="data"
          @buy="agregarAlCarrito"
        />
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import ProductoVue from './ProductoVue.vue'
import { useTiendaStore } from '../stores/store'

export default {
  components: { ProductoVue },
  setup() {
    const tiendaStore = useTiendaStore()

    const agregarAlCarrito = (idProducto) => {
      const producto = tiendaStore.getProductos.find(p => p.id === idProducto)
      if (producto) {
        tiendaStore.addCompra(producto)
      }
    }

    return {
      tiendaStore,
      agregarAlCarrito
    }
  },

  data() {
    return {
      productos: []
    }
  },

  mounted() {
    this.productos = this.tiendaStore.getProductos
  }
}
</script>

<style scoped>
.imagen {
  height: 40px;
  width: 40px;
}
</style>
