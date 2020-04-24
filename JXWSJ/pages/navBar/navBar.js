// pages/navBar/navBar.js
Component({
  data:{
    item:[
     {"title": "全部", "id":0},
      { "title": "七夕鲜花", "id":1},
      { "title": "问候长辈", "id":2},
      { "title": "永生花", "id":3}
    ],
    list:[
      { "imgUrl": "../../images/classifyImg/img-1.jpg", "title":"触摸----薰衣草礼盒：进口薰衣草永生花","price":300.00, "sales":0},
      { "imgUrl": "../../images/classifyImg/img-2.jpg", "title":"十二星座经典七彩·摩羯座----彩虹永生玫瑰:厄瓜多尔进口巨型玫瑰","price":300.00, "sales":0},
      { "imgUrl": "../../images/classifyImg/img-3.jpg", "title":"甜蜜物语----黛安娜粉玫瑰33枝，粉色香水百合3枝，搭配适量粉色勿忘我","price":300.00, "sales":0},
      { "imgUrl": "../../images/classifyImg/img-4.jpg", "title":"芍药","price":300.00, "sales":0},
      { "imgUrl": "../../images/classifyImg/img-5.jpg", "title":"绣球","price":300.00, "sales":0},
      { "imgUrl": "../../images/classifyImg/img-6.jpg", "title":"爱在巴黎----精品玫瑰礼盒:红玫瑰39枝，搭配白色腊梅、尤加利、银叶菊少量","price":300.00, "sales":0},
      { "imgUrl": "../../images/classifyImg/img-7.jpg", "title":"佳期如梦----永生花盒：进口永生玫瑰3枝,永生康乃馨3枝","price":300.00, "sales":0}
    ],
    currentTab: 0,
    currentData:'',
  },
  
  onLoad:function(){
    this.checkCurrent();
  },
  methods:{
    //获取当前滑块的index
    bindchange: function (e) {
      const that = this;
      that.setData({
        currentData: e.detail.current
      })
    },
    //点击切换，滑块index赋值
    checkCurrent: function (e) {
      console.log(e)
      const that = this;

      if (that.data.currentData === e.target.dataset.current) {
        return false;
      } else {

        that.setData({
          currentData: e.target.dataset.current
        })
      }
    },

    upper(e) {
      console.log(e)
    },
  }
})