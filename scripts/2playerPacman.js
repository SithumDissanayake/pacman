// 1 = <div class='wall'></div>
// 2 = <div class='coin'></div>
// 3 = <div class='ground'></div>
// 4 = <div class='powerPill'></div>
// 5 = <div class='vulnerableGhost'></div>
// 6 = <div class='player2'></div>
// 7 = <div class='leftTeleport'></div>
// 8 = <div class='rightTeleport'></div>
// 9 = <div class='ghostShadow'></div>
// 10 = <div class='ghostSpeedy'></div>
// 11 = <div class='ghostBashful'></div>
// 12 = <div class='ghostPokey'></div>

player1 = {
	x: 11,
	y: 13,
}
ghostShadow = {
	x: 11,
	y: 13,
}
ghostSpeedy = {
	x: 10,
	y: 13,
}
ghostBashful = {
	x: 11,
	y: 8,
}
ghostPokey = {
	x: 12,
	y: 8,
}



map = [
	[3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3],
	[3,3,3,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,3,3,3],
	[3,3,3,1,2,1,1,2,1,1,2,1,2,1,1,2,1,1,2,1,3,3,3],
	[3,3,3,1,4,1,1,2,1,1,2,7,2,1,1,2,1,1,4,1,3,3,3],
	[3,3,3,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,3,3,3],
	[3,3,3,1,2,1,1,2,1,2,1,1,1,2,1,2,1,1,2,1,3,3,3],
	[3,3,3,1,2,2,2,2,3,3,3,3,3,3,3,2,2,2,2,1,3,3,3],
	[3,3,3,1,1,1,2,1,3,1,1,1,1,1,3,1,2,1,1,1,3,3,3],
	[8,8,8,3,3,3,2,1,3,1,1,1,1,1,3,1,2,3,3,3,9,9,9],
	[3,3,3,1,1,1,2,1,3,1,1,1,1,1,3,1,2,1,1,1,3,3,3],
	[3,3,3,1,2,2,2,2,3,3,3,3,3,3,3,2,2,2,2,1,3,3,3],
	[3,3,3,1,2,1,1,1,1,2,1,1,1,2,1,1,1,1,2,1,3,3,3],
	[3,3,3,1,4,2,2,1,1,2,1,1,1,2,1,1,2,2,4,1,3,3,3],
	[3,3,3,1,1,1,2,2,2,2,2,6,2,2,2,2,2,1,1,1,3,3,3],
	[3,3,3,1,2,2,2,1,1,2,1,1,1,2,1,1,2,2,2,1,3,3,3],
	[3,3,3,1,2,1,1,1,1,2,1,1,1,2,1,1,1,1,2,1,3,3,3],
	[3,3,3,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,3,3,3],
	[3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3]
]
var level = document.getElementById('game'),
		lives = 3,
		numberOfCoins = 0,
		collectedCoins = 0,
		score = 0,
    highscore = 0,
    storagedHighScore = localStorage.getItem("highscore");

    if (storagedHighScore  || score > parseInt(storagedHighScore)) {
      localStorage.setItem("highscore", score);
    }
document.getElementById('highscore').innerHTML = storagedHighScore;


function drawWorld(){
	level.innerHTML = '';
	for(var y = 0; y < map.length ; y++) {
		for(var x = 0; x < map[y].length ; x++) {
			if (map[y][x] === 1) {
				level.innerHTML += "<div class='wall'></div>";
			}
			else if (map[y][x] === 2) {
				level.innerHTML += "<div class='coin'></div>";
				numberOfCoins++;
			}
			else if (map[y][x] === 3) {
				level.innerHTML += "<div class='ground'></div>";
			}
			else if (map[y][x] === 4) {
				level.innerHTML += "<div class='powerPill'></div>";
				numberOfCoins++;
			}
			else if (map[y][x] === 5) {
				level.innerHTML += "<div class='vulnerableGhost'></div>";
			}
			else if (map[y][x] === 6) {
				level.innerHTML += "<div class='player1'></div>";
			}
      else if (map[y][x] === 7) {
        level.innerHTML += "<div class='player2'></div>";
      }
			else if (map[y][x] === 8) {
				level.innerHTML += "<div class='leftTeleport'></div>";
			}
			else if (map[y][x] === 9) {
				level.innerHTML += "<div class='rightTeleport'></div>";
			}
			numberOfCoins - numberOfCoins
		}
		level.innerHTML += "<br>";
	}
}

drawWorld();
if (collectedCoins == numberOfCoins){
	var nextWeb = "winner.html";
	window.location.assign(nextWeb);
}



//PLAYER 1

 // player1MovesLeft
document.onkeydown = function(event){
	if (event.keyCode === 65){
		if (map[player1.y][player1.x-1] !== 1){
			map[player1.y][player1.x] = 3;
			player1.x = player1.x - 1;
			map[player1.y][player1.x] = 6;
			if (map[player1.y][player1.x-1] == 2){
				collectedCoins++
				score = score + 10;
				document.getElementById('2playerScore').innerHTML = score;
			}
			else if (map[player1.y][player1.x-1] == 4){
				collectedCoins++
				score = score + 50;
				document.getElementById('2playerScore').innerHTML = score;
			}
			else if(map[player1.y][player1.x-1] == 8){
				player1 = {
					x: 19,
					y: 8
				}
			}

			drawWorld();
		}
	}
	// player1MovesUp
	else if (event.keyCode === 87){
		if (map[player1.y-1][player1.x] !== 1){
			//setInterval(function() {
				map[player1.y][player1.x] = 3;
				player1.y = player1.y - 1;
				map[player1.y][player1.x] = 6;
			//}, 1000);

			if (map[player1.y-1][player1.x] == 2){
				collectedCoins++
				score = score + 10;
				document.getElementById('2playerScore').innerHTML = score;
			}
			else if (map[player1.y-1][player1.x] == 4){
				collectedCoins++
				score = score + 50;
				document.getElementById('2playerScore').innerHTML = score;
			}
			else if(map[player1.y-1][player1.x] == 4){
			}
			drawWorld();
		}
	}
	//player1MovesRight
	else if (event.keyCode === 68){
		if (map[player1.y][player1.x+1] !== 1){
			map[player1.y][player1.x] = 3;
			player1.x = player1.x + 1;
			map[player1.y][player1.x] = 6;
			if (map[player1.y][player1.x+1] == 2){
				collectedCoins++
				score = score + 10;
				document.getElementById('2playerScore').innerHTML = score;
			}
			else if (map[player1.y][player1.x+1] == 4){
				collectedCoins++
				score = score + 50;
				document.getElementById('2playerScore').innerHTML = score;
			}
			else if(map[player1.y][player1.x+1] == 9){
				player1 = {
					x: 3,
					y: 8
				}
			}
			else if(map[player1.y][player1.x+1] == 4){
			}
			drawWorld();
		}
	}
	//player1MovesDown
	else if (event.keyCode === 83){
		if (map[player1.y+1][player1.x] !== 1){
			map[player1.y][player1.x] = 3;
			player1.y = player1.y + 1;
			map[player1.y][player1.x] = 6;
			if (map[player1.y+1][player1.x] == 2){
				collectedCoins++
				score = score + 10;
				document.getElementById('2playerScore').innerHTML = score;
			}
			else if (map[player1.y+1][player1.x] == 4){
				collectedCoins++
				score = score + 50;
				document.getElementById('2playerScore').innerHTML = score;
			}
			else if(map[player1.y+1][player1.x] == 4){
			}
			drawWorld();
		}
	}
}

//PLAYER 2

 // player2MovesLeft
document.onkeydown = function(event){
	if (event.keyCode === 37){
		if (map[player2.y][player2.x-1] !== 1){
			map[player2.y][player2.x] = 3;
			player2.x = player2.x - 1;
			map[player2.y][player2.x] = 7;
			if (map[player2.y][player2.x-1] == 2){
				collectedCoins++
				score = score + 10;
				document.getElementById('2playerScore').innerHTML = score;
			}
			else if (map[player2.y][player2.x-1] == 4){
				collectedCoins++
				score = score + 50;
				document.getElementById('2playerScore').innerHTML = score;
			}
			else if(map[player2.y][player2.x-1] == 8){
				player2 = {
					x: 19,
					y: 8
				}
			}
			for(var i = 9; i <=  12; i++){
			if(map[player2.y][player2.x-1] == [i]){

			}
		}
			drawWorld();
		}
	}
	// player2MovesUp
	else if (event.keyCode === 38){
		if (map[player2.y-1][player2.x] !== 1){
			//setInterval(function() {
				map[player2.y][player2.x] = 3;
				player2.y = player2.y - 1;
				map[player2.y][player2.x] = 7;
			//}, 1000);

			if (map[player2.y-1][player2.x] == 2){
				collectedCoins++
				score = score + 10;
				document.getElementById('2playerScore').innerHTML = score;
			}
			else if (map[player2.y-1][player2.x] == 4){
				collectedCoins++
				score = score + 50;
				document.getElementById('2playerScore').innerHTML = score;
			}
			else if(map[player2.y-1][player2.x] == 4){
			}
			drawWorld();
		}
	}
	//player2MovesRight
	else if (event.keyCode === 39){
		if (map[player2.y][player2.x+1] !== 1){
			map[player2.y][player2.x] = 3;
			player2.x = player2.x + 1;
			map[player2.y][player2.x] = 7;
			if (map[player2.y][player2.x+1] == 2){
				collectedCoins++
				score = score + 10;
				document.getElementById('2playerScore').innerHTML = score;
			}
			else if (map[player2.y][player2.x+1] == 4){
				collectedCoins++
				score = score + 50;
				document.getElementById('2playerScore').innerHTML = score;
			}
			else if(map[player2.y][player2.x+1] == 9){
				player2 = {
					x: 3,
					y: 8
				}
			}
			else if(map[player2.y][player2.x+1] == 4){
			}
			drawWorld();
		}
	}
	//player2MovesDown
	else if (event.keyCode === 40){
		if (map[player2.y+1][player2.x] !== 1){
			map[player2.y][player2.x] = 3;
			player2.y = player2.y + 1;
			map[player2.y][player2.x] = 7;
			if (map[player2.y+1][player2.x] == 2){
				collectedCoins++
				score = score + 10;
				document.getElementById('2playerScore').innerHTML = score;
			}
			else if (map[player2.y+1][player2.x] == 4){
				collectedCoins++
				score = score + 50;
				document.getElementById('2playerScore').innerHTML = score;
			}
			else if(map[player2.y+1][player2.x] == 4){
			}
			drawWorld();
		}
	}
}

/*
if (true){
drawWorld();
}

function loop(){
	requestAnimationFrame(loop)
}

requestAnimationFrame(loop){
	drawWorld();
}
*/
