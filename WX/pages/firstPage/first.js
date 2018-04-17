

var app = getApp();
Page({
    data: {
        text: '测试一下',
        arrList: ['1', '2', 'asda'],
        expressList:[],
        expressNu:null,
    },
    onLoading: function() {

    },
    input:function(e){
      console.log(e);
      this.setData({
        expressNu:e.detail.value,
      })
    },
    // 888898067409909167
    btnclick: function(e) {
        var _self = this;
        app.getDeliveryInfo(this.data.expressNu,function(data){
          _self.setData({
            expressList: data.data.data
          })
          console.log(_self.data.expressList)
        })
    },

});