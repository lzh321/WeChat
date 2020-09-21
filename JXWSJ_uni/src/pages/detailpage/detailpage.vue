<template>
<!--pages/detailpage/detailpage.wxml-->
<view>
  <text>{{title}}</text>
</view>
</template>

<script>
const app = getApp();
export default {
  data() {
    return {
      title: ''
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(){

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(app.globalData.userInfo)
    if(!app.globalData.userInfo){
      this.title = '未登录'
      uni.showModal({
        title: '提示',
        content: '未登录',
        success: function (res) {
            if (res.confirm) {
              uni.navigateTo({url: '../login/login'})
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
        }
      })
    }else{
      this.title = '登录成功'
    }
  },

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
  }
};
</script>
<style>
@import "./detailpage.css";
</style>