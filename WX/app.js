//app.js
App({
    onLaunch: function() {


        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
    },
    getDeliveryInfo: function(nu, callback) {
        wx.showLoading({
          title: '加载中',
        })
        wx.request({
            url: 'http://api.kuaidi100.com/api', //仅为示例，并非真实的接口地址
            data: {
                valicode: '',
                order: 'desc',
                muti: 1,
                show: 0,
                com: 'yuantong',
                nu: nu,
                // 这个key
                id: '29833628d495d7a5',
            },
            success: function(res) {
              var data = res.data;
              if(data.status==='0'){
               wx.showToast({
                    title: data.message,
                    icon: 'none',
                    duration: 2000
                  })
              }else{

                callback(res);
              }
            },
            complete: function(){
              wx.hideLoading();
            }
        })
    },

    globalData: {
        userInfo: null
    }
})