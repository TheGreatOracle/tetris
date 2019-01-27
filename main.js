var GameState = { 
init: function() { 
this.game.physics.startSystem(Phaser.Physics.ARKADE); 
this.cursors = this.game.input.keyboard.createCursorKeys(); 

},
preload: function() { 
 this.load.image('kvadrat', 'img/kvadrat.jpg')
},
create: function() { 
game.stage.backgroundColor = "#ffffff";

this.kvadrat = this.add.sprite(52, 0, 'kvadrat');
this.delay = 3000; 
this.count = 0;
this.game.physics.arcade.enable(this.kvadrat); 
},
update: function() { 
if(game.time.now > this.delay) {
	console.log('azazazaz')
	this.delay += 3000
	if (this.kvadrat position.y == 350){
		this.kvadrat

	} else {
	this.kvadrat.position.y += 50;
	}
}

},
}
var game = new Phaser.Game(205, 400, Phaser.AUTO); 

game.state.add('GameState', GameState); 
game.state.start('GameState');
