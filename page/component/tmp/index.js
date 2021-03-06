const app = getApp()
const db = wx.cloud.database()
var fileData = require('../../data.storage.js')
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: fileData.indexImg().list,
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
    
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    db.collection('goodsData').get().then(res => {
      this.setData({
        goods: res.data
      })
    })
    db.collection('clientInfo').get().then(res=>{
      // console.log(res.data[0]._openid)
      app.globalData.openid = res.data[0]._openid
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
  getUserInfo: function (result) {
    // console.log(result.detail.userInfo)
    db.collection('clientInfo').add({
      data: result.detail.userInfo
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
    app.globalData.userInfo = result.detail.userInfo
    this.setData({
      userInfo: result.detail.userInfo,
      hasUserInfo: true
    })
  }
})