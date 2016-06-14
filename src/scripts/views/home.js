

var tplHome = require('../tpl/home.string');



SPA.defineView('home', {
  html: tplHome,
	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
			vm.livelist = [];
		}
	}],


  init: {
    indexSwiper: null,
    mySwiper: null,
    setActive: function (obj) {
      obj.addClass('active').siblings().removeClass('active');
    }
  },

  bindActions : {
     'goto.search' : function(){
       SPA.open('search');
     },
     'goto-detail' : function(){
       SPA.open('detail');
     },
     'switch.swiper':function(e){
       this.setActive($(e.el));
       this.indexSwiper.slideTo($(e.el).index());
     },
  },



  bindEvents: {
    'beforeShow': function () {
      this.mySwiper = new Swiper('#banner-swiper', {
        loop: true,
        autoplay:1500,
        autoplayDisableOnInteraction : false,
        // 如果需要分页器
        pagination: '.swiper-pagination'
      });
      this.indexSwiper = new Swiper('#index-swiper', {
        loop: false,
        onSlideChangeStart: function (swiper) {
          $('#index-nav li').eq(swiper.activeIndex)
            .addClass('active').siblings().removeClass('active');
        }
      });
    },

    'show': function () {
    	var vm = this.getVM();
      $.ajax({
        url: '/wobanglis/mock/livelist.json',
        success: function (res) {
          var data = res.data;
          var tempArr = [];
          for(var i = 0;i < Math.ceil(data.length);i++){
          	tempArr[i] = [];
          	tempArr[i] = data[i];
          }
          vm.livelist = tempArr;
        }
      });
    }
  }
});
