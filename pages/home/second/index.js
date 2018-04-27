Page({
  /**
 * 生命周期函数--监听页面初次渲染完成
 */
  onReady: function () {
    wx.request({
      url: 'http://huoke.chinabyte.net/index.php/category/category_list',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': 'ci_session=' + wx.getStorageSync('sessionID')
      },
      data: {
        "pid": 1
      },
      success: res => {
        var indexDataSource = 'detail[' + 0 + '].list';
        res.data.data.map(item => {
          item.isSelect = false
        })
        this.setData({
          [indexDataSource]: res.data.data
        })
        console.log(this.data.detail[0].list)
      }

    }),
    wx.request({
        url: 'http://huoke.chinabyte.net/index.php/category/category_list',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Cookie': 'ci_session=' + wx.getStorageSync('sessionID')
        },
        data: {
          "pid": 2
        },
        success: res => {
          var indexDataSource = 'detail[' + 1 + '].list';
          res.data.data.map(item => {
            item.isSelect = false
          })
          this.setData({
            [indexDataSource]: res.data.data
          })
          console.log(this.data.detail[1].list)
        }

      }),
      wx.request({
        url: 'http://huoke.chinabyte.net/index.php/category/category_list',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Cookie': 'ci_session=' + wx.getStorageSync('sessionID')
        },
        data: {
          "pid": 3
        },
        success: res => {
          res.data.data.map(item => {
            item.isSelect = false
          })
          var indexDataSource = 'detail[' + 2 + '].list';
          this.setData({
            [indexDataSource]: res.data.data
          })

        }

      }),
      wx.request({
        url: 'http://huoke.chinabyte.net/index.php/category/category_list',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Cookie': 'ci_session=' + wx.getStorageSync('sessionID')
        },
        data: {
          "pid": 4
        },
        success: res => {
          var indexDataSource = 'detail[' + 3 + '].list';
          res.data.data.map(item => {
            item.isSelect = false
          })
          this.setData({
            [indexDataSource]: res.data.data
          })

        }

      }),
      wx.request({
        url: 'http://huoke.chinabyte.net/index.php/category/category_list',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Cookie': 'ci_session=' + wx.getStorageSync('sessionID')
        },
        data: {
          "pid": 5
        },
        success: res => {
          var indexDataSource = 'detail[' + 4 + '].list';
          res.data.data.map(item => {
            item.isSelect = false
          })
          this.setData({
            [indexDataSource]: res.data.data
          })

        }

      })
    wx.request({
      url: 'http://huoke.chinabyte.net/index.php/category/category_list',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': 'ci_session=' + wx.getStorageSync('sessionID')
      },
      data: {
        "pid": 6
      },
      success: res => {
        res.data.data.map(item => {
          item.isSelect = false
        })
        var indexDataSource = 'detail[' + 5 + '].list';
        this.setData({
          [indexDataSource]: res.data.data
        })

      }

    }),
      wx.request({
        url: 'http://huoke.chinabyte.net/index.php/category/category_list',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Cookie': 'ci_session=' + wx.getStorageSync('sessionID')
        },
        data: {
          "pid": 7
        },
        success: res => {
          res.data.data.map(item => {
            item.isSelect = false
          })
          var indexDataSource = 'detail[' + 6 + '].list';
          this.setData({
            [indexDataSource]: res.data.data
          })

        }

      }),
      wx.request({
        url: 'http://huoke.chinabyte.net/index.php/category/category_list',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Cookie': 'ci_session=' + wx.getStorageSync('sessionID')
        },
        data: {
          "pid": 8
        },
        success: res => {
          res.data.data.map(item => {
            item.isSelect = false
          })
          var indexDataSource = 'detail[' + 7 + '].list';
          this.setData({
            [indexDataSource]: res.data.data
          })

        }

      })
      , wx.request({
        url: 'http://huoke.chinabyte.net/index.php/category/category_list',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Cookie': 'ci_session=' + wx.getStorageSync('sessionID')
        },
        data: {
          "pid": 9
        },
        success: res => {
          res.data.data.map(item => {
            item.isSelect = false
          })
          var indexDataSource = 'detail[' + 8 + '].list';
          this.setData({
            [indexDataSource]: res.data.data
          })

        }

      })
    wx.request({
      url: 'http://huoke.chinabyte.net/index.php/category/category_list',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': 'ci_session=' + wx.getStorageSync('sessionID')
      },
      data: {
        "pid": 10
      },
      success: res => {
        res.data.data.map(item => {
          item.isSelect = false
        })
        var indexDataSource = 'detail[' + 9 + '].list';
        this.setData({
          [indexDataSource]: res.data.data
        })
      }
    })
  },
  onShow: function () {
    console.log(this.data.detail);
  },
  data: {
    indexSize: 0,
    indicatorDots: false,
    autoplay: false,
    duration: 0,
    list: '',
    msg: '0',
    ljh: [],
    detail: [
      {
        id: 1,
        title: '数客调研',
        list: [

        ],
      },
      {
        id: 2,
        title: '策略服务',
        list: [

        ],
      },
      {
        id: 3,
        title: '广告服务',
        list: [

        ],
      },
      {
        id: 4,
        title: '数据营销',
        list: [

        ],
      },
      {
        id: 5,
        title: '社会化',
        list: [

        ],
      },
      {
        id: 6,
        title: '新闻营销',
        list: [

        ],
      },
      {
        id: 7,
        title: '视频服务',
        list: [

        ],
      },
      {
        id: 8,
        title: '会议服务',
        list: [

        ],
      },
      {
        id: 9,
        title: '认证评测',
        list: [
          {
            title: '视频评测',
            isSelect: false,
            src: '../../../images/home/item1.png'
          },
          {
            title: '国家级认证',
            isSelect: false,
            src: '../../../images/home/item1.png'
          },
          {
            title: '产品白皮书',
            isSelect: false,
            src: '../../../images/home/item1.png'
          },
          {
            title: '图文评测',
            isSelect: false,
            src: '../../../images/home/item1.png'
          }
        ],
      },
      {
        id: 10,
        title: '内容分发',
        list: [
          {
            title: '微博转发',
            isSelect: false,
            src: '../../../images/home/item1.png'
          },
          {
            title: '微信传播',
            isSelect: false,
            src: '../../../images/home/item1.png'
          },
          {
            title: '百家号',
            isSelect: false,
            src: '../../../images/home/item1.png'
          },
          {
            title: '头条号',
            isSelect: false,
            src: '../../../images/home/item1.png'
          }
        ],
      },
    ],
  },
  onLoad: function (options) {
    this.setData({
      indexSize: options.index - 1
    })
  },
  change(e) {
    this.setData({
      indexSize: e.detail.current
    })
  },
  scrollTo(e) {
    this.setData({
      indexSize: e.target.dataset.index
    })
  },
  imageClick: function (e) {
    var indexSize = this.data.indexSize;
    var index = e.target.dataset.index;
    var select = e.target.dataset.select;
    let start = 'detail[' + indexSize + '].list[' + index + '].isSelect';
    let isSelect = this.data.detail[indexSize].list[index].isSelect;
    this.setData({
      [start]: !isSelect
    })
    // 我自己写的
    // 数据源
    var dataSource = this.data.detail;
    var chooseArr = [];
    var chooseArr1 = [];
    for (let i = 0; i < 10; i++) {
      for (let x = 0; x < 4; x++) {
        if (dataSource[i].list[x].isSelect) {
          chooseArr.push(dataSource[i].list[x].cid)
          chooseArr1.push(dataSource[i].list[x].name)
        }
      }
    }
    wx.setStorageSync('abc', chooseArr);
    wx.setStorageSync('abc1', chooseArr1);
    this.setData({
      msg: wx.getStorageSync('abc').length
    })
  },
  reservationClick: function () {
    console.log(wx.getStorageSync('abc'));
    // wx.request({
    //   url: 'http://huoke.chinabyte.net/index.php/order/add_order',
    //   method: 'POST',
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'Cookie': 'ci_session=' + wx.getStorageSync('sessionID')
    //   },
    //   data: {
    //     "uid": wx.getStorageSync('uid'),
    //     "cids": wx.getStorageSync('abc')
    //   },
    //   success: res => {
    //     console.log(res)
    //   }
    // })
    wx.navigateTo({
      url: '../order/index',
    })
  }
})