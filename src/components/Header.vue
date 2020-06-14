<template>
    <b-row>
        <b-col sm="12" md="3">
        <h1>Games</h1>
        </b-col>
        <b-col sm="12" md="2" offset-md="4">
            <b-form-select v-model="selected" :options="options" @change="sortProducts()"></b-form-select>
        </b-col>
       <b-col sm="12" md="3">
           <div class="cart">
               <h4 class="float-left">Carrinho</h4><br>
               <div v-if="cart.items.length==0">
                    <p><b-img class="cart-img" :src="require('../assets/cart-icon.svg')" fluid></b-img></p>
                    <p>Até o momento seu carrinho está vazio</p>
               </div>
                <div v-if="cart">
                    <b-list-group>
                        <b-list-group-item v-for="produto in cart.items" :key="produto.id" class="d-flex justify-content-between align-items-center">
                            <b-img thumbnail="" :src="getImgUrl(produto.image)" fluid></b-img>
                            <span>
                                {{produto.name}}<br>
                                <strong>{{produto.price.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}}</strong>
                            </span>
                            <b-icon icon="x-circle"  @click="removeFromCart(produto)"></b-icon>
                        </b-list-group-item>

                    </b-list-group>
                   
                   
                </div>
            </div>
       </b-col> 

    </b-row>
</template>

<script>
    export default {
        data(){
            return{
                selected:null,
                options:[
                    {value:null,text:'Ordenar por'},
                    {value:'score',text:'Mais populares'},
                    {value:'name',text:'Ordem alfabética'},
                    {value:'price',text:'Preço'},
                ]
            }
        },
        methods:{
            removeFromCart: function(produto){
             this.$store.commit('removeFromCart',produto)
            },
            getCart:function(){
                if(this.$cookies.isKey('cart')){
                this.$store.state.cart= this.$cookies.get('cart')
                }
            },
            sortProducts: function(){
                this.$store.state.order = this.selected;
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
        }
      
       
        
        
       
      

    }
</script>

<style scoped>

.cart{
    border: 1px solid;
    max-width:50%;  
    margin:0;
    float:left;
}

.cart-img{
    margin:5px;
}

.list-group .list-group-item{
    border:none;
}

.bi-x-circle{
    cursor:pointer
}

</style>