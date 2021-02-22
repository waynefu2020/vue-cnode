<template>
  <div class="PostList">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif">
    </div>
    <div>
      <ul>
        <li v-for="post in posts" :key="post">
          <img :src="post.author.avatar_url" alt="">
          <span>
            <span class="reply_count">回复：{{post.reply_count}}</span>
            /浏览：{{post.visit_count}}
          </span>
          <span :class="[{put_good:(post.good === true), put_top:(post.top === true),
          'topiclist-tab':(post.good != true && put_top != true)}]">
<!--帖子分类，如果帖子是精华就显示put_good...-->
            <span>{{ post | tabFormatter }}</span>
          </span>
          <span>{{post.title}}</span>
          <span class="last_reply">{{post.last_reply_at | formatDate }}</span>
<!--          头像:author.avatar_url-->
<!--          回复量/浏览量：reply_count/visit_count-->
<!--          标题：title-->
<!--          时间：last_reply_at-->
<!--          帖子分类：top/good/tab:ask、share、job/-->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: "PostList",
    data(){
      return {
        isLoading: false,
        posts:[]
      }
    },
    methods:{
      getData(){
        this.$http.get('https://cnodejs.org/api/v1/topics',{
          page:1,
          limit:20
        })
        .then(res=>{
          this.isLoading = false;
          this.posts = res.data.data;
        })
        .catch(function (err){
          //处理返回失败后的问题
          console.log(err);
        })
      }
    },
    beforeMount() {
      this.isLoading = true;
      this.getData()
    }
  }
</script>

<style scoped>
.posts{
  margin-top: 10px;
}
  img{
    width: 30px;
  }
  ul{
    list-style: none;
  }
</style>