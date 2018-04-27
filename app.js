App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 用户登录
    wx.login({
      success: function (res) {
        if (res.code) {
          console.log("code===  " + res.code)
          wx.request({
            url: 'http://huoke.chinabyte.net/index.php/user/login',
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded',
            },
            data: {
              "jscode": res.code
            },
            success: function (res) {
              console.log('sesssion===>'+res.data.data.session_id)
              console.log('uid====>'+res.data.data.uid)
              wx.setStorageSync('sessionID', res.data.data.session_id)
              wx.setStorageSync('uid', res.data.data.uid)
            }
          })
        } else {
          console.log('登录失败' + res.errMsg)
        }
      }
    }),
      // 获取用户信息存储到本地
      wx.getUserInfo({
        success: res=> {
          this.globalData.userInfo = res.userInfo
          // console.log(this)
        }
      })
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       wx.getUserInfo({
    //         success: res => {
    //           this.globalData.userInfo = res.userInfo
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: null
  }
  
})

