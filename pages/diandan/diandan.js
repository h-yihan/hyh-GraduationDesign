// pages/diandan/diandan.js
import {
  spxxList
} from '../../data/diandan-spxx.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    add_text: "更多",
    add_height: 0,
    add_boolean: true,
    add_image: "/pages/chooseStore/images/down.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      spxxList
    })
  },
  onTap() {
    console.log(12);
    if (this.data.add_boolean) {
      this.setData({
        add_text: "收起",
        add_image: "/pages/chooseStore/images/up.png",
        add_height: 100,
        add_boolean: false,
      })
    } else {
      this.setData({
        add_text: "更多",
        add_height: 0,
        add_boolean: true,
        add_image: "/pages/chooseStore/images/down.png",
      })
    }
  },
  addressTap() {
    wx.navigateTo({
      url: "/pages/chooseStore/chooseStore"
    })
  },
  onOrderPayment(){
  wx.navigateTo({
    url: '/pages/orderPayment/orderPayment',
  })
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

  },
  
})