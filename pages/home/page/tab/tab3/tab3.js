// pages/home/page/tab/tab3/tab3.js
const app=getApp();
Component({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null,
    hasUserInfo:false,
    canIUse:wx.canIUse('button.open-type.getUserInfo')
  },
  attached: function(){
    if (app.globalData.userInfo) {
      this.setData({
        userInfo:app.globalData.userInfo,
        hasUserInfo:true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
    /**
   * 组件的方法列表
   */
  methods: {
    aaa:function(){
      wx.showModal({
        title: '提示',
        content: '这是一个模态弹窗',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    getUserInfo:function(e){
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    },
    // 注册事件
    //第二步：事件绑定
    clickThree: function (e) {
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