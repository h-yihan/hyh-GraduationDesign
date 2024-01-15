// pages/chooseStore/chooseStore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    map_text: "展开地图",
    map_height: 0,
    map_boolean: true,
    map_image: "./images/down.png",

    deliveryAddress: [{
        id: 1,
        deliveryAddress_1: "广州花都来又来店",
        deliveryAddress_2: "5单/10杯制作中",
        deliveryAddress_3: "新华镇龙珠路39号来又来商 场首层1002铺",
        deliveryAddress_4: "10:00~22:00",
        deliveryAddress_5: "520m",
      },
      {
        id: 2,
        deliveryAddress_1: "广州骏壹万邦广场店",
        deliveryAddress_2: "10单/28杯制作中",
        deliveryAddress_3: " 广东省广州市花都区曙光路81号骏壹万邦广场一层1108单元",
        deliveryAddress_4: "10:00~22:00",
        deliveryAddress_5: "630m",
      }
    ]
  },
  onSearchTap() {
    wx.navigateTo({
      url: '/pages/chooseStore_search/chooseStore_search',
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

  },
  map(e) {
    console.log(111);
    if (this.data.map_boolean) {
      this.setData({
        map_text: "收起地图",
        map_image: "./images/up.png",
        map_height: 488,
        map_boolean: false,
      })
    } else {
      this.setData({
        map_text: "展开地图",
        map_height: 0,
        map_boolean: true,
        map_image: "./images/down.png",
      })
    }
  }
})