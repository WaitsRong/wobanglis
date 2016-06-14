var tpldetail = require('../tpl/detail.string');
SPA.defineView('detail',{
  html : tpldetail,
  plugins: ['delegated'],
  bindActions:{
    'exit' : function(){
      this.hide();
    },
    'goto.prodet' : function(){
      SPA.open('prodet');
    }

  }
});
