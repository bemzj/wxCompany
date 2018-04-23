// pages/case/case.js
Page({

  /**
   * 页面的初始数据
   */
 data: {
   topBj:'http://www.hengdikeji.com/home/img/bj01.png',
   logo: 'http://www.hengdikeji.com/home/img/logo01.png',
   statusClass:['','sel'],
   nav:[
      {
        status:'1',
        navMame:'全部'
      },
      {
        status: '0',
        navMame: 'H5案例'
      },
      {
        status: '0',
        navMame: '小程序'
      },
      {
        status: '0',
        navMame: '微商城'
      },
      {
        status: '0',
        navMame: '网页'
      },
      {
        status: '0',
        navMame: '移动app'
      }
   ],
   navSrc:'../../pages/caseDetails/caseDetails',
   cSel:["",'cSel'],
   classify:[
     {
       status: '1',
       cName: '全部'
     },
     {
       status: '0',
       cName: '邀请函'
     },
     {
       status: '0',
       cName: '产品推广'
     },
     {
       status: '0',
       cName: '投票'
     },
     {
       status: '0',
       cName: '小游戏'
     },
     {
       status: '0',
       cName: '品牌推广'
     },
     {
       status: '0',
       cName: '促销活动'
     }
   ]
  },
 selClass: function (e) {
   
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
  
  }
})
/**
   * 生命周期函数--监听页面加载
   */
