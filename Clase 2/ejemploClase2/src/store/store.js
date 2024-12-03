// se configurara vuez para que gusrade y maneje la informacion 
import { createStore } from "vuex";

const store = createStore ({
    state: {
        carrito: 0, // guardo cuantos productos tiene mi carrito
    },
    mutations:{
        agregarProducto(state){
            state.carrito++; //aumentando el numero de productos 
        },
        quitarProductos(state){
            if(state.carrito > 0){
                state.carrito--; //quitando productos 
            }
        },
    },
    actions:{

    },
    getters:{
        totalProductos(state){
            return state.carrito; //retorno de cuantos productos hay en el carrito
        }
    }
});

export default store;