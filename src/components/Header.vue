<template>
    <b-row>
        <b-col sm="12" md="4" offset-md="1">
        <h1 class="title">Games</h1>
        </b-col>
        <b-col sm="12" md="3" offset-md="4">
            <b-form-select v-model="selected" :options="options" @change="sortProducts()"></b-form-select>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        data(){
            return{
                selected:null,
                options:[
                    {value:null,text:'Ordenar por',disabled:'disabled'},
                    {value:'score',text:'Mais populares'},
                    {value:'name',text:'Ordem alfabética'},
                    {value:'price',text:'Preço'},
                ],
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
            this.$store.commit('calculateCartValues');
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
.title{
    font-size:48px;
    font-family: 'Open Sans';
    font-weight:600;
    float: left;
}

</style>