<template>
	<view>
		<u-navbar :is-back="true" title="嵌套子页面" :custom-back="goback">
			
		</u-navbar>
		<view class="camer" @click="chooseImg">
			<image :src="avatar" mode=""></image>
		</view>
		<view class="">
			{{text}}
		</view>
		<view>
			{{vuex_name}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar:'../../static/logo.png',
				text:'你好',
				vuex_name:this.$store.state.user.vuex_name
			};
		},
		methods:{
			goback(){
				this.$u.route({
					url:'pages/index/mode'
				})
			},
				chooseImg() {
					this.text = uni.getStorageSync('storage_key')
					uni.chooseImage({
						count: 6, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], //从相册选择、摄像头
						success:res=>{
							console.log(JSON.stringify(res.tempFilePaths));
							this.avatar = res.tempFilePaths[0]
						}
					});
				},
				
		}
	}
</script>

<style lang="scss" scoped>
.camer{
	margin: 100rpx;
	width: 100rpx;
	height: 100rpx;
	background-color: #C0C4CC;
	
	image{
		width: 100rpx;
		height: 100rpx;
	}
}
</style>
