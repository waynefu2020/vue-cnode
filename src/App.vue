<template>
  <div id="app">
    <Header/>
    <div class="main">
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  export default {
    name: "app",
    components:{
      Header
    }
  }
</script>

<style>
  .main{
    width: 80%;
    margin: 0 auto;
  }
</style>
