//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   username : 'jay',
   userpassword : '12345678'
  },
  nameHandle : function(e){
    this.setData({
      username : e.detail.value
    })
  },
  passwordHandle : function(e){
    this.setData({
      userpassword : e.detail.value
    })
  },
  loginhandle : function(){
    console.log(this.data); 
  }
})
