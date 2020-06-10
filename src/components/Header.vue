<template>
    <b-row>
        <b-col sm="12" md="3">
        <h1>Games</h1>
        </b-col>
        <b-col sm="12" md="3" offset-md="3">
            <b-form-select>
                <b-form-select-option>Mais populares</b-form-select-option>
            </b-form-select>
        </b-col>
       <b-col sm="12" md="3">
           <div class="cart">
               <h4 class="float-left">Carrinho</h4>
               <p><b-icon icon="cart-plus" font-scale="3"></b-icon></p>
                <p>Até o momento seu carrinho está vazio</p>
            </div>
       </b-col> 

    </b-row>
</template>

<script>
    export default {
        name:'Header'
    }
</script>

<style scoped>

</style>