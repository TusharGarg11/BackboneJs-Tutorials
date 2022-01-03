var person={
    name:'Tushar',
    test:function(){
        this.trigger('demo');
    }
}

_.extend(person,Backbone.Events)
person.on('demo',function(){
    console.log("Custom Event Tutorial");
})