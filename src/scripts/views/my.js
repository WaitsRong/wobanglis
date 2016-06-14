var tplMy = require('../tpl/my.string');
SPA.defineView('my',{
  html : tplMy,
  plugins: ['delegated'],
  bindActions : {
		'tabChange' : function(){
			var nav = $("#nav-ul");
			var lis = nav.children();
			var liLen = lis.length;

			var oDiv = $(".self-containt");
			var divs = oDiv.children();
			var divLen = divs.length;

			for(var i = 0; i < liLen;i++){
				lis[i].index = i;
				lis[i].addEventListener("touchend", function(){
					for(var j = 0; j < liLen;j++){
						lis[j].className = '';
						divs[j].className = '';
					}
					lis[this.index].className = 'active';
					divs[this.index].className = 'active';
          // this.index.addClass("active").siblings.removeClass("active");
				})
			}
		}
	}
});
