module.exports = {
  goodsData:goodsData,
  indexImg: indexImg,
  cartData:cartData,//should be local for each user,
  orderData: orderData,//should be local for each user,
  categoryData:categoryData
}
var goods_data = goodsData()
var img_data = indexImg()

function cartData() {
  var arr = {
    list: [
       
    ]
  }
}
function orderData() {
  var arr = {
    list: [
      { id: 1, title: '新鲜芹菜 半斤', image: '/image / s5.png', num: 4, price: 0.01 },
      { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03 }
    ]
  }
}

function categoryData() {
  var arr = {
    list: [
      { name: 果味, id: guowei },
      { name: 蔬菜, id: shucai},
      { name: 炒货, id: chaohuo },
      { name: 点心, id: dianxin },
      { name: 粗茶, id: cucha },
      { name: 淡饭, id: danfan }
      ]
  }
}

function indexImg() {
  var arr = {
    list: [
      '/image/c1.png',
      '/image/c2.png',
      '/image/c3.png'
    ]
  }
  return arr;
}
function goodsData() {
  var arr = {
    list:[
      { "item": "瓜子 100g", "price": 0.01, "img": "/image/s4.png" }, 
      { "item": "芹菜 半斤", "price": 0.02, "img": "/image/s5.png" }, 
      { "item": "素米 375g", "price": 0.03, "img": "/image/s6.png" },
      {
        // "id": 1,
        "img": '/image/goods1.png',
        "item": '新鲜梨花带雨',
        "price": 0.01,
        "stock": '有货',
        "detail": '这里是梨花带雨详情。',
        "parameter": '125g/个',
        "service": '不支持退货'}
    ]
  }
  return arr;
}