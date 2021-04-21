import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);



// 此处为演示vuex使用，非uView的功能部分
import store from '@/store';

// 引入uView提供的对vuex的简写法文件
let vuexStore = require('@/store/$u.mixin.js');
Vue.mixin(vuexStore);

// 引入axios
import axios from 'static/utils/request.js';
Vue.prototype.$axios = axios;

// 适配器
axios.defaults.adapter = function (config) {
    return new Promise((resolve, reject) => {
		var settle = require('axios/lib/core/settle');
		var buildURL = require('axios/lib/helpers/buildURL');
		uni.request({
			method: config.method.toUpperCase(),
			url: buildURL(config.url, config.params, config.paramsSerializer),
			header: config.headers,
			data: config.data,
			dataType: config.dataType,
			responseType: config.responseType,
			sslVerify: config.sslVerify,
			complete:function complete(response){
				response = {
				  data: response.data,
				  status: response.statusCode,
				  errMsg: response.errMsg,
				  header: response.header,
				  config: config
				};
				
				settle(resolve, reject, response);
			}
		})
    })
} 

const app = new Vue({
	store,
	...App
})
// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
// import httpInterceptor from '@/common/http.interceptor.js';
// Vue.use(httpInterceptor, app);

// http接口API抽离，免于写url或者一些固定的参数
// import httpApi from '@/common/http.api.js';
// Vue.use(httpApi, app);

app.$mount()
