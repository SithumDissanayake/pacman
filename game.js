// 1 = <div class='wall'></div>
// 2 = <div class='coin'></div>
// 3 = <div class='ground'></div>
// 4 = <div class='powerPill'></div>
// 5 = <div class='vulnerableGhost'></div>
// 6 = <div class='pacman'></div>
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
	[3,3,3,1,4,1,1,2,1,1,2,2,2,1,1,2,1,1,4,1,3,3,3],
	[3,3,3,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,3,3,3],
	[3,3,3,1,2,1,1,2,1,2,1,1,1,2,1,2,1,1,2,1,3,3,3],
	[3,3,3,1,2,2,2,2,3,3,3,9,3,3,3,2,2,2,2,1,3,3,3],
	[3,3,3,1,1,1,2,1,3,1,1,3,1,1,3,1,2,1,1,1,3,3,3],
	[7,7,7,3,3,3,2,1,3,1,11,10,12,1,3,1,2,3,3,3,8,8,8],
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
		score = 0;

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
			console.log(numberOfCoins);
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

 // pacmanMovesLeft
document.onkeydown = function(event){
	if (event.keyCode === 37 || event.keyCode === 65){
		if (map[pacman.y][pacman.x-1] !== 1){
			map[pacman.y][pacman.x] = 3;
			pacman.x = pacman.x - 1;
			map[pacman.y][pacman.x] = 6;
			if (map[pacman.y][pacman.x-1] == 2){
				collectedCoins++
				console.log(collectedCoins);
				score = score + 10;
				document.getElementById('score').innerHTML = score;
			}
			else if (map[pacman.y][pacman.x-1] == 4){
				collectedCoins++
				console.log(collectedCoins);
				score = score + 50;
				document.getElementById('score').innerHTML = score;
			}
			else if(map[pacman.y][pacman.x-1] == 7){
				pacman = {
					x: 19,
					y: 8
				}
			}
			for(var i = 9; i <=  12; i++){
			if(map[pacman.y][pacman.x-1] == [i]){

			}
		}
			drawWorld();
		}
	}
	// pacmanMovesUp
	else if (event.keyCode === 38 || event.keyCode === 87){
		if (map[pacman.y-1][pacman.x] !== 1){
			//setInterval(function() {
				map[pacman.y][pacman.x] = 3;
				pacman.y = pacman.y - 1;
				map[pacman.y][pacman.x] = 6;
			//}, 1000);

			if (map[pacman.y-1][pacman.x] == 2){
				collectedCoins++
				console.log(collectedCoins);
				score = score + 10;
				document.getElementById('score').innerHTML = score;
			}
			else if (map[pacman.y-1][pacman.x] == 4){
				collectedCoins++
				console.log(collectedCoins);
				score = score + 50;
				document.getElementById('score').innerHTML = score;
			}
			else if(map[pacman.y-1][pacman.x] == 4){
			}
			drawWorld();
		}
	}
	//pacmanMovesRight
	else if (event.keyCode === 39 || event.keyCode === 68){
		if (map[pacman.y][pacman.x+1] !== 1){
			map[pacman.y][pacman.x] = 3;
			pacman.x = pacman.x + 1;
			map[pacman.y][pacman.x] = 6;
			if (map[pacman.y][pacman.x+1] == 2){
				collectedCoins++
				console.log(collectedCoins);
				score = score + 10;
				document.getElementById('score').innerHTML = score;
			}
			else if (map[pacman.y][pacman.x+1] == 4){
				collectedCoins++
				console.log(collectedCoins);
				score = score + 50;
				document.getElementById('score').innerHTML = score;
			}
			else if(map[pacman.y][pacman.x+1] == 8){
				pacman = {
					x: 3,
					y: 8
				}
			}
			else if(map[pacman.y][pacman.x+1] == 4){
			}
			drawWorld();
		}
	}
	//pacmanMovesDown
	else if (event.keyCode === 40 || event.keyCode === 83){
		if (map[pacman.y+1][pacman.x] !== 1){
			map[pacman.y][pacman.x] = 3;
			pacman.y = pacman.y + 1;
			map[pacman.y][pacman.x] = 6;
			if (map[pacman.y+1][pacman.x] == 2){
				collectedCoins++
				console.log(collectedCoins);
				score = score + 10;
				document.getElementById('score').innerHTML = score;
			}
			else if (map[pacman.y+1][pacman.x] == 4){
				collectedCoins++
				console.log(collectedCoins);
				score = score + 50;
				document.getElementById('score').innerHTML = score;
			}
			else if(map[pacman.y+1][pacman.x] == 4){
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
