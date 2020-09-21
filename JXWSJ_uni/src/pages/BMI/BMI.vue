<template>
  <view class="BMI">
    <text class="title">身体质量指数</text>
    <form @submit="formSubmit">
      <view class="uni-form-item uni-column">
        <label class="lab">请输入你的体重：</label>
        <input type="text" name="weight" placeholder="体重（KG）" v-model="weight">
      </view>
      <view class="uni-form-item uni-column">
        <label class="lab">请输入你的身高</label>
        <input type="text" name="stature" placeholder="身高（M）" v-model="stature">
      </view>
      <view class="uni-btn-v">
        <button class="btn" type="primary" form-type="submit">立即检测</button>
      </view>
    </form>
  </view>
</template>

<script>
export default {
  data() {
    return {
      stature: '',
      weight: ''
    }
  },
  methods: {
    formSubmit () {
      if(this.stature !== '' && this.weight !== ''){
        let BMI = Math.floor(this.weight / Math.pow(this.stature,2) * 100) / 100
        console.log(BMI)
        uni.showLoading({
          title: '计算中···'
        });
      
        if(BMI > 18.5 && BMI < 23.9){
          setTimeout(()=>{
            uni.hideLoading()
            uni.showToast({
              title: '你的身体质量指数为'+ BMI + ',处于正常状态',
              duration: 2000,
              icon: 'none'
            });
          },2000)
          
        }else if(BMI < 18.5){
          setTimeout(()=>{
            uni.hideLoading()
            uni.showToast({
              title: '你的身体质量指数为'+ BMI + ',偏瘦请注意补充营养，适当运动',
              duration: 2000,
              icon: 'none'
            });
          },2000)
        }else if(BMI > 23.9){
          setTimeout(()=>{
            uni.hideLoading()
            uni.showToast({
              title: '你的身体质量指数为'+ BMI + ',偏胖请注意饮食，适当运动',
              duration: 2000,
              icon: 'none'
            });
          },2000)
        }
      }else{
        uni.showToast({
          title: '请输入身高体重！',
          duration: 2000,
          icon: 'none'
        });
      }
      
    }
  }
}
</script>

<style lang="less">
  .BMI{
    padding: 20rpx;
    form{
      overflow: hidden;
    }
    .title{
      padding: 0 0 40rpx;
      font-size: 42rpx;
      font-weight: 600;
      display: inline-block;
    }
    .lab{
      font-size: 30rpx;
      padding: 20rpx 0;
      color: rgb(41, 41, 41);
      display: inline-block;
    }
    .uni-column{
      font-size: 30rpx;
    }
    .btn{
      width:100%;
      height: 100rpx;
      line-height: 100rpx;
      font-size: 40rpx;
      border: none;
      margin: 100rpx 0 0;
    }
  }
</style>