<template>
  <div id="app">
        <header-vue></header-vue>
        <router-view v-if="index==1" class="center"/>
		<!-- <contact v-if="index==0"></contact> -->
        <footer-vue></footer-vue>
  </div>
</template>

<script>
	import contact from "@/page/contact.vue"
export default {
  name: 'App',
  data(){
	  return{
		  index:1
	  }
  },
  components:{
	  contact
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background: #f5f5f5 none;
}

.center{
  position: relative;
  top: 10px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
</style>
