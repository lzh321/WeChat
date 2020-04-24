// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yzm:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.getRandom()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 自定义函数
   */
  getRandom() {
    var yzm = "";
    var _this = this;
    for (var i = 0; i < 4; i++) {
      var endNum=122;
      var startNum=48;
      var randAS = parseInt(Math.random() * (endNum - startNum + 1) + startNum);
      if ((randAS >= 48 && randAS <= 57) || (randAS >= 65 && randAS <= 90) || (randAS >= 97 && randAS <= 122)) {
        var ch = String.fromCharCode(randAS);
        yzm += ch;
      } else {
        i--;
      }
    }
    _this.setData({
      yzm:yzm
    })
  }
})