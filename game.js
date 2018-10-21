// 1 = <div class='wall'></div>
// 2 = <div class='coin'></div>
// 3 = <div class='ground'></div>
// 4 = <div class='powerpill'></div>
// 5 = <div class='ghost'></div>
// 6 = <div class='pacman'></div>


pacman = {
  x: 8,
  y: 13
}

map = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1],
  [1,2,1,1,2,1,1,2,1,2,1,1,2,1,1,2,1],
  [1,4,1,1,2,1,1,2,2,2,1,1,2,1,1,4,1],
  [1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1],
  [1,2,1,1,2,1,2,2,2,2,2,1,2,1,1,2,1],
  [1,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,1],
  [1,1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,1],
  [2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2],
  [1,1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,1],
  [1,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,1],
  [1,2,1,1,1,1,2,1,1,1,2,1,1,1,1,2,1],
  [1,4,2,2,1,1,2,2,1,2,2,1,1,2,2,4,1],
  [1,1,1,2,2,2,2,2,6,2,2,2,2,2,1,1,1],
  [1,2,2,2,1,2,2,1,1,1,2,2,1,2,2,2,1],
  [1,2,1,1,1,1,2,2,1,2,2,1,1,1,1,2,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]

var level = document.getElementById('game');
var score = 0;

function drawWorld(){
  level.innerHTML = '';
  for(var y = 0; y < map.length ; y = y + 1) {
    for(var x = 0; x < map[y].length ; x = x + 1) {
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
        level.innerHTML += "<div class='powerpill'></div>";
      }
      else if (map[y][x] === 5) {
        level.innerHTML += "<div class='ghost'></div>";
      }
      else if (map[y][x] === 6) {
        level.innerHTML += "<div class='pacman'></div>";
      }
    }
    level.innerHTML += "<br>";
  }
}

drawWorld();

document.onkeydown = function(event){
  if (event.keyCode === 37){ // PACMAN MOVE LEFT
    if (map[pacman.y][pacman.x-1] !== 1){
      map[pacman.y][pacman.x] = 3;
      pacman.x = pacman.x - 1;
      map[pacman.y][pacman.x] = 6;
      if (map[pacman.y][pacman.x-1] == 2 || map[pacman.y][pacman.x-1] == 4){
        score = score + 10;
        document.getElementById('score').innerHTML = score;
      }
      drawWorld();
    }
  }
  else if (event.keyCode === 38){ // PACMAN MOVE UP
    if (map[pacman.y-1][pacman.x] !== 1){
      map[pacman.y][pacman.x] = 3;
      pacman.y = pacman.y - 1;
      map[pacman.y][pacman.x] = 6;
      if (map[pacman.y-1][pacman.x] == 2 || map[pacman.y-1][pacman.x] == 4){
        score = score + 10;
        document.getElementById('score').innerHTML = score;
      }
      drawWorld();
    }
  }
  else if (event.keyCode === 39){ // PACMAN MOVE RIGHT
    if (map[pacman.y][pacman.x+1] !== 1){
      map[pacman.y][pacman.x] = 3;
      pacman.x = pacman.x + 1;
      map[pacman.y][pacman.x] = 6;
      if (map[pacman.y][pacman.x+1] == 2 || map[pacman.y][pacman.x+1] == 4){
        score = score + 10;
        document.getElementById('score').innerHTML = score;
      }
      drawWorld();
    }
  }
  else if (event.keyCode === 40){ // PACMAN MOVE DOWN
    if (map[pacman.y+1][pacman.x] !== 1){
      map[pacman.y][pacman.x] = 3;
      pacman.y = pacman.y + 1;
      map[pacman.y][pacman.x] = 6;
      if (map[pacman.y+1][pacman.x] == 2 || map[pacman.y+1][pacman.x] == 4){
        score = score + 10;
        document.getElementById('score').innerHTML = score;
      }
      drawWorld();
    }
  }
}
