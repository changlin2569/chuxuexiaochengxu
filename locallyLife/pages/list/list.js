// pages/list/list.js

const fetch = require('../../utills/fetch');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sort: {},
    shops: [],
    page: 1,
    limit: 20,
    shopslimit: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    fetch(`categories/${options.cat}`).then(res =>{
      this.setData({
        sort: res.data
      })
      wx.setNavigationBarTitle({
        title: res.data.name,
      })
      return fetch(`categories/${options.cat}/shops`,{_page:this.data.page,_limit:this.data.limit})
    }).then(res =>{
      this.setData({
        shops: res.data
      })
    })
    // wx.request({
    //   url: `https://locally.uieee.com/categories/${options.cat}`,
    //   success: res => {
    //     // console.log(res);

    //     this.setData({
    //       sort: res.data
    //     })
    //     wx.setNavigationBarTitle({
    //       title: res.data.name
    //     })
    //     wx.request({
    //       url: `https://locally.uieee.com/categories/${options.cat}/shops`,
    //       success: res => {
    //         this.setData({
    //           shops: res.data
    //         })
    //       }
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if(this.data.sort.name){
      wx.setNavigationBarTitle({
        title: this.data.sort.name,
      })
    }
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
    this.setData({
      shops: [],
      page: 1,
      shopslimit: false
    })
    fetch(`categories/${this.data.sort.id}/shops`,{_page:this.data.page,_limit:this.data.limit}).then(res =>{
      this.setData({
        shops: res.data
      })
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.shopslimit) return;
    let {page,limit} = this.data;
    let index = {_page:++page,_limit:this.limit}
    fetch(`categories/${this.data.sort.id}/shops`,index).then(res =>{
      // console.log(page);
      let flag = Boolean(page * limit < parseInt(res.header['x-total-count'])) ;
      this.setData({
        shops: this.data.shops.concat(res.data),
        page,
        shopslimit: !flag
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})