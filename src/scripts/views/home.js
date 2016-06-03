

var tplHome = require('../tpl/home.string');

SPA.defineView('home', {
  html: tplHome,
	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
			vm.livelist = [];
		}
	}],

  
  bindActions : {
     'goto.search' : function(){
       SPA.open('search');
     }
  },

  bindEvents: {
    'show': function () {
    	var vm = this.getVM();
      $.ajax({
        url: '/api/getlivelist.php',
        success: function (res) {
          //console.log(res.data);
          //vm.livelist = res.data;
          var data = res.data;
          var tempArr = [];
          for(var i = 0;i < Math.ceil(data.length/2);i++){
          	tempArr[i] = [];
          	tempArr[i][0] = data[2*i];
          	tempArr[i][1] = data[2*i+1];
          }
          vm.livelist = tempArr;
        }
      });
    }
  }
});
