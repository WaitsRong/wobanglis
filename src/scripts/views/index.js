var indexTpl = require('../tpl/index.string');
require('../lib/swiper-3.3.1.min.js');

SPA.defineView('index',{
  html : indexTpl,
  plugins: ['delegated'],

  modules:[{
    name : 'content',
    container : '.m-index-container',
    views : ['home','gonglv','tree','friends','my'],
    defaultTag : 'home'
  }],

  init: {
    indexSwiper: null,
    setActive: function (obj) {
      obj.addClass('active').siblings().removeClass('active');
    }
  },

//绑定点击事件
  bindActions:{
    'switch.view': function (e) {
      // 视图切换方法
      this.modules.content.launch(e.data.tag);
      this.setActive($(e.el));
      console.log(e.data.tag);
    }
  }


});
