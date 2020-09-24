//index.js
//获取应用实例
const app = getApp();

Page({
  data : {
    message : "hello world",
    jay : {
      name : '周杰伦',
      age : 18
    },
    viewClassName : 'first',
    todos : [{
      name : '数学',
      checked : true
    },{
      name : '语文',
      checked : false
    },{
      name : '英语',
      checked : false
    }]
  },
  // tapNameTwo : function(){
  //   console.log('我是孩子');
  // }
  // tapName : function(e){
  //   console.log(this);
  // },
  inputName:function(e){
    // console.log(e.detail.value);
    // this.data.message = e.detail.value;
    // console.log(this);
    this.setData({
      message: e.detail.value
    })
    
  }
})