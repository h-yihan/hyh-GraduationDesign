// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [{
        id: 1,
        bhsx_box: "https://heyihan.codedemo.vip/goodsAd-prcture.jpg",
        bhsx_spxx: "",
        picture: "https://heyihan.codedemo.vip/picture.jpg",
        introduce_1: "2021喜茶饼家喜X…",
        introduce_2: "现货发售",
        introduce_3: "288",
        introduce_4: "立即购买",
      },
      {
        id: 2,
        bhsx_box: "https://heyihan.codedemo.vip/goodsAd-prcture.jpg",
        bhsx_spxx: "",
        picture: "https://heyihan.codedemo.vip/picture.jpg",
        introduce_1: "2021喜茶饼家喜X…",
        introduce_2: "现货发售",
        introduce_3: "288",
        introduce_4: "立即购买",
      },
      {
        id: 3,
        bhsx_box: "https://heyihan.codedemo.vip/goodsAd-prcture.jpg",
        bhsx_spxx: "",
        picture: "https://heyihan.codedemo.vip/picture.jpg",
        introduce_1: "2021喜茶饼家喜X…",
        introduce_2: "现货发售",
        introduce_3: "288",
        introduce_4: "立即购买",
      }
    ],
    like: [{
        id: 1,
        img: "https://heyihan.codedemo.vip/goodsLike.png",
        goods_name: "喜茶 4口味混合装 无糖…",
        goods_price: "¥ 66",
        sale_num: "3766人已购买"
      },
      {
        id: 2,
        img: "https://heyihan.codedemo.vip/goodsLike.png",
        goods_name: "喜茶 4口味混合装 无糖…",
        goods_price: "¥ 66",
        sale_num: "3766人已购买"
      },
      {
        id: 3,
        img: "https://heyihan.codedemo.vip/goodsLike.png",
        goods_name: "喜茶 4口味混合装 无糖…",
        goods_price: "¥ 66",
        sale_num: "3766人已购买"
      },
      {
        id: 3,
        img: "https://heyihan.codedemo.vip/goodsLike.png",
        goods_name: "喜茶 4口味混合装 无糖…",
        goods_price: "¥ 66",
        sale_num: "3766人已购买"
      },
      {
        id: 3,
        img: "https://heyihan.codedemo.vip/goodsLike.png",
        goods_name: "喜茶 4口味混合装 无糖…",
        goods_price: "¥ 66",
        sale_num: "3766人已购买"
      },
      {
        id: 3,
        img: "https://heyihan.codedemo.vip/goodsLike.png",
        goods_name: "喜茶 4口味混合装 无糖…",
        goods_price: "¥ 66",
        sale_num: "3766人已购买"
      }
    ],
    swiper: [{
      id: 1,
      swiper_item: [{
          id: 1,
          image: "https://heyihan.codedemo.vip/goodsBanner.png"
        }, {
          id: 2,
          image: "https://heyihan.codedemo.vip/goodsBanner.png"
        }, {
          id: 3,
          image: "https://heyihan.codedemo.vip/goodsBanner.png"
        },
        {
          id: 4,
          image: "https://heyihan.codedemo.vip/goodsBanner.png"
        }
      ]
    }]
  },
menuBarTap(){
  wx.navigateTo({
    url:"/pages/specialSubject/specialSubject",
  })
},
onGoodsDetails(){
  wx.navigateTo({
    url: '/pages/goods_productDetails/goods_productDetails',
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