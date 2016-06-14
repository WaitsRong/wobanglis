var tplprodet = require('../tpl/prodet.string');
SPA.defineView('prodet',{
  html : tplprodet,
  plugins: ['delegated'],
  bindActions:{
    'exit' : function(){
      this.hide();
    },
    'switch.enjoy':function(){
      SPA.open('enjoy',{
        ani:{
          name:'actionSheet',
          distance:300
        }
      });
    }
  }
});
