import Vue from 'vue';
import Vuex from 'vuex';
import cookie from 'vue-cookies';


Vue.use(Vuex);
Vue.use(cookie);

export default new Vuex.Store({
  state: {
    cart:{
      items:[],
      shipping:0,
      subtotal:0,
      total:0
    },
    order:null
  },
  mutations: {
    addToCart (state,produto) {
      if(cookie.isKey('cart')){
        state.cart=cookie.get('cart');
          console.log(state.cart,'carrinho');
          if(state.cart.items!=null){
            if(state.cart.items.find(x=>x.id==produto.id)){
              alert('O produto já foi adicionado no carrinho')
            } else{
              state.cart.items.push(produto);
              console.log(state.cart, 'carrinho else'); 
            }
          } else{
            state.cart.items.push(produto);
          }
        } else{
          state.cart.items.push(produto);
        }
        cookie.set('cart',JSON.stringify(state.cart))
        console.log(cookie.get('cart'));
    },
    removeFromCart(state,produto){
      state.cart = cookie.get('cart');
      console.log(state.cart, produto);
      var index = state.cart.items.findIndex(p => p.name == produto.name)

      console.log(index);
      state.cart.items.splice(index,1); 
      cookie.set('cart',JSON.stringify(state.cart));
    },

    calculateCartValues(state){
      let subtotal=0;
      state.cart.items.forEach(function(v){
        subtotal += v.price;
        if(subtotal<=250){
          state.cart.shipping+= 10;
        }
        else{
          state.cart.shipping=0;
        }
      })
      state.cart.subtotal = subtotal;
      state.cart.total =  state.cart.subtotal + state.cart.shipping;
    }
  }

})