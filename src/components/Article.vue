<template>
  <div class="article">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif">
    </div>
    <div v-else>
      <div class="topic_title">
        <ul>
          <li>发布于：{{ post.create_at | formatDate }}</li>
          <li>作者： {{ post.author.loginname }}</li>
          <li>{{ post.visit_count }} 次浏览</li>
          <li>最后一次编辑是 {{ post.last_reply_at | formatDate }} 天前</li>
          <li>来自 {{ post | tabFormatter }}</li>
        </ul>
        <div v-html="post.content" class="topic_content"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Article',
  data() {
    return {
      isLoading: false,
      post: {} //文章所有内容
    };
  },
  methods:{
    getArticleData(){
      this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
      .then(res=>{
        if(res.data.success === true){
          this.post = res.data.data
        }
      })
      .catch(function (err){
        console.log(err);
      })
    },
    beforeMount(){
      this.isLoading = true;
      this.getArticleData();
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}

ul {
  list-style: none;
}
</style>