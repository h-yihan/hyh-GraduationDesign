// index.js

Page({
  data: {
    ggao: [{
      id: 1,
      addGgao1: "喜茶百货",
      addGgao2: "中秋月饼抢鲜上市"
    },
    {
      id: 2,
      addGgao1: "阿喜团餐",
      addGgao2: "企业欢聚享福利"
    },
    {
      id: 3,
      addGgao1: "阿喜有礼",
      addGgao2: "初夏豪礼即可送"
    },
  ],
    swiper: [{
      id: 1,
      swiper_item: [{
          id: 1,
          image: "https://heyihan.codedemo.vip/indexBanner-1.png"
        }, {
          id: 2,
          image: "https://heyihan.codedemo.vip/indexBanner-1.png"
        }, {
          id: 3,
          image: "https://heyihan.codedemo.vip/indexBanner-2.png"
        },
        {
          id: 4,
          image: "https://heyihan.codedemo.vip/indexBanner-2.png"
        }
      ]
    }]
  },
  onYqh(){
    wx.navigateTo({
      url: '/pages/yqh_zq/yqh_zq',
    })
  }
})