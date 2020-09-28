//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   username : 'jay',
   userpassword : '12345678',
   show : true
  },
  // nameHandle : function(e){
  //   this.setData({
  //     username : e.detail.value
  //   })
  // },
  // passwordHandle : function(e){
  //   this.setData({
  //     userpassword : e.detail.value
  //   })
  // },
  inputHandle : function(e){
    // console.log(e);
    let propo = e.target.dataset['propo'];
    let changed = {};
    changed[propo] = e.detail.value;
    this.setData(changed);
    
  },
  loginhandle : function(e){
    console.log(this.data);
    //第三种form表单写法
    console.log(e);//拿到界面层中的数据修改逻辑层
    
  },
  showTime :function(){
    // console.log(this);
    this.setData({
      show: !this.data.show
    })
    console.log(this.data.show);
    
  }
})
