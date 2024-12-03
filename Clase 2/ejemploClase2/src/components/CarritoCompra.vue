<template>
    <div>
      <h1>Carrito de compras</h1>
      <p>Total de productos: {{ totalProductos }}</p>
      <button @click="agregarProducto">Agregar producto</button>
      <button @click="quitarProducto">Quitar producto</button>
    </div>
  </template>

  <script>
    import { computed } from 'vue';
import { mapMutations, mapGetters} from 'vuex'; 

    export default {
        computed:{
            ...mapGetters(['totalProductos']),
        },
        methods:{
            ...mapMutations(['agregarProducto', 'quitarProductos']),
        },
    };
</script>

<style scoped>
button{
    margin: 5px;
}
</style>