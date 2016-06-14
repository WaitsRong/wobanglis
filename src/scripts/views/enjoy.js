var tplenjoy = require('../tpl/enjoy.string');
SPA.defineView('enjoy',{
  html : tplenjoy,
  plugins: ['delegated'],
  bindActions:{
    'colse':function(){
      this.hide();
    }
  }
});
