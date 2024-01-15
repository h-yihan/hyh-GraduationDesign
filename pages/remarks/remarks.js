// pages/remarks/remarks.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pointOut:[
      {
        id:1,
        point_out_1:[
          {
            id:1,
            name:"不打包，封口贴封禁，不打包"
          },
          {
            id:2,
            name:"不打包"
          },
          {
            id:3,
            name:"打包"
          },
          {
            id:4,
            name:"不打包，封口贴封禁，不打包"
          }
        ]
      }
    ],
  //  字数限制
    maxWord: 50,
    currentWord: 0

    
  },
  limitWord:function(e){
    var that = this;
    var value = e.detail.value;
    //解析字符串长度转换成整数。
    var wordLength = parseInt(value.length); 
    if (that.data.maxWord < wordLength) {
      return ;
    }
    that.setData({
      currentWord: wordLength 
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
})