<template>
	<view>
		<view class="wrap">
			<view class="top">
				<u-navbar :is-back="true" title="全部订单" :custom-back="goback"></u-navbar>
			</view>
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#f29100" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="order" v-for="(res, index) in orderList[0]" :key="res.id">
								<view class="top">
									<view class="left">
										<u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon>
										<view class="store">{{ res.store }}</view>
										<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
									</view>
									<view class="right">{{ res.deal }}</view>
								</view>
								<view class="item" v-for="(item, index) in res.goodsList" :key="index">
									<view class="left"><image :src="item.goodsUrl" mode="aspectFill"></image></view>
									<view class="content">
										<view class="title u-line-2">{{ item.title }}</view>
										<view class="type">创建时间： {{ item.add }}</view>
										<view class="type">锁单时间： {{ item.sure }}</view>
										<view class="delivery-time">
											支付时间 ：
											<view class="intext">
												 {{ item.deliveryTime }}
											</view>
										</view>
									</view>
									<view class="right">
										<view class="price">
											￥{{ priceInt(item.price) }}
											<text class="decimal">.{{ priceDecimal(item.price) }}</text>
										</view>
										<view class="number">x{{ item.number }}</view>
									</view>
								</view>
								<view class="total">
									服务费：
									<text class="total-price">
										{{ priceInt(totalPrice(res.goodsList)) }}积分
									</text>
								</view>
								<view class="bottom">
									<view class="exchange btn">再来一单</view>
									<view class="evaluate btn">分享得500积分</view>
								</view>
							</view>
							<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="order" v-for="(res, index) in orderList[1]" :key="res.id">
								<view class="top">
									<view class="left">
										<u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon>
										<view class="store">{{ res.store }}</view>
										<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
									</view>
									<view class="right">{{ res.deal }}</view>
								</view>
								<view class="item" v-for="(item, index) in res.goodsList" :key="index">
									<view class="left"><image :src="item.goodsUrl" mode="aspectFill"></image></view>
									<view class="content">
										<view class="title u-line-2">{{ item.title }}</view>
										<view class="type">创建时间： {{ item.add }}</view>
										<view class="type">锁单时间： {{ item.sure }}</view>
										<view class="delivery-time">
											支付时间 ：
											<view class="intext">
												 {{ item.deliveryTime }}
											</view>
										</view>
									</view>
									<view class="right">
										<view class="price">
											￥{{ priceInt(item.price) }}
											<text class="decimal">.{{ priceDecimal(item.price) }}</text>
										</view>
										<view class="number">x{{ item.number }}</view>
									</view>
								</view>
								<view class="total">
									服务费：
									<text class="total-price">
										{{ priceInt(totalPrice(res.goodsList)) }}积分
									</text>
								</view>
								<view class="bottom">
									<view class="exchange btn">再来一单</view>
									<view class="evaluate btn">分享得500积分</view>
								</view>
							</view>
							<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
							<view>
								<view class="centre">
									<image src="https://cdn.uviewui.com/uview/template/taobao-order.png" mode=""></image>
									<view class="explain">
										您还没有相关的订单
										<view class="tips">可以去看看有那些想买的</view>
									</view>
									<view class="btn">随便逛逛</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="order" v-for="(res, index) in orderList[3]" :key="res.id">
								<view class="top">
									<view class="left">
										<u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon>
										<view class="store">{{ res.store }}</view>
										<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
									</view>
									<view class="right">{{ res.deal }}</view>
								</view>
								<view class="item" v-for="(item, index) in res.goodsList" :key="index">
									<view class="left"><image :src="item.goodsUrl" mode="aspectFill"></image></view>
									<view class="content">
										<view class="title u-line-2">{{ item.title }}</view>
										<view class="type">创建时间： {{ item.add }}</view>
										<view class="type">锁单时间： {{ item.sure }}</view>
										<view class="delivery-time">
											支付时间 ：
											<view class="intext">
												 {{ item.deliveryTime }}
											</view>
										</view>
									</view>
									<view class="right">
										<view class="price">
											￥{{ priceInt(item.price) }}
											<text class="decimal">.{{ priceDecimal(item.price) }}</text>
										</view>
										<view class="number">x{{ item.number }}</view>
									</view>
								</view>
								<view class="total">
									服务费：
									<text class="total-price">
										{{ priceInt(totalPrice(res.goodsList)) }}积分
									</text>
								</view>
								<view class="bottom">
									<view class="exchange btn">再来一单</view>
									<view class="evaluate btn">分享得500积分</view>
								</view>
							</view>
							<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="order" v-for="(res, index) in orderList[4]" :key="res.id">
								<view class="top">
									<view class="left">
										<u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon>
										<view class="store">{{ res.store }}</view>
										<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
									</view>
									<view class="right">{{ res.deal }}</view>
								</view>
								<view class="item" v-for="(item, index) in res.goodsList" :key="index">
									<view class="left"><image :src="item.goodsUrl" mode="aspectFill"></image></view>
									<view class="content">
										<view class="title u-line-2">{{ item.title }}</view>
										<view class="type">创建时间： {{ item.add }}</view>
										<view class="type">锁单时间： {{ item.sure }}</view>
										<view class="delivery-time">
											支付时间 ：
											<view class="intext">
												 {{ item.deliveryTime }}
											</view>
										</view>
									</view>
									<view class="right">
										<view class="price">
											￥{{ priceInt(item.price) }}
											<text class="decimal">.{{ priceDecimal(item.price) }}</text>
										</view>
										<view class="number">x{{ item.number }}</view>
									</view>
								</view>
								<view class="total">
									服务费：
									<text class="total-price">
										{{ priceInt(totalPrice(res.goodsList)) }}积分
									</text>
								</view>
								<view class="bottom">
									<view class="exchange btn">再来一单</view>
									<view class="evaluate btn">分享得500积分</view>
								</view>
							</view>
							<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			orderList: [[], [], [], [],[]],
			dataList: [
				{
					id: 1,
					store: 'cdf会员购北京',
					deal: '已结算',
					goodsList: [
						{
							goodsUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3654001177,2033274116&fm=26&gp=0.jpg',
							title: '肌肤之玥光凝前霜37MLx2',
							add: '2020-09-01 17:22:01',
							sure:'2020-09-01 17:22:01',
							deliveryTime: '去支付订单 >',
							price: '178.00',
							number: 2
						}
					]
				},
				{
					id: 2,
					store: 'cdf会员购北京',
					deal: '已结算',
					goodsList: [
						{
							goodsUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3654001177,2033274116&fm=26&gp=0.jpg',
							title: '肌肤之玥光凝前霜37MLx2',
							add: '2020-09-01 17:22:01',
							sure:'2020-09-01 17:22:01',
							deliveryTime: '去支付订单',
							price: '178.00',
							number: 2
						}
					]
				},
				{
					id: 3,
					store: 'cdf会员购北京',
					deal: '取消下单',
					goodsList: [
						{
							goodsUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3654001177,2033274116&fm=26&gp=0.jpg',
							title: '肌肤之玥光凝前霜37MLx2',
							add: '2020-09-01 17:22:01',
							sure:'2020-09-01 17:22:01',
							deliveryTime: '去支付订单 >',
							price: '178.00',
							number: 2
						}
					]
				},
				{
					id: 4,
					store: 'cdf会员购北京',
					deal: '已结算',
					goodsList: [
						{
							goodsUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3654001177,2033274116&fm=26&gp=0.jpg',
							title: '肌肤之玥光凝前霜37MLx2',
							add: '2020-09-01 17:22:01',
							sure:'2020-09-01 17:22:01',
							deliveryTime: '去支付订单 >',
							price: '178.00',
							number: 2
						}
					]
				},
				{
					id: 5,
					store: 'cdf会员购北京',
					deal: '已支付',
					goodsList: [
						{
							goodsUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3654001177,2033274116&fm=26&gp=0.jpg',
							title: '肌肤之玥光凝前霜37MLx2',
							add: '2020-09-01 17:22:01',
							sure:'2020-09-01 17:22:01',
							deliveryTime: '去支付订单 >',
							price: '178.00',
							number: 2
						}
					]
				},
				{
					id: 6,
					store: 'cdf会员购北京',
					deal: '已作废',
					goodsList: [
						{
							goodsUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3654001177,2033274116&fm=26&gp=0.jpg',
							title: '肌肤之玥光凝前霜37MLx2',
							add: '2020-09-01 17:22:01',
							sure:'2020-09-01 17:22:01',
							deliveryTime: '去支付订单 >',
							price: '178.00',
							number: 2
						}
					]
				}
			],
			list: [
				{
					name: '全部'
				},
				{
					name: '待下单'
				},
				{
					name: '待结算',
					count: 1
				},
				{
					name: '已结算'
				},
				{
					name:'已作废',
				}
			],
			current: 0,
			swiperCurrent: 0,
			tabsHeight: 0,
			dx: 0,
			loadStatus: ['loadmore','loadmore','loadmore','loadmore'],
		};
	},
	onLoad() {
		this.getOrderList(0);
		this.getOrderList(1);
		this.getOrderList(3);
		this.getOrderList(4)
	},
	computed: {
		// 价格小数
		priceDecimal() {
			return val => {
				if (val !== parseInt(val)) return val.slice(-2);
				else return '00';
			};
		},
		// 价格整数
		priceInt() {
			return val => {
				if (val !== parseInt(val)) return val.split('.')[0];
				else return val;
			};
		}
	},
	methods: {
		//返回上一层
		goback(){
			this.$u.route({
				type:'back'
			})
		},
		reachBottom() {
			// 此tab为空数据
			if(this.current != 2) {
				this.loadStatus.splice(this.current,1,"loading")
				setTimeout(() => {
					this.getOrderList(this.current);
				}, 1200);
			}
		},
		// 页面数据
		getOrderList(idx) {
			for(let i = 0; i < 5; i++) {
				let index = this.$u.random(0, this.dataList.length - 1);
				let data = JSON.parse(JSON.stringify(this.dataList[index]));
				data.id = this.$u.guid();
				this.orderList[idx].push(data);
			}
			this.loadStatus.splice(this.current,1,"loadmore")
		},
		// 总价
		totalPrice(item) {
			let price = 0;
			item.map(val => {
				price += parseFloat(val.price);
			});
			return price.toFixed(2);
		},
		// 总件数
		totalNum(item) {
			let num = 0;
			item.map(val => {
				num += val.number;
			});
			return num;
		},
		// tab栏切换
		change(index) {
			this.swiperCurrent = index;
			this.getOrderList(index);
		},
		transition({ detail: { dx } }) {
			this.$refs.tabs.setDx(dx);
		},
		animationfinish({ detail: { current } }) {
			this.$refs.tabs.setFinishCurrent(current);
			this.swiperCurrent = current;
			this.current = current;
		}
	}
};
</script>

<style>
/* #ifndef H5 */
page {
	height: 100%;
	background-color: #f2f2f2;
}
/* #endif */
</style>

<style lang="scss" scoped>
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.right {
			color: $u-type-warning-dark;
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 150rpx;
				height: 150rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}
			.delivery-time {
				
				font-size: 24rpx;
				.intext{
					display: inline-block;
					color:#EA7B65;
					padding:10rpx 10rpx;
					border-radius: 32rpx;
					line-height: 16rpx;
					background:#FFE5DC;
				}
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 22rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		margin-left: 150rpx;
		padding: 0 10rpx;
		justify-content: space-between;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 260rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
.centre {
	text-align: center;
	margin: 200rpx auto;
	font-size: 32rpx;
	image {
		width: 164rpx;
		height: 164rpx;
		border-radius: 50%;
		margin-bottom: 20rpx;
	}
	.tips {
		font-size: 24rpx;
		color: #999999;
		margin-top: 20rpx;
	}
	.btn {
		margin: 80rpx auto;
		width: 200rpx;
		border-radius: 32rpx;
		line-height: 64rpx;
		color: #ffffff;
		font-size: 26rpx;
		background: linear-gradient(270deg, rgba(249, 116, 90, 1) 0%, rgba(255, 158, 1, 1) 100%);
	}
}
.wrap {
	display: flex;
	flex-direction: column;
	height: calc(100vh - var(--window-top));
	width: 100%;
}
.swiper-box {
	flex: 1;
}
.swiper-item {
	height: 100%;
}
</style>
