<template>
	<view class="wrap">
		
		<view class="wrap_button">
			<u-button @click="toNext" style="margin-top: 40rpx;" >点击跳转到全部订单</u-button>
		</view>
		
	</view>
	
	<!-- <view class="content">
		
		<view class="button-demo">
			<u-button :ripple="true">按钮组件演示</u-button>
		</view>
		<view class="link-demo">
			<u-link :color="$u.color['primary']" :under-line="true" href="http://www.uviewui.com">跳转uView文档：www.uviewui.com</u-link>
		</view>
	</view> -->
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				
			}
		},
		onLoad() {

		},
		methods: {
			toNext(){
				uni.setStorageSync('storage_key', 'hello');
				this.$u.route({
					url:'pages/index/mode',
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 100rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 28rpx;
		color: $u-content-color;
	}

	.button-demo {
		margin-top: 80rpx;
	}

	.link-demo {
		margin-top: 80rpx;
	}
	.wrap {
			height: 100vh;
			padding: 40rpx;
			
			.wrap_button{
				margin-top: 40rpx;
			}
		}
		
</style>
