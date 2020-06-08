<template>
<!--pages/shoppingCart/shoppingCart.wxml-->
<view class="shopping">
  <image src="/static/images/shopping.png"></image>
  <view class="text">还没有商品哦~</view>
  <navigator class="goShopping" open-type="switchTab" url="../index/index">去购物</navigator>
</view>
</template>

<script>

export default {
  data() {
    return {};
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
  methods: {
    /**
     * 自定义函数
     */
    goShopping() {
      wx.n;
    }

  }
};
</script>
<style>
@import "./shoppingCart.css";
</style>