<template>
    <div>
        <b-row>
          <b-col class="rounded" sm="12" md="4" v-for="produto in produtos" :key="produto.id">
              <p><b-img  @mouseover="hover=produto.id" @mouseleave="hover=false" class="produto_imagem" :src="getImgUrl(produto.image)" v-on:click="addToCart(produto)"></b-img></p>
              <p v-if="hover!=produto.id">{{produto.name}}<br>
              {{produto.price.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}}</p>
              <p v-if="hover==produto.id">Adicionar ao carrinho</p>
        </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
    data(){
    return {
      baseURL:window.location.origin,
      produtos:{},
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
    }
  },
 
  mounted(){
    this.getProdutos();
  },
  
}
</script>

<style scoped>
.produto_imagem{
    background-color:#CCC;
    padding:10px;
}
.produto_imagem:hover{
  cursor: pointer;
}


</style>