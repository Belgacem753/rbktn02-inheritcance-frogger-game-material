// Enemies our player must avoid

var X = [0, 101, 202, 303, 404];
var Y = [390, 310, 230, 150, 70]
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = -80;
    this.y = Y[Math.floor(Math.random()*5)];
    this.speed = 1;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed;
    if(this.x === player.x && this.y === player.y){
        // alert("You lose");
        this.speed = 1;
        player = new Player();
        allEnemies = [];
    }
};


   /*********************************************
   Inside the app.js file, you will need to implement the Player and the Enemy classes, using Object-Oriented JavaScript. 
   Part of the code for the Enemy is provided to you, and you will need to complete the following:
   *	The Enemy function, which initiates the Enemy by:
   *	Loading the image by setting this.sprite to the appropriate image in the image folder (already provided)
   *	Setting the Enemy initial location (you need to implement)
   *	Setting the Enemy speed (you need to implement)
   *	The update method for the Enemy
   *	Updates the Enemy location (you need to implement)
   *	EXTRA: RANDOMIZES ENEMY RE-START SPEED
   *	              //TODO: MAKE ENEMIES DO NOT COINCEDE IN ROW 
   *	Handles collision with the Player (you need to implement)	
   *	You can add your own Enemy methods as needed *******************************************************/

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var x = new Enemy();

var allEnemies = [];


setInterval(function(){
    allEnemies.push(new Enemy());
}, 2000);

var Player = function() {
   
    this.x = 101;
    this.y = 390;
    this.speed = 101;
    this.sprite = 'images/char-boy.png';
};


Player.prototype.update = function(dt) {
  
};
Player.prototype.render = function() {
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (e){
     if(e === "up" && this.y > 0){
        this.y -= this.speed -21;
     } else if(e === "down" && this.y < 390){
        this.y += this.speed-21;
     } else if(e === "right" && this.x < 404){
        this.x += this.speed;
     } else if(e === "left" && this.x > 0){
        this.x -= this.speed;
     }
     if(this.y === -10){
         alert("you win")
         Enemy.prototype.speed = Enemy.prototype.speed + 1;
         allEnemies = [];
         player = new Player();
     }
};
var player = new Player()


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
