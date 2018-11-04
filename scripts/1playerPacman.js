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

pacman = {
	x: 11,
	y: 13,
}
ghostShadow = {
	x: 11,
	y: 6,
}
ghostSpeedy = {
	x: 10,
	y: 8,
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
	[3,3,3,1,4,1,1,2,1,1,2,2,2,1,1,2,1,1,4,1,3,3,3],
	[3,3,3,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,3,3,3],
	[3,3,3,1,2,1,1,2,1,2,1,1,1,2,1,2,1,1,2,1,3,3,3],
	[3,3,3,1,2,2,2,2,3,3,3,9,3,3,3,2,2,2,2,1,3,3,3],
	[3,3,3,1,1,1,2,1,3,1,1,3,1,1,3,1,2,1,1,1,3,3,3],
	[7,7,7,7,3,3,2,1,3,3,11,10,12,3,3,1,2,3,3,8,8,8,8],
	[3,3,3,1,1,1,2,1,3,1,1,3,1,1,3,1,2,1,1,1,3,3,3],
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
	score = 0,
	highscore = 0;

localStorage.setItem("highscore",0);
if (score > parseInt(localStorage.getItem("highscore"))) {
	localStorage.setItem("highscore", score);
}
document.getElementById('highscore').innerHTML = highscore;

function drawWorld(){
	if (score >= 1000){
		winner();
	}
	level.innerHTML = '';
	for(var y = 0; y < map.length ; y++) {
		for(var x = 0; x < map[y].length ; x++) {
			if (map[y][x] === 1) {
				level.innerHTML += "<div class='wall'></div>";
			}
			else if (map[y][x] === 2) {
				level.innerHTML += "<div class='coin'></div>";
			}
			else if (map[y][x] === 3) {
				level.innerHTML += "<div class='ground'></div>";
			}
			else if (map[y][x] === 4) {
				level.innerHTML += "<div class='powerPill'></div>";
			}
			else if (map[y][x] === 5) {
				level.innerHTML += "<div class='vulnerableGhost'></div>";
			}
			else if (map[y][x] === 6) {
				level.innerHTML += "<div class='pacman'></div>";
			}
			else if (map[y][x] === 7) {
				level.innerHTML += "<div class='leftTeleport'></div>";
			}
			else if (map[y][x] === 8) {
				level.innerHTML += "<div class='rightTeleport'></div>";
			}
			else if (map[y][x] === 9) {
				level.innerHTML += "<div class='ghostShadow'></div>";
			}
			else if (map[y][x] === 10) {
				level.innerHTML += "<div class='ghostSpeedy'></div>";
			}
			else if (map[y][x] === 11) {
				level.innerHTML += "<div class='ghostBashful'></div>";
			}
			else if (map[y][x] === 12) {
				level.innerHTML += "<div class='ghostPokey'></div>";
			}
			else if (map[y][x] === 13) {
				level.innerHTML += "<div class='ghostWall'></div>";
			}
		}
		level.innerHTML += "<br>";
	}
}

drawWorld();

function winner() {
	window.location.href = "endscreens/1playerWinner.html";
}
function gameOver(){
	window.location.href = "endscreens/1playerGameOver.html";
}

//1 = left
//2 = up
//3 = right
//4 = down


document.onkeydown = function(event){
	var ghostShadowMovement = Math.floor((Math.random() * 4) + 1);
	var ghostSpeedyMovement = Math.floor((Math.random() * 4) + 1);
	var ghostBashfulMovement = Math.floor((Math.random() * 4) + 1);
	var ghostPokeyMovement = Math.floor((Math.random() * 4) + 1);

	if(ghostShadowMovement == 1 ){
		if(map[ghostShadow.y][ghostShadow.x-1] !== 1 && map[ghostShadow.y][ghostShadow.x-1] !== 10 && map[ghostShadow.y][ghostShadow.x-1] !== 11 && map[ghostShadow.y][ghostShadow.x-1] !== 12 && map[ghostShadow.y][ghostShadow.x-1] !== 13){
			map[ghostShadow.y][ghostShadow.x] = 2;
			ghostShadow.x = ghostShadow.x - 1;
			map[ghostShadow.y][ghostShadow.x] = 9;
		}
	}
	else if(ghostSpeedyMovement == 1 ){
		if(map[ghostSpeedy.y][ghostSpeedy.x-1] !== 1 && map[ghostSpeedy.y][ghostSpeedy.x-1] !== 10 && map[ghostSpeedy.y][ghostSpeedy.x-1] !== 11 && map[ghostSpeedy.y][ghostSpeedy.x-1] !== 12 && map[ghostSpeedy.y][ghostSpeedy.x-1] !== 13){
			map[ghostSpeedy.y][ghostSpeedy.x] = 2;
			ghostSpeedy.x = ghostSpeedy.x - 1;
			map[ghostSpeedy.y][ghostSpeedy.x] = 10;
		}
	}
	else if(ghostBashfulMovement == 1 ){
		if(map[ghostBashful.y][ghostBashful.x-1] !== 1 && map[ghostBashful.y][ghostBashful.x-1] !== 10 && map[ghostBashful.y][ghostBashful.x-1] !== 11 && map[ghostBashful.y][ghostBashful.x-1] !== 12 && map[ghostBashful.y][ghostBashful.x-1] !== 13){
			map[ghostBashful.y][ghostBashful.x] = 2;
			ghostBashful.x = ghostBashful.x - 1;
			map[ghostBashful.y][ghostBashful.x] = 11;
		}
	}
	else if(ghostPokeyMovement == 1 ){
		if(map[ghostPokey.y][ghostPokey.x-1] !== 1 && map[ghostPokey.y][ghostPokey.x-1] !== 10 && map[ghostPokey.y][ghostPokey.x-1] !== 11 && map[ghostPokey.y][ghostPokey.x-1] !== 12 && map[ghostPokey.y][ghostPokey.x-1] !== 13){
		  map[ghostPokey.y][ghostPokey.x] = 2;
		  ghostPokey.x = ghostPokey.x - 1;
		  map[ghostPokey.y][ghostPokey.x] = 12;
		}
	}

	if(ghostShadowMovement == 2 ){
		if(map[ghostShadow.y-1][ghostShadow.x] !== 1 && map[ghostShadow.y-1][ghostShadow.x] !== 10 && map[ghostShadow.y-1][ghostShadow.x] !== 11 && map[ghostShadow.y-1][ghostShadow.x] !== 12 && map[ghostShadow.y-1][ghostShadow.x] !== 13){
			map[ghostShadow.y][ghostShadow.x] = 2;
			ghostShadow.y = ghostShadow.y - 1;
			map[ghostShadow.y][ghostShadow.x] = 9;
		}
	}
	else if(ghostSpeedyMovement == 2 ){
		if(map[ghostSpeedy.y-1][ghostSpeedy.x] !== 1 && map[ghostSpeedy.y-1][ghostSpeedy.x] !== 10 && map[ghostSpeedy.y-1][ghostSpeedy.x] !== 11 && map[ghostSpeedy.y-1][ghostSpeedy.x] !== 12 && map[ghostSpeedy.y-1][ghostSpeedy.x] !== 13){
		  map[ghostSpeedy.y][ghostSpeedy.x] = 2;
		  ghostSpeedy.y = ghostSpeedy.y - 1;
		  map[ghostSpeedy.y][ghostSpeedy.x] = 10;
		}
	}
	else if(ghostBashfulMovement == 2 ){
		if(map[ghostBashful.y-1][ghostBashful.x] !== 1 && map[ghostBashful.y-1][ghostBashful.x] !== 10 && map[ghostBashful.y-1][ghostBashful.x] !== 11 && map[ghostBashful.y-1][ghostBashful.x] !== 12 && map[ghostBashful.y-1][ghostBashful.x] !== 13){
		  map[ghostBashful.y][ghostBashful.x] = 2;
		  ghostBashful.y = ghostBashful.y - 1;
		  map[ghostBashful.y][ghostBashful.x] = 11;
		}
	}
	else if(ghostPokeyMovement == 2 ){
		if(map[ghostPokey.y-1][ghostPokey.x] !== 1 && map[ghostPokey.y-1][ghostPokey.x] !== 10 && map[ghostPokey.y-1][ghostPokey.x] !== 11 && map[ghostPokey.y-1][ghostPokey.x] !== 12 && map[ghostPokey.y-1][ghostPokey.x] !== 13){
		  map[ghostPokey.y][ghostPokey.x] = 2;
		  ghostPokey.y = ghostPokey.y - 1;
		  map[ghostPokey.y][ghostPokey.x] = 12;
		}
	}

	if(ghostShadowMovement == 3 ){
		if(map[ghostShadow.y][ghostShadow.x+1] !== 1 && map[ghostShadow.y][ghostShadow.x+1] !== 10 && map[ghostShadow.y][ghostShadow.x+1] !== 11 && map[ghostShadow.y][ghostShadow.x+1] !== 12 && map[ghostShadow.y][ghostShadow.x+1] !== 13){
			map[ghostShadow.y][ghostShadow.x] = 2;
			ghostShadow.x = ghostShadow.x + 1;
			map[ghostShadow.y][ghostShadow.x] = 9;
		}
	}
	else if(ghostSpeedyMovement == 3 ){
		if(map[ghostSpeedy.y][ghostSpeedy.x+1] !== 1 && map[ghostSpeedy.y][ghostSpeedy.x+1] !== 10 && map[ghostSpeedy.y][ghostSpeedy.x+1] !== 11 && map[ghostSpeedy.y][ghostSpeedy.x+1] !== 12 && map[ghostSpeedy.y][ghostSpeedy.x+1] !== 13){
		  map[ghostSpeedy.y][ghostSpeedy.x] = 2;
		  ghostSpeedy.x = ghostSpeedy.x + 1;
		  map[ghostSpeedy.y][ghostSpeedy.x] = 10;
		}
	}
	else if(ghostBashfulMovement == 3 ){
		if(map[ghostBashful.y][ghostBashful.x+1] !== 1 && map[ghostBashful.y][ghostBashful.x+1] !== 10 && map[ghostBashful.y][ghostBashful.x+1] !== 11 && map[ghostBashful.y][ghostBashful.x+1] !== 12 && map[ghostBashful.y][ghostBashful.x+1] !== 13){
		  map[ghostBashful.y][ghostBashful.x] = 2;
		  ghostBashful.x = ghostBashful.x + 1;
		  map[ghostBashful.y][ghostBashful.x] = 11;
		}
	}
	else if(ghostPokeyMovement == 3 ){
		if(map[ghostPokey.y][ghostPokey.x+1] !== 1 && map[ghostPokey.y][ghostPokey.x+1] !== 10 && map[ghostPokey.y][ghostPokey.x+1] !== 11 && map[ghostPokey.y][ghostPokey.x+1] !== 12 && map[ghostPokey.y][ghostPokey.x+1] !== 13){
		  map[ghostPokey.y][ghostPokey.x] = 2;
		  ghostPokey.x = ghostPokey.x + 1;
		  map[ghostPokey.y][ghostPokey.x] = 12;
		}
	}

	if(ghostShadowMovement == 4 ){
		if(map[ghostShadow.y+1][ghostShadow.x] !== 1 && map[ghostShadow.y+1][ghostShadow.x] !== 10 && map[ghostShadow.y+1][ghostShadow.x] !== 11 && map[ghostShadow.y+1][ghostShadow.x] !== 12 && map[ghostShadow.y+1][ghostShadow.x] !== 13){
			map[ghostShadow.y][ghostShadow.x] = 2;
			ghostShadow.y = ghostShadow.y + 1;
			map[ghostShadow.y][ghostShadow.x] = 9;
		}
	}
	else if(ghostSpeedyMovement == 4 ){
		if(map[ghostSpeedy.y+1][ghostSpeedy.x] !== 1 && map[ghostSpeedy.y+1][ghostSpeedy.x] !== 10 && map[ghostSpeedy.y+1][ghostSpeedy.x] !== 11 && map[ghostSpeedy.y+1][ghostSpeedy.x] !== 12 && map[ghostSpeedy.y+1][ghostSpeedy.x] !== 13){
		  map[ghostSpeedy.y][ghostSpeedy.x] = 2;
		  ghostSpeedy.y = ghostSpeedy.y + 1;
		  map[ghostSpeedy.y][ghostSpeedy.x] = 10;
		}
	}
	else if(ghostBashfulMovement == 4 ){
		if(map[ghostBashful.y+1][ghostBashful.x] !== 1 && map[ghostBashful.y+1][ghostBashful.x] !== 10 && map[ghostBashful.y+1][ghostBashful.x] !== 11 && map[ghostBashful.y+1][ghostBashful.x] !== 12 && map[ghostBashful.y+1][ghostBashful.x] !== 13){
		  map[ghostBashful.y][ghostBashful.x] = 2;
		  ghostBashful.y = ghostBashful.y + 1;
		  map[ghostBashful.y][ghostBashful.x] = 11;
		}
	}
	else if(ghostPokeyMovement == 4 ){
		if(map[ghostPokey.y+1][ghostPokey.x] !== 1 && map[ghostPokey.y+1][ghostPokey.x] !== 10 && map[ghostPokey.y+1][ghostPokey.x] !== 11 && map[ghostPokey.y+1][ghostPokey.x] !== 12 && map[ghostPokey.y+1][ghostPokey.x] !== 13){
		  map[ghostPokey.y][ghostPokey.x] = 2;
		  ghostPokey.y = ghostPokey.y + 1;
		  map[ghostPokey.y][ghostPokey.x] = 12;
		}
	}

	// PACMAN MOVE LEFT
	if (event.keyCode === 37 || event.keyCode === 65){
		if (map[pacman.y][pacman.x-1] !== 1){
			map[pacman.y][pacman.x] = 3;
			pacman.x = pacman.x - 1;
			map[pacman.y][pacman.x] = 6;
			if (map[pacman.y][pacman.x-1] == 2){
				score = score + 10;
				document.getElementById('score').innerHTML = score;
			}
			else if (map[pacman.y][pacman.x-1] == 4){
				score = score + 50;
				document.getElementById('score').innerHTML = score;
			}
			else if (map[pacman.y][pacman.x-1] == 9 || map[pacman.y][pacman.x-1] == 10 || map[pacman.y][pacman.x-1] == 11 || map[pacman.y][pacman.x-1] == 12){
				gameOver();
			}
			else if(map[pacman.y][pacman.x-1] == 7){
				map[pacman.y][pacman.x] = 3;
				pacman = {
					x: 19,
					y: 8
				}
			}
			drawWorld();
		}
	}




	// PACMAN MOVE UP
	else if (event.keyCode === 38 || event.keyCode === 87){
		if (map[pacman.y-1][pacman.x] !== 1){
			map[pacman.y][pacman.x] = 3;
			pacman.y = pacman.y - 1;
			map[pacman.y][pacman.x] = 6;

			if (map[pacman.y-1][pacman.x] == 2){
				score = score + 10;
				document.getElementById('score').innerHTML = score;
			}
			else if (map[pacman.y-1][pacman.x] == 4){
				score = score + 50;
				document.getElementById('score').innerHTML = score;
			}
			else if(map[pacman.y-1][pacman.x] == 4){
			}
			else if (map[pacman.y-1][pacman.x] == 9 || map[pacman.y-1][pacman.x] == 10 || map[pacman.y-1][pacman.x] == 11 || map[pacman.y-1][pacman.x] == 12){
				gameOver();
			}
			drawWorld();
		}
	}





	// PACMAN MOVE RIGHT
	else if (event.keyCode === 39 || event.keyCode === 68){
		if (map[pacman.y][pacman.x+1] !== 1){
			map[pacman.y][pacman.x] = 3;
			pacman.x = pacman.x + 1;
			map[pacman.y][pacman.x] = 6;
			if (map[pacman.y][pacman.x+1] == 2){
				score = score + 10;
				document.getElementById('score').innerHTML = score;
			}
			else if (map[pacman.y][pacman.x+1] == 4){
				score = score + 50;
				document.getElementById('score').innerHTML = score;
			}
			else if(map[pacman.y][pacman.x+1] == 8){
				map[pacman.y][pacman.x] = 3;
				pacman = {
					x: 3,
					y: 8
				}
			}
			else if(map[pacman.y][pacman.x+1] == 4){
			}
			else if (map[pacman.y][pacman.x+1] == 9 || map[pacman.y][pacman.x+1] == 10 || map[pacman.y][pacman.x+1] == 11 || map[pacman.y][pacman.x+1] == 12){
				gameOver();
			}
			drawWorld();
		}
	}




	// PACMAN MOVE DOWN
	else if (event.keyCode === 40 || event.keyCode === 83){
		if (map[pacman.y+1][pacman.x] !== 1){
			map[pacman.y][pacman.x] = 3;
			pacman.y = pacman.y + 1;
			map[pacman.y][pacman.x] = 6;
			if (map[pacman.y+1][pacman.x] == 2){
				score = score + 10;
				document.getElementById('score').innerHTML = score;
			}
			else if (map[pacman.y+1][pacman.x] == 4){
				score = score + 50;
				document.getElementById('score').innerHTML = score;
			}
			else if(map[pacman.y+1][pacman.x] == 4){
			}
			else if (map[pacman.y+1][pacman.x] == 9 || map[pacman.y+1][pacman.x] == 10 || map[pacman.y+1][pacman.x] == 11 || map[pacman.y+1][pacman.x] == 12){
				gameOver();
			}
			drawWorld();
		}
	}
}
