// pages/orderPayment/orderPayment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    spxx_js: [{
        id: 1,
        js_1: "",
        js_2: "多肉忙忙甘露",
        js_3: "PLA可降解吸管(推荐),需要配勺(品尝果肉用),冰沙(推荐),",
        js_4: 23,
        js_5: "1",
      },
      {
        id: 2,
        js_1: "",
        js_2: "多肉忙忙甘露",
        js_3: "PLA可降解吸管(推荐),需要配勺(品尝果肉用),冰沙(推荐),",
        js_4: 19,
        js_5: "2",
      }
    ],

    // 商品提交，提示是否更换门店-默认关闭
    isShow: false
  },
  zhifu(e) {
    console.log(111);
    this.setData({
      isShow: !this.data.isShow
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
  // 商品提交，提示是否更换门店-默认关闭

})