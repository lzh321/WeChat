<template>
<!--pages/classify/classify.wxml-->
<view class="classify">

<view @tap="goSearchPage" class="search">
  <view class="search-item">
    <icon type="search" size="30rpx"></icon>
    <text style="font-size:30rpx;color:#666;margin-left:10rpx">请输入搜索内容</text>
  </view>
</view>
<navBar></navBar>

</view>
</template>

<script>
import navBar from "../navBar/navBar";

export default {
  data() {
    return {};
  },

  components: {
    navBar
  },
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
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    /**
     * 自定义方法
     */
    goSearchPage() {
      wx.navigateTo({
        url: '../search/search'
      });
    }

  }
};
</script>
<style>
@import "./classify.css";
</style>