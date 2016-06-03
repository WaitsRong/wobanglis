var indexTpl = require('../tpl/index.string');
require('../lib/swiper-3.3.1.min.js');
// document.body.innerHTML += indexTpl;
window.onload=function(){
  var mySwiper = new Swiper ('#banner-swiper', {
    loop: true,
    autoplay:1500,
    autoplayDisableOnInteraction : false,
    // 如果需要分页器
    pagination: '.swiper-pagination',
  });
}

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
    
    'switch.swiper':function(e){
      this.setActive($(e.el));
      this.indexSwiper.slideTo($(e.el).index());
    },
    // 'switch.view':function(e){
    //   this.modules.content.launch(e.data.tag);
    //   this.setActive($(e.el));
    // }

    'switch.view': function (e) {
      // 视图切换方法
      //console.log(e);
      this.modules.content.launch(e.data.tag);
      this.setActive($(e.el));
    }
  },

  bindEvents: {
    'beforeShow': function () {
      this.indexSwiper = new Swiper('#index-swiper', {
        loop: false,
        onSlideChangeStart: function (swiper) {
          $('#index-nav li').eq(swiper.activeIndex)
            .addClass('active').siblings().removeClass('active');
        }
      });
    }
  }

});
