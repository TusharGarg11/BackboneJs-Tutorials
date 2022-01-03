var Team=Backbone.Model.extend();

var player1=new Team({
    Name:'Dhoni',
    PlayedFrom:'India',
    Performance:'Excellent',
    runs:98
});

var player2=new Team({
    Name:'Virat Kholi',
    PlayedFrom:'India',
    Performance:'Good',
    runs:75
});

var players=Backbone.Collection.extend();
var p=new players([
player1,
player2
]);

// p.each(function(player){
//     console.log(player);
// });


var res1=p.where(function(player){
    return player.get('runs')>74;
});
