<template>
<!--pages/login/login.wxml-->
<view class="login">

  <input type="text" auto-focus placeholder="请输入账号" class="input name"/>
  <input type="text" password placeholder="请输入密码" class="input pwd"/>
  <view class="yz">
  <input type="text" placeholder="请输入验证码" class="inputyzm"/>
  <text class="yzm" @tap="getRandom">{{yzm}}</text>
  </view>  
  <button class="btn">登录</button>
  <button class="btn"  open-type="getUserInfo" @getuserinfo="getUserInfo">微信授权登录</button>
  <navigator class="goregister" hover-class url="../register/register">立即注册...</navigator>
</view>
</template>

<script>
const app = getApp();
export default {
  data() {
    return {
      yzm: ''
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
  onReady: function () {
    this.getRandom();
  },

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
    getRandom() {
      var yzm = "";

      var _this = this;

      for (var i = 0; i < 4; i++) {
        var endNum = 122;
        var startNum = 48;
        var randAS = parseInt(Math.random() * (endNum - startNum + 1) + startNum);

        if (randAS >= 48 && randAS <= 57 || randAS >= 65 && randAS <= 90 || randAS >= 97 && randAS <= 122) {
          var ch = String.fromCharCode(randAS);
          yzm += ch;
        } else {
          i--;
        }
      }

      _this.setData({
        yzm: yzm
      });
    },
    getUserInfo: function (e) {
      console.log(e);
      app.globalData.userInfo = e.detail.userInfo;
      wx.setStorageSync('token', e.detail.userInfo.nickName);
      uni.navigateBack({delta:1})
    },
  }
};
</script>
<style>
@import "./login.css";
</style>