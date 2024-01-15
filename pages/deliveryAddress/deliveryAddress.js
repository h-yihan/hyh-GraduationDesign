// pages/deliveryAddress/deliveryAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    delivery_address:[
      {
        id:1,
        address_city:"贵阳市",
        address_detailed:"贵州省贵阳市花溪区数字经济产业园3号楼2楼阿里创新中心",
        Name:"廖先生",
        Telnumber:"15085968569"
      },
      {
        id:2,
        address_city:"贵阳市",
        address_detailed:"贵州省贵阳市花溪区数字经济产业园3号楼2楼阿里创新中心",
        Name:"廖先生",
        Telnumber:"15085968569"
      },
      {
        id:3,
        address_city:"贵阳市",
        address_detailed:"贵州省贵阳市花溪区数字经济产业园3号楼2楼阿里创新中心",
        Name:"廖先生",
        Telnumber:"15085968569"
      }
    ]
  },
  imageTap(){
    wx.navigateTo({
      url: "/pages/addAddress/addAddress",
    })
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