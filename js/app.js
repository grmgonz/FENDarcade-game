// Enemies our player must avoid
//I added multiple enemies (monsters)
var Enemy1 = function(x, y) {



    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite =
        'images/zombie.png';


    this.x = x;
    this.y = y;
    this.speed = getRandomInt(20,
        50);

};

var Enemy2 = function(x, y) {



    this.sprite =
        'images/monster.png';


    this.x = x;
    this.y = y;
    this.speed = getRandomInt(100,
        200);

};

var Enemy3 = function(x, y) {



    this.sprite =
        'images/ghost.png';


    this.x = x;
    this.y = y;
    this.speed = getRandomInt(80,
        210);

};


var Enemy4 = function(x, y) {



    this.sprite =
        'images/werewolf.png';


    this.x = x;
    this.y = y;
    this.speed = getRandomInt(80,
        210);

};



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy1.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;

    if (this.x > 6 * 101) {
        this.x = -101;
        this.speed = getRandomInt(
            20, 50);
    }
    if (Math.abs(this.x - player.x) <
        101 &&
        Math.abs(this.y - player.y) <
        83) {
        player.reset();
        score.updateEaten();
    }

};

Enemy2.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;

    if (this.x > 6 * 101) {
        this.x = -101;
        this.speed = getRandomInt(
            100, 200);
    }
    if (Math.abs(this.x - player.x) <
        101 &&
        Math.abs(this.y - player.y) <
        83) {
        player.reset();
        score.updateEaten();
    }

};

Enemy3.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;

    if (this.x > 3 * 101) {
        this.x = -101;
        this.speed = getRandomInt(
            80, 210);
    }
    if (Math.abs(this.x - player.x) <
        101 &&
        Math.abs(this.y - player.y) <
        83) {
        player.reset();
        score.updateEaten();
    }

};

Enemy4.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;

    if (this.x > 6 * 101) {
        this.x = -101;
        this.speed = getRandomInt(
            80, 210);
    }
    if (Math.abs(this.x - player.x) <
        101 &&
        Math.abs(this.y - player.y) <
        83) {
        player.reset();
        score.updateEaten();
    }

};
// Draw the enemy on the screen, required method for game
Enemy1.prototype.render = function() {
    ctx.drawImage(Resources.get(
            this.sprite), this.x,
        this.y);
};

Enemy2.prototype.render = function() {
    ctx.drawImage(Resources.get(
            this.sprite), this.x,
        this.y);
};

Enemy3.prototype.render = function() {
    ctx.drawImage(Resources.get(
            this.sprite), this.x,
        this.y);
};

Enemy4.prototype.render = function() {
    ctx.drawImage(Resources.get(
            this.sprite), this.x,
        this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    this.sprite =
        'images/ninja.png';
    this.reset();
};

Player.prototype.update = function() {
    if (this.col < 0) {
        this.col = 0;
    }

    if (this.col > 4) {
        this.col = 4;
    }
    if (this.row > 5) {
        this.row = 5;
    }

    if (this.row == 0) {
        this.reset();
        score.updateSurvived();
    }

    this.x = this.col * 101;
    this.y = this.row * 83;


};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(
            this.sprite), this.x,
        this.y);

};

Player.prototype.handleInput = function(
    key) {
    switch (key) {
        case 'left':
            this.col--;
            break;
        case 'right':
            this.col++;
            break;
        case 'up':
            this.row--;
            break;
        case 'down':
            this.row++;
            break;
    }

};

Player.prototype.reset = function() {
    this.col = 2;
    this.row = 5;
    this.x = this.col * 101;
    this.y = this.row * 83;
    document.getElementById(
            "resetgame").style.visibility =
        "hidden";
};




var Score = function() {
    this.survived = 0;
    this.eaten = 0;

};


//I added a game over screen but customizing
//an alert box with  Alertify.js and by removing
//the canvas once the game finished.
//In addition I added a RESET GAME button in order to start over.
Score.prototype.updateSurvived =
    function() {
        this.survived += 1;
        document.getElementById(
                'score-survived').innerHTML =
            this.survived;
        if (this.survived == Math.max(
                this.survived, 1)) {
            var query =
                "canvas[height='606'][width='505']";
            var canvas = document.querySelector(
                query);
            canvas.style.display =
                "none";
            document.getElementById(
                    "resetgame").style.visibility =
                "visible";




            alertify.confirm(
                "YOU WIN. Congrats Sensei you are now a Master of Monsters and apart of the League of Canvas. TRY Again?",
                function() {
                    alertify.success(
                        'Ok');


                },
                function() {
                    alertify.error(
                        'NO');
                });


        }
    };


Score.prototype.updateEaten = function() {
    this.eaten += 1;


    document.getElementById(
            'score-eaten').innerHTML =
        this.eaten;

    if (this.eaten == Math.max(this
            .eaten, 3)) {
        var query =
            "canvas[height='606'][width='505']";
        var canvas = document.querySelector(
            query);
        canvas.style.display =
            "none";
        document.getElementById(
                "resetgame").style.visibility =
            "visible";



        document.onkeyup = function() {
            down = false;
        };


        alertify.confirm(
            "GAME OVER! You were eaten 3x and have failed to become a master ninja. TRY Again?",
            function() {

                alertify.success(
                    'Ok');

            },

            function() {
                alertify.error(
                    'Cancel'
                );
            });



    }
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var numEnemies1 = 4;
var numEnemies2 = 2;
var numEnemies3 = 3;
var numEnemies4 = 1;
var allEnemies = [];
for (var i = 0; i < numEnemies1; i++) {
    allEnemies.push(new Enemy1(i * 101,
        (i + 1) * 83));
}
for (var i = 0; i < numEnemies2; i++) {
    allEnemies.push(new Enemy2(i * 101,
        (i + 1) * 83));
}
for (var i = 0; i < numEnemies3; i++) {
    allEnemies.push(new Enemy3(i * 101,
        (i + 1) * 83));
}
for (var i = 0; i < numEnemies4; i++) {
    allEnemies.push(new Enemy4(i * 101,
        (i + 1) * 83));
}

var player = new Player();
var score = new Score();




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup',
    function(e) {
        var allowedKeys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
        };

        player.handleInput(
            allowedKeys[e.keyCode]
        );
    });

function getRandomInt(min, max) {
    return Math.floor((Math.random() *
        (max - min + 1)) + min);
}



var arrow_keys_handler = function(e) {
    switch (e.keyCode) {
        case 37:
        case 39:
        case 38:
        case 40: // Arrow keys
        case 32:
            e.preventDefault();
            break; // Space
        default:
            break; // do not block other keys
    }
};
window.addEventListener("keydown",
    arrow_keys_handler, false);