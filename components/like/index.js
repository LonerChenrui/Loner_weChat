// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 点赞总数
    likeNum: {
      type: [Number, String],
      value: 0
    },
    // 显示那张心心图片
    likeBoolean: {
      type: Boolean,
      value: false
    }
  },
  /**
   * 父组件获取子组件实列时，得到自定义数据
  */
  // behaviors: ['wx://component-export'],
  // export() {
  //   return { myField: 'myValue' }
  // },
  
  /**
   * 组件的初始数据
   */
  data: {
    // 心心图片
    likePng: "./images/like.png",
    likeDis: "./images/like@dis.png"
  },
  /**
   * 生命周期函数
   */
  lifetimes: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 是否点赞
    isLike() {
      let likeBoolean = !this.properties.likeBoolean;
      let likeNum = this.properties.likeNum;
      if (likeBoolean) {
        likeNum += 1
      } else {
        if (likeNum == 0) {
          likeNum = 0
        } else {
          likeNum -= 1
        }
      }
      this.setData({
        likeBoolean: likeBoolean,
        likeNum: likeNum
      })
    }
  }
})
