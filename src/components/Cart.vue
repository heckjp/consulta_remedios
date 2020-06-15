<template>
    <b-row>
       <b-col sm="12" md="12">
           <div class="cart">
               <span class="cart-title">Carrinho</span>
               <div v-if="cart.items.length==0" class="mt-5">
                    <p><b-img class="cart-img" :src="require('../assets/cart-icon.svg')" fluid></b-img></p>
                    <p>Até o momento seu carrinho está vazio</p>
               </div>
                <div v-if="cart.items.length>0" class="mt-3">
                    <b-list-group class="float-left">
                        <b-list-group-item @mouseover="hover=produto.id" @mouseleave="hover=null" v-for="produto in cart.items" :key="produto.id" class="d-flex justify-content-between">
                            <span class="image mr-3">
                                <b-avatar rounded="sm" :src="getImgUrl(produto.image)" class="mr-3"></b-avatar>
                            </span>
                            <span class="mr-3">
                                {{produto.name}}<br>
                                <strong>{{produto.price.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}}</strong><br>
                            </span>
                              <b-icon icon="x-circle"  @click="removeFromCart(produto)" v-if="hover==produto.id"></b-icon>
                        </b-list-group-item>
                        <b-list-group-item class="d-flex justify-content-between"> 
                            <span class="mr-3">Subtotal:</span>
                            <span class="subtotais">{{cart.subtotal.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}}</span>
                        </b-list-group-item>
                        <b-list-group-item class="d-flex justify-content-between">
                            <span class="mr-3">Frete:</span>
                            <span class="subtotais">{{cart.shipping.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}}</span>
                        </b-list-group-item>
                        <b-list-group-item class="d-flex justify-content-between">
                            <span  class="mr-3">Total:</span>
                            <span class="total">{{cart.total.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}}</span>
                        </b-list-group-item>
                    </b-list-group>
                      <b-button class="checkout">Finalizar compra</b-button>

                </div>
            </div>
       </b-col> 

    </b-row>
</template>

<script>
    export default {
        data(){
            return{
                hover:null
            }
        },
        methods:{
            removeFromCart: function(produto){
             this.$store.commit('removeFromCart',produto)
             this.$store.commit('calculateCartValues')
            },
            getCart:function(){
                if(this.$cookies.isKey('cart')){
                this.$store.state.cart= this.$cookies.get('cart')
                }
            },
              getImgUrl(img) {
            return require('../assets/'+img)
            },
           
        },
        computed:{
            cart(){
                return this.$store.state.cart
            }
        },
        mounted(){
            this.getCart();
            this.$store.commit('calculateCartValues');
        }
      
       
        
        
       
      

    }
</script>

<style scoped>

.cart{
    border: #e1e1e1 1px solid; 
    margin:0;
    float:left;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 14px;
    color:#7F7575;
    width:100%;
    min-height: 33vh;
}

.cart-img{
    margin:5px;
}

.list-group .list-group-item{
    border:none;
    position: relative;
    float:left;
}

.bi-x-circle{
    vertical-align: 50%;
    cursor:pointer;
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 12px;
    color:#fff;
    background:#54A3FF;
    border-radius:10px;

}

.image {
    position: relative;
    float: left;
    border:#eeeeee;
    background: #EEEEEE;
    padding:5px;
    border-radius:5px;
}
.price{
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 16px;
    color: #423B3B
}

.subtotais{
     font-family: 'Open Sans';
    font-weight: 700;
    font-size: 16px;
    color:#423B3B
}

.total{
     font-family: 'Open Sans';
    font-weight: 700;
    font-size: 20px;
    color:#423B3B;
}

.checkout{
    font-weight: 700;
    background-color:#54A3FF;
    margin:5px;
    width:90%;
    border:none;
}

.cart-title{
    font-family: 'Open Sans';
    font-weight: 600;
    color:#363636;
    font-size: 18px;
    float: left;
    margin-left:5px;
    margin-bottom: 10px;
}




</style>