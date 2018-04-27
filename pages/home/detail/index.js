// pages/home/detail/index.js
import { Regular } from '../../../utils/regular.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes: 'AAA',
    btn: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'width:100%;height:50px;background-color:#4d8dff;line-height: 50px; text-align: center;color: #fff;letter-spacing: 8px;'
      },
      children: [{
        type: "text",
        text: '预定'
      }],
    }]
  },
  tap: function(){
    console.log("点击预定");
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var oldStr = this.data.nodes;
    var regular = new Regular();
    var newStr = regular.getNewString(oldStr);
    this.setData({
      nodes1: newStr
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})