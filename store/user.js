
const state ={
	vuex_token:null,
	vuex_userinfo:{
		
	},
	vuex_name:'123456'
}
const mutations = {
	setToken(state,payload){
		state.vuex_token=payload
	},
	setToken(state,payload){
		state.vuex_name=payload
	},
	
}
const actions ={
		getUserInfo({commit,state}){
			
		}
	}
export default{
	namespaced:true,
	state,
	mutations,
	actions
}