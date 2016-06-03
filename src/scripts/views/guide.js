var tplGuide = require('../tpl/guide.string');

SPA.defineView('guide',{
  html : tplGuide,
  plugins : ['delegated'],
  bindActions : {
    'goto.index' : function(){
      SPA.open('index');

      SPA.util.storage('isVisited',true);

      var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay:1500,
        autoplayDisableOnInteraction : false,
        // 如果需要分页器
        pagination: '.swiper-pagination',
      });
    }
  }
});
