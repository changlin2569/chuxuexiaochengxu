// pages/timing/timing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
    formateTime: '00:00',
    cost: 0,
    number: '陕A88888',
  },

  formateDate: function () {
    console.log(this.data.flag);
    
    this.setData({
      flag: !this.data.flag,
    })

    if (this.data.flag == true) {
      this.dateHandle();
    }
  },

  // 计时函数
  dateHandle: function () {
    if(!this.data.flag) return;
    let now = Date.now();
    let that = this;
    let formateTime = function (time) {
      if (!time) {
        return '';
      } else if (!that.data.flag) {
        clearInterval(timer);
      }
      let nowDate = Date.now();
      let timing = nowDate - time;
      let date = new Date(timing);
      let second = date.getSeconds() >= 10 ? date.getSeconds() : `0${date.getSeconds()}`;
      let minute = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
      let hour = (date.getHours() - 8) >= 10 ? (date.getHours() - 8) : `0${date.getHours() - 8}`;
      let cost = hour *3 + minute * 0.05;
      // console.log(that);
      that.setData({
        cost: cost.toFixed(2),
      })
      
      return (hour == 0 ? '' : `${hour}:`) + minute + ':' + (hour != 0 ? '' : second);
    }
    var timer = setInterval(function () {
      // console.log(this);
      var timing = formateTime(now);
      that.setData({
        formateTime: timing
      })
    }, 1000);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.dateHandle();
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