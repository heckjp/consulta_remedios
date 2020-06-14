<template>
    <b-row>
        <b-col sm="12" md="3">
        <h1>Games</h1>
        </b-col>
        <b-col sm="12" md="2" offset-md="4">
            <b-form-select>
                <b-form-select-option >Mais populares</b-form-select-option>
                <b-form-select-option >Ordem alfabética</b-form-select-option>
                 <b-form-select-option >Preço</b-form-select-option>

            </b-form-select>
        </b-col>
       <b-col sm="12" md="3">
           <div class="cart">
               <h4 class="float-left">Carrinho</h4>
               <div v-if="cart==null ||!cart.items">
                    <p><b-img class="cart-img" :src="require('../assets/cart-icon.svg')" fluid></b-img></p>
                    <p>Até o momento seu carrinho está vazio</p>
               </div>
                <div v-if="cart">
                    <ul>
                        <li v-for="produto in cart.items" :key="produto.id">
                            {{produto.name}}
                            <b-button variant="primary" @click="removeFromCart(produto)">Remove</b-button>
                        </li>
                    </ul>
                   
                </div>
            </div>
       </b-col> 

    </b-row>
</template>

<script>
    export default {
     
        methods:{
            removeFromCart: function(produto){
             this.$store.commit('removeFromCart',produto)
            },
            getCart:function(){
                if(this.$cookies.isKey('cart')){
                this.$store.state.cart= this.$cookies.get('cart')
                }
            }
           
        },
        computed:{
            cart(){
                return this.$store.state.cart
            }
        },
        mounted(){
            this.getCart();
        }
      
       
        
        
       
      

    }
</script>

<style scoped>

.cart{
    border: 1px solid;
    max-width:50%;  
}

.cart-img{
    margin:5px;
}

</style>