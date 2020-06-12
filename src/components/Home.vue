<template>
    <div>
        <b-row>
          <b-col class="rounded" sm="12" md="3" v-for="produto in produtos" :key="produto.id">
              <p><b-img  @mouseover="hover=produto.id" @mouseleave="hover=false" class="produto_imagem" :src="getImgUrl(produto.image)" v-on:click="addToCart(produto)"></b-img></p>
              <p v-if="hover!=produto.id">{{produto.name}}<br>
              {{produto.price}}</p>
              <p v-if="hover==produto.id">Adicionar ao carrinho</p>
              
              
        </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
    data(){
    return {
      produtos:{},
      hover:false,
      cart:null,
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
    addToCart(produto){
      this.cart = [];
      if(this.$cookies.isKey('cart')){
      this.cart=JSON.parse(this.$cookies.get('cart'));
        console.log(this.cart,'carrinho');
        if(this.cart!=null){
          if(this.cart.find(x=>x.id==produto.id)){
            console.log('já existe');
          } else{
            this.cart.push(produto);
            console.log(this.cart, 'carrinho else'); 
          }
        } else{
          this.cart = [];
          this.cart.push(produto);
        }
      } else{
        this.cart.push(produto);
      }
      this.$cookies.set('cart',JSON.stringify(this.cart))
      console.log(this.$cookies.get('cart',' carrinho fim do arquivo'));
    }
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
.produto_imagem:hover{
  cursor: pointer;
}
</style>