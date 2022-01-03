var Tutorial=Backbone.Model.extend({
    validate: function(attrs){
        if(attrs.age < 1){
            return "age should not be negative";
        }
    }
});

var backbone=new Tutorial({
    name:'Tushar Garg',
    age:-1
});

