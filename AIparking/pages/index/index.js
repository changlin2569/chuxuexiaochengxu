//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    flag: false,
    name: '',
    avatar: '',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function () {
    var that = this;
    wx.getSetting({
      success(res){
        console.log(res);
        if(res.authSetting["scope.userInfo"]){
          wx.getUserInfo({
            success:function(res) {
              that.setData({
                flag: true,
                name: res.userInfo.nickName,
                avatar: res.userInfo.avatarUrl,
              })
            }
          })
        }
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
