
//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    winHeightScroll:0,
    heightHome:100
  },
  //监听滑动条
  scrollTopFun(e){
    console.log("daoding")
    let that = this;
      that.setData({
        winHeightScroll:"auto"
      })
  },
  //下拉刷新触发
  onPullDownRefresh: function() {
    let that = this;
    that.setData({
      winHeightScroll:that.data.winHeight
    })
  },
  //禁止标签左右滑动
  stopTouchMove: function() {
    return false;
    },
  onLoad: function() {
    var that = this;
    /**
     * 获取系统信息
     */
    wx.getSystemInfo( {
      success: function( res ) {
    //获取小程序高度转换为rpx
    let clientHeight = res.windowHeight;
    let clientWidth = res.windowWidth;
    let changeHeight = 750 / clientWidth;
    let height = clientHeight * changeHeight;
        that.setData( {
          winWidth: res.windowWidth,
          winHeight: height,
          winHeightScroll: height,
        });
      }
 
    });
  },
  //左右滑动滑动切换tab
  // bindChange: function( e ) {
  //   var that = this;
  //   that.setData( { currentTab: e.detail.current });
  // },
  //点击tab切换
  clickSwiper: function( e ) {
    var that = this;
    if( this.data.currentTab === e.target.dataset.current ) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
    // 子组传到父组件的触发事件
    // 第四步：在回调函数的事件对象中进行数据接收
    tabOne: function (e) {
      // 接受子组件发送的数据  e
      // 设置数据
      console.log("one");
    console.log(e.detail.activeIndex);
    },
     // 子组传到父组件的触发事件
    // 第四步：在回调函数的事件对象中进行数据接收
    tabThree: function (e) {
      // 接受子组件发送的数据  e
      // 设置数据
      console.log("three");
      console.log(e.detail.activeIndex);
    }
})