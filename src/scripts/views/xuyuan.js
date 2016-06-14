var tplxuyuan = require("../tpl/xuyuan.string");
SPA.defineView('xuyuan',{
  html:tplxuyuan,
  plugins: ['delegated'],
  bindActions:{
    'exit' : function(){
      this.hide();
    }
  }
})
