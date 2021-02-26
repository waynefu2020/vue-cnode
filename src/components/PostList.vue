<template>
  <div class="PostList">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif">
    </div>
    <div class="posts" v-else>
      <ul>
        <li>
          <div class="top_bar">
            <span>全部</span>
            <span>精华</span>
            <span>分享</span>
            <span>问答</span>
            <span>招聘</span>
          </div>
        </li>
        <li v-for="post in posts" :key="post">
          <!--头像-->
          <img :src="post.author.avatar_url" alt="">
          <span class="all_count">
            <span class="reply_count">{{post.reply_count}}</span>/{{post.visit_count}}
          </span>
          <span :class="[{put_good:(post.good === true), put_top:(post.top === true),
          'topiclist-tab':(post.good != true && put_top != true)}]">
            <!--帖子分类-->
            <span>{{ post | tabFormatter }}</span>
          </span>
          <!--标题-->
          <router-link :to="{
            name:'post_content',
            params:{
              id:post.id
            }
          }">
            <span>
              {{post.title}}
            </span>
          </router-link>
          <span class="last_reply">{{post.last_reply_at | formatDate }}</span>
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
.loading{
  text-align: center;
  padding-top: 300px;
}
a{text-decoration: none; color: black;}
a:hover{ text-decoration: underline;}
.top_bar{
  height: 40px;
  background-color: #f6f6f6;
}
.top_bar span{
  font-size: 14px;
  cursor: pointer;
  color: #8EBA39;
  line-height: 40px;
  margin: 0 10px;
}
.top_bar span:hover{
  color: #9e78c0;
}
.posts{
  margin-top: 10px;
}
.PostList img{
  height: 30px;
  width: 30px;
  vertical-align: middle;
}
ul{
  list-style: none;
  width: 100%;
  margin: 0 auto;
  max-width: 1344px;
}
ul li:not(:first-child){
  border-top: 1px solid #f0f0f0;
  padding: 9px;
  font-size: 15px;
  font-weight: 400;
  background-color: white;
  color: #333;
}
li:not(:first-child):hover{
  background: #f5f5f5;
}
li:last-child:hover{
  background: white;
}
li span{
  line-height: 30px;
}
.all_count{
  width: 70px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
}
.reply_count{
  color: #9e78c0;
  font-size: 14px;
}
.put_good, .put_top{
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin-right: 10px;
}
.topiclist-tab{
  background-color: #e5e5e5;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  font-size: 12px;
  margin-right: 10px;
}
.last_reply{
  text-align: right;
  min-width: 50px;
  display: inline-block;
  float: right;
  white-space: nowrap;
  font-size: 12px;
  color: #778087;
}
</style>