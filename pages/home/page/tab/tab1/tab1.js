// pages/home/page/tab/tab1/tab1.js
Component({
  //获取父组件传递的参数
  properties:{
    sonData:{
      type:Number,//父组件传递的参数类型
      value:true//看不懂
    }
  },

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log(22222)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
   /**
   * 组件的方法列表
   */
  methods: {
    // 注册事件
    //第二步：事件绑定
    clickOne: function (e) {
      console.log(e);
      console.log(this.data);
      var index = 0
      // 注册点击事件传给父组件
      /*
       *第一步：通过自定义事件的方式通知父组件
       triggerEvent 指定事件名、detail对象和事件选项 - 通知父组件
        fatherTab自定义事件名
      */
      this.triggerEvent('fatherTab', { activeIndex: index })
    }
  }
})