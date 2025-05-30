// stores/counter.ts
import { defineStore } from 'pinia'

export const useTiendaStore = defineStore('tienda', {
  state: () => (
    {
    compras : [],

    productos: [
      
{   id: 1,
 name: 'Rubor Líquido Love Steady Moira',
price: 45000,
image: 'https://i0.wp.com/madalecosmeticos.com/wp-content/uploads/2024/04/MOIRA-love-steady-rubor-liquido_0006_11-adorn.png?resize=600%2C600&ssl=1',
},

{   id: 2,
 name: 'POLVO SUELTO RAQUEL*20G #1A BANANA TRASLUCIDO',
  price: 17000,
  image: 'https://krika.vtexassets.com/arquivos/ids/177791/032768.png?v=638200217666670000',
  },


 {   id: 3,
name: 'Labial Humectante Samy',
price: 7400,
image: 'https://samycosmetics.vtexassets.com/arquivos/ids/157776-800-auto?v=638560437108230000&width=800&height=auto&aspect=true',
  },


{   id: 4,
name: 'Pestañina efecto total 6',
price: 10000,
image: 'https://yamilesernamakeup.com/wp-content/uploads/2024/08/yamilesernamakeup-pestanina-efecto-total-6-vogue.png',
},


{   id: 5,
  name: 'Samy Base Líquida de Maquillaje Miracle Skin 30g',
  price: 4700,
  image: 'https://cdn.shopify.com/s/files/1/1161/3498/products/BASE_LIQUIDA_MIRACLE_SKIN_SAMY___1._LIGHT_VANILLA_-_VAINILLA_LIGERA-7703378002227.png?v=1661289720&width=1400&crop=center',
},


{   id: 6,
name: 'Hidratante Labial Nivea Cereja Shine 4,8g',
price: 10000,
image: 'https://paguemenos.vtexassets.com/arquivos/ids/238830/hidratante-labial-nivea-cereja-shine-4-8g-principal.jpg?v=637045488784900000',
},


{   id: 7,
  name: 'Paleta de Sombras Ultra Pigmentación Larga Duración Neutral Nudes',
  price: 75600,
  image: 'https://www.yanbal.com/medias/20013425-02.jpg?context=bWFzdGVyfGltYWdlc3wzMzk3OTF8aW1hZ2UvanBlZ3xhREkwTDJobVl5OHhNRE15TWpFM01Ua3lNRFF4TkM4eU1EQXhNelF5TlY4d01pNXFjR2N8YzNkOTczMTA4MmUzOWQ1ZmZhZDg0MmFjYmExYmMzY2ZjMzVlNmU2Zjg5ZDFhMmNiZmI5MjZmMDRiODEyZDRmZQ',
},


{   id: 8,
name: 'Brillo De Labios Sheglam',
price: 6000,
image: 'https://roseglam.co/wp-content/uploads/2024/06/BRILLO-SHEGLAM.jpg',
},

{   id: 9,
name: 'Set x 3 cosmetiqueras Washbag',
price: 50000,
image: 'https://www.inkasa.com.co/cdn/shop/files/rosado_a3ec30de-5fe3-46e0-bf28-310da6bfdec2.jpg?v=1723477321',
},

{   id: 10,
name: 'Gancho de mariposa purpura',
price: 3000,
image: 'https://www.loubotanicals.pe/3342/gancho-mariposa-pink.jpg',
},
{   id: 11,
name: 'Collar de Mariposa dorado - acero inoxidable',
price: 20000,
image: 'https://cdnx.jumpseller.com/quimera-jewelry/image/23536644/resize/1000/1000?1664866347',
},
{   id: 12,
name: 'Gancho Caiman para el cabello',
price: 5000,
image: 'https://glowhousebeauty.com/cdn/shop/files/2_6f3643ec-0fd3-4c59-8178-11191f289ad3.png?v=1720415234&width=533',
}


]
  }),
  getters: {
    getProductos: (state) => state.productos,
    getCompras: (state) => state.compras
  },

  actions: {
   addCompra(product) {
    let obj = this.compras.find((e) => {
      return e.id == product.id
    })
    if (obj == undefined)
    {
      const objetoActualizado = { ...product, cantidad: 1};
      this.compras.push(objetoActualizado)
    }
  else
  obj.cantidad += 1
  console.log(this.getCompras)
   },
   
  }
})