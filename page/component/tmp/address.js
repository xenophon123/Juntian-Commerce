// page/component/new-pages/user/address/address.js
const app = getApp()
const db = wx.cloud.database()

Page({
  data:{
    address:{
      name:'',
      phone:'',
      detail:''
    }
  },
  onLoad(){
    var self = this;
    wx.getStorage({
      key: 'address',
      success: function(res){
        self.setData({
          address : res.data
        })
      }
    })
  },
  //此处有更新
  formSubmit(e){
    const value = e.detail.value;
    if (value.name && value.phone && value.province && value.city
      && value.county && value.street && value.zipcode){
        value.detail = value.province+value.city+value.county+value.street;
        console.log(value);
        db.collection('addressInfo').add({
          data:{
            address: value
          }
        }).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
        wx.setStorage({
        key: 'address',
        data: db.collection('addressInfo').get().then(res=>{
          console.log(res)
        }),
        success(){
          wx.navigateBack();
        }
      })
    }else{
      wx.showModal({
        title:'提示',
        content:'请填写完整资料',
        showCancel:false
      })
    }
  }
})