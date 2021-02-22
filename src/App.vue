<template>
  <div id="app">
    <Header/>
    <div class="main">

    </div>
    <PostList/>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import PostList from "@/components/PostList";
  export default {
    name: "app",
    components:{
      Header,PostList
    }
  }
</script>

<style>

</style>
