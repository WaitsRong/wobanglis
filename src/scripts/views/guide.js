var tplGuide = require('../tpl/guide.string');

SPA.defineView('guide',{
  html : tplGuide,
  plugins : ['delegated'],
  bindActions : {
    'goto.index' : function(){
      SPA.open('index');
      SPA.util.storage('isVisited',true);
    }
  }
});
