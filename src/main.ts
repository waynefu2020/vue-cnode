import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Axios from 'axios';

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

Vue.filter('formatDate', function (str: string | number) {
    if (!str) { return '';}
    const date = new Date(str);
    const time = new Date().getTime() - date.getTime();
    if (time < 0) {
        return '';
    } else if (time / 1000 < 30) {
        return '刚刚';
    } else if (time / 1000 < 60) {
        return parseInt(String(time / 1000)) + '秒前';
    } else if (time / 60000 < 60) {
        return parseInt(String(time / 60000)) + '分钟前';
    } else if (time / 3600000 < 24) {
        return parseInt(String(time / 3600000)) + '小时前';
    } else if (time / 86400000 < 31) {
        return parseInt(String(time / 86400000)) + '天前';
    } else if (time / 2629800000 < 12) {
        return parseInt(String(time / 2629800000)) + '月前';
    } else {
        return parseInt(String(time / 31557600000)) + '年前';
    }
});

// 处理不同模块类型的文字
Vue.filter('tabFormatter', function (post: any){
    if(post.good === true){
        return '精华'
    } else if(post.top === true){
        return '置顶'
    } else if(post.tab === 'ask'){
        return '问答'
    }else if(post.tab === 'share'){
        return '分享'
    }else {
        return '招聘'
    }
})
