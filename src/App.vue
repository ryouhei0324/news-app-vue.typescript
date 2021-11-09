<template>
<div>
  <Home/>
  <HelloWorld/>
</div>

</template>

<script lang="ts">
import Vue from 'vue';
import Home from './views/Home.vue'
import HelloWorld from './components/HelloWorld.vue'

export default Vue.extend({
  name: 'App',
  components:{
    Home,
    HelloWorld
  }


});
</script>
