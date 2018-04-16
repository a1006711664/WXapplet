Page({
    data: {
        text: '测试一下',
        arrList:['1','2','asda'],
    },
    onLoading: function() {

    },
    btnclick: function(e) {
        console.log("true")
        console.log(e)
        console.log(this.data.text)
        var newArr = this.data.arrList;
       newArr.shift();
        this.setData({
            text: "changeText",
            arrList: newArr,
        })

    },
});