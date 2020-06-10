<template>
    <div>
        <b-row>
          <b-col class="rounded" sm="12" md="3" v-for="produto in produtos" :key="produto.id">
              <p><b-img  @mouseover="hover=produto.id" @mouseleave="hover=false" class="produto_imagem" :src="getImgUrl(produto.image)"></b-img></p>
              <p v-if="hover!=produto.id">{{produto.name}}<br>
              {{produto.price}}</p>
              <p v-if="hover==produto.id"><b-button variant="primary">Adicionar ao carrinho</b-button></p>
              
              
        </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
    data(){
    return {
      produtos:{},
      hover:false
    }
  },
  methods:{
    getProdutos:function(){
    this.$http.get('http://localhost:8080/products.json').then((response)=>{
     this.produtos = response.data;
      console.log(this.produtos);
    }).catch(function(err){
      console.log(err);
    })
    },
    getImgUrl(img) {
        return require('../assets/'+img)
    },
  },
  mounted(){
    this.getProdutos();
  }
}
</script>

<style scoped>
.produto_imagem{
    background-color:#CCC;
    padding:10px;
}
</style>