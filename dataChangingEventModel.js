var students=Backbone.Model.extend({
    initialize : function(){
        this.bind('change:name',function(model){
            console.log("Model Changed");
        })
        // console.log("Working");
    }
});

var student=new students({
    name:'Tushar Garg',
    RollNo: 1
});