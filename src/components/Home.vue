<template>
    <div>
        <b-row>
          <b-col  sm="12" md="4"  v-for="produto in list" :key="produto.id">
              <p><b-img  @mouseover="hover=produto.id" @mouseleave="hover=false" class="produto_imagem" :src="getImgUrl(produto.image)" v-on:click="addToCart(produto)"></b-img></p>
              <p v-if="hover!=produto.id"><span class="produto">{{produto.name}}</span><br>
              <span class="destaque">{{produto.price.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}}</span></p>
              <p v-if="hover==produto.id"><span class="addToCart">Adicionar ao carrinho</span></p>
        </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
    data(){
    return {
      baseURL:window.location,
      produtos:[],
      hover:false,
      cart:null,
    }
  },
  methods:{
    getProdutos:function(){
      this.$http.get(this.baseURL+'/products.json').then((response)=>{
      this.produtos = response.data;
      console.log(this.produtos);
      }).catch(function(err){
        console.log(err);
      })
    },
    getImgUrl(img) {
        return require('../assets/'+img)
    },
    addToCart(produto){
      this.$store.commit('addToCart',produto)
      this.$store.commit('calculateCartValues')
    }
  },

  computed:{
    list: function () {
    return this.lodash.orderBy(this.produtos,this.$store.state.order)
    }
  },
 
  mounted(){
    this.getProdutos();
  },
  
}
</script>

<style scoped>
.produto_imagem{
    background-color:#EEE;
    padding:30px;
    border-radius:5px;

}
.produto_imagem:hover{
  cursor: pointer;
}
.produto{
  font-size:16px;
  font-family: 'Open Sans';
  color:#746A6A;
}
.destaque{
   font-size:16px;
   font-family: 'Open Sans';
  color:#3486E6;
  font-weight: bold;
}
.addToCart{
   font-size:16px;
   font-family: 'Open Sans';
  color:#3487DC;
  font-weight: bold;
}



</style>