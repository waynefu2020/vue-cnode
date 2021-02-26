import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from '@/components/Article.vue';
import PostList from '@/components/PostList.vue';

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      name:'root',
      path: '/',
      components:{
        main: PostList
      }
    },
    {
      name: 'post_content',
      path:'/topic/:id',
      components:{
        main: Article
      }
    }
  ]
})
