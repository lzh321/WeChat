<template>
<!--pages/index/index.wxml-->
<view class="home">
  <swiper class="swiper" indicator-dots autoplay indicator-color="white" circular interval="3000"> 
    <swiper-item class="swiper-item">
      <image src="/static/images/homeImg/banner1.png" class="slide-image"></image>
    </swiper-item>
    <swiper-item class="swiper-item">
      <image src="/static/images/homeImg/banner2.png" class="slide-image"></image>
    </swiper-item>
  </swiper>

  <view class="discount">
    <view class="discount-left">
      <view class="discount-left-text">
        <text class="tc">同城专人配送</text>
        <text class="tc-time">2小时</text>
      </view>
      <image src="/static/images/homeImg/tc.png" class="tc-img"></image>
      </view>
    <view class="discount-right">
      <view class="discount-right-top">
        <view class="item">
          <text class="item-text">每周优惠</text>
          <text class="item-t">特惠鲜花限时抢</text>
        </view>
        <image src="/static/images/homeImg/yh.png" class="item-img"></image>
      </view> 
      <view class="discount-right-bottom">
        <view class="item">
          <text class="item-text2">优惠券领取</text>
          <text class="item-t">领取最新优惠</text>
        </view>
        <image src="/static/images/homeImg/yh2.png" class="item-img"></image>
      </view>   
    </view>
  </view>

  <view>

    <view v-for="(item, index) in list" :key="index">
      <navigator hover-class url="../detailpage/detailpage" class="main" v-if="item.id%2 !== 0">
        <view class="main-item">
          <image :src="item.imgUrl" class="main-img"></image>
        </view>
        <view class="main-describe">
          <text class="name">{{item.name}}</text>
          <text class="aiq">{{item.title}}</text>
          <text class="aiq">{{item.titleEnglish}}</text>
      </view>
      </navigator>
      <navigator hover-class url="../detailpage/detailpage" class="main main2" v-else>
        <view class="main-item2">
          <image :src="item.imgUrl" class="main-img2"></image>
        </view>
        <view class="main-describe">
          <text class="name">{{item.name}}</text>
          <text class="aiq">{{item.title}}</text>
          <text class="aiq">{{item.titleEnglish}}</text>
      </view>
      </navigator>
    </view>

  </view>  
</view>
</template>

<script>

export default {
  data() {
    return {
      list: [{
        "id": 1,
        "name": "玫瑰",
        "title": "有关爱情",
        "titleEnglish": "If u love someone",
        "imgUrl": "/static/images/homeImg/meig.png"
      }, {
        "id": 2,
        "name": "绣球",
        "title": "希望",
        "titleEnglish": "To see the world",
        "imgUrl": "/static/images/homeImg/xq.png"
      }, {
        "id": 3,
        "name": "芍药",
        "title": "殿春",
        "titleEnglish": "Be distressed at parting",
        "imgUrl": "/static/images/homeImg/sy.png"
      }, {
        "id": 4,
        "name": "郁金香",
        "title": "永恒",
        "titleEnglish": "Everlasting love",
        "imgUrl": "/static/images/homeImg/yjx.png"
      }]
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {}
};
</script>
<style>
@import "./index.css";
</style>