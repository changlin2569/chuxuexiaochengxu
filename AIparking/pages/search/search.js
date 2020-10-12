// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      longitude: '108.899127',
      latitude: "34.152909",
      title: '西安邮电大学',
      iconPath: '/images/icon/location.png',
      width: '50'
    }]
  },

  searchLocation: function () {
    // console.log(1);
    let that = this;
    wx.chooseLocation({
      success: function (res) {
        // console.log(res);
        that.setData({
          markers: [{
            longitude: res.longitude,
            latitude: res.latitude,
            title: res.name,
            iconPath: '/images/icon/location.png',
            width: '50'
          }]
        })
      }
    })
  },

  getLocation: function () {
    // console.log(1);

    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        that.setData({
          markers: [{
            longitude: res.longitude,
            latitude: res.latitude,
            title: res.name,
            iconPath: '/images/icon/location.png',
            width: '50'
          }]
        })
      }
    })
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