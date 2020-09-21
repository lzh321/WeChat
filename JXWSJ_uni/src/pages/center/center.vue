<template>
<!--pages/center/center.wxml-->
<view class="center">
  <view class="head">
    <image src="/static/images/centerImg/bj.png" class="bj"></image>
    <view class="name">
      <image class="head-img" src="/static/images/centerImg/hand.png" mode="cover" v-if="!hasUserInfo && canIUse"></image>
      <button class="btn" v-if="!hasUserInfo && canIUse" open-type="getUserInfo" @getuserinfo="getUserInfo">点击登录</button>
      <block v-else>
        <image class="head-img" :src="userInfo.avatarUrl" mode="cover"></image>
        <text class="head-name">{{userInfo.nickName}}</text>
      </block>
    </view>
  </view>
  <view v-for="(item, index) in list" :key="index" class="list">
    <view class="list-title">{{item.name}}</view>
    <view class="list-item">
      <navigator v-for="(item, index2) in item.myOrder" :key="index2" hover-class url="/" class="item">
        <text :class="'iconfont ' + item.icon + ' icon'"></text>
        <text class="text">{{item.title}}</text>
      </navigator>
    </view>
  </view>

</view>
</template>

<script>
// pages/center/center.js
const app = getApp();

export default {
  data() {
    return {
      userInfo: {},
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      list: [{
        "name": "我的订单",
        "myOrder": [{
          "id": 0,
          "title": "待付款",
          "icon": "icon-daifukuan"
        }, {
          "id": 1,
          "title": "待发货",
          "icon": "icon-daifahuo"
        }, {
          "id": 2,
          "title": "待收货",
          "icon": "icon-daishouhuo"
        }, {
          "id": 3,
          "title": "待评价",
          "icon": "icon-pingjia"
        }]
      }, {
        "name": "我的工具",
        "myOrder": [{
          "id": 1,
          "title": "发货地址",
          "icon": "icon-dizhi"
        }, {
          "id": 2,
          "title": "购物车",
          "icon": "icon-tubiaozhizuomoban"
        }, {
          "id": 3,
          "title": "系统通知",
          "icon": "icon-tongzhi"
        }]
      }, {
        "name": "会员中心",
        "myOrder": [{
          "id": 0,
          "title": "会员卡",
          "icon": "icon-member_icon"
        }, {
          "id": 1,
          "title": "优惠券",
          "icon": "icon-youhuiquan"
        }, {
          "id": 2,
          "title": "积分",
          "icon": "icon-jifen"
        }, {
          "id": 3,
          "title": "储值金",
          "icon": "icon-yue"
        }]
      }],
      hasUserInfo: false
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },

  onShow: function () {
    if (app.globalData.userInfo) {
      console.log(1)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      console.log(2)
      app.globalData.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      console.log(3)
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    /**
     * 自定义函数
     */
    getUserInfo: function (e) {
      console.log(e);
      app.globalData.userInfo = e.detail.userInfo;
      wx.setStorageSync('token', e.detail.userInfo.nickName);
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      });
    },
    globalData: function () {
      this.setData({
        userInfo: {}
      });
    }
  }
};
</script>
<style>
@import "./center.css";
</style>