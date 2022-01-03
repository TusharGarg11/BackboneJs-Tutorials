var Tutorial=Backbone.Model.extend({
    defaults:{
        platform:'youtube'
    }
});

// var backbone=new Tutorial({
//     name:'Tushar Garg',
//     teach:'Backbone js',
//     platform:'YouTube'
// });

var backbone=new Tutorial();
// backbone.set("name","Tushar");

backbone.set({
    name:'Tushar Garg',
    teach:'Backbone Js'
});