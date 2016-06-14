var tplTree = require('../tpl/tree.string');
SPA.defineView('tree',{
  html : tplTree,
  plugins: ['delegated'],
  bindActions:{
    'goto.xuyuan' : function(){
      SPA.open('xuyuan');
    }
  }
});
