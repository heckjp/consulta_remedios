<template>
    <b-row>
        <b-col sm="12" md="3">
        <h1>Games</h1>
        </b-col>
        <b-col sm="12" md="2" offset-md="4">
            <b-form-select>
                <b-form-select-option>Mais populares</b-form-select-option>
            </b-form-select>
        </b-col>
       <b-col sm="12" md="3">
           <div class="cart">
               <h4 class="float-left">Carrinho</h4>
               <p><b-img class="cart-img" :src="require('../assets/cart-icon.svg')" fluid></b-img></p>
                <p>Até o momento seu carrinho está vazio</p>
            </div>
       </b-col> 

    </b-row>
</template>

<script>
    export default {
        
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