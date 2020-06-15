<template>
  <b-container fluid id="app">
    <b-row>
      <b-col sm="9">
   <Header class="mb-3"></Header>
   <home></home>
      </b-col>
      <b-col sm="3">
        <cart></cart>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import Cart from './components/Cart.vue';

export default {
  name: 'App',
  components: {
    Header,Home,Cart
  },
}
</script>

<style>
#app {
  font-family: Open Sans, Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
