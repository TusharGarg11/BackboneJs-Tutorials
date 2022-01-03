var kapilSharma=Backbone.Model.extend({
    show:function(){
        console.log("colors Tv");
    }
});

var kapilSharmaShow=kapilSharma.extend({
    show:function(){
        kapilSharma.prototype.show.apply();
        console.log('Sony Tv');
    }
});

var k=new kapilSharmaShow();