//Sets up coordinates for each moveable object
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


//Map, mulitple arrays that will be read off to place all the divs

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

map = [
    [3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 4, 1, 1, 2, 1, 1, 2, 2, 2, 1, 1, 2, 1, 1, 4, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 2, 2, 2, 3, 3, 3, 9, 3, 3, 3, 2, 2, 2, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 1, 1, 2, 1, 3, 1, 1, 3, 1, 1, 3, 1, 2, 1, 1, 1, 3, 3, 3],
    [7, 7, 7, 7, 3, 3, 2, 1, 3, 3, 11, 10, 12, 3, 3, 1, 2, 3, 3, 8, 8, 8, 8],
    [3, 3, 3, 1, 1, 1, 2, 1, 3, 1, 1, 3, 1, 1, 3, 1, 2, 1, 1, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 4, 2, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 4, 1, 3, 3, 3],
    [3, 3, 3, 1, 1, 1, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 2, 1, 1, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 2, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3]
]

//Sets variables needed
var level = document.getElementById('game'),
    score = 0;

//Function used to make the map each time
function drawWorld() {
    //Checks for when the player has hit 1000 score, then activates winner();
    if (score >= 1000) {
        winner();
    }
    level.innerHTML = '';
    //The double for loop checks loop through all the arrys in the map, placing objects as needed
    for (var y = 0; y < map.length; y++) {
        for (var x = 0; x < map[y].length; x++) {
            if (map[y][x] === 1) {
                //wall
                level.innerHTML += "<div class='wall'></div>";
            } else if (map[y][x] === 2) {
                //coin
                level.innerHTML += "<div class='coin'></div>";
            } else if (map[y][x] === 3) {
                //ground
                level.innerHTML += "<div class='ground'></div>";
            } else if (map[y][x] === 4) {
                //powerPill
                level.innerHTML += "<div class='powerPill'></div>";
            } else if (map[y][x] === 5) {
                //vulnerableGhost
                level.innerHTML += "<div class='vulnerableGhost'></div>";
            } else if (map[y][x] === 6) {
                //pacman
                level.innerHTML += "<div class='pacman'></div>";
            } else if (map[y][x] === 7) {
                //leftTeleport
                level.innerHTML += "<div class='leftTeleport'></div>";
            } else if (map[y][x] === 8) {
                //rightTeleport
                level.innerHTML += "<div class='rightTeleport'></div>";
            } else if (map[y][x] === 9) {
                //ghostShadow
                level.innerHTML += "<div class='ghostShadow' id='ghost'></div>";
            } else if (map[y][x] === 10) {
                //ghostSpeedy
                level.innerHTML += "<div class='ghostSpeedy' id='ghost'></div>";
            } else if (map[y][x] === 11) {
                //ghostBashful
                level.innerHTML += "<div class='ghostBashful' id='ghost'></div>";
            } else if (map[y][x] === 12) {
                //ghostPokey
                level.innerHTML += "<div class='ghostPokey' id='ghost'></div>";
            }
        }
        level.innerHTML += "<br>";
    }
}

drawWorld();

//Winner function if triggered will take the user to the winner page
function winner() {
    window.location.href = "endscreens/1playerWinner.html";
}
//Gameover function if triggered will take the user to the gameover page
function gameOver() {
    window.location.href = "endscreens/1playerGameOver.html";
}

//Movement for the ghosts and pacman
document.onkeydown = function(event) {

    //1 = left
    //2 = up
    //3 = right
    //4 = down

    //Random number generator for each of the ghosts so each all go in different directions
    var ghostShadowMovement = Math.floor((Math.random() * 4) + 1),
        ghostSpeedyMovement = Math.floor((Math.random() * 4) + 1),
        ghostBashfulMovement = Math.floor((Math.random() * 4) + 1),
        ghostPokeyMovement = Math.floor((Math.random() * 4) + 1);
    //1 = left
    if (ghostShadowMovement == 1) {
        //checks for walls or other ghost to the left of the ghost and if there isnt, lets it move
        if (map[ghostShadow.y][ghostShadow.x - 1] !== 1 && map[ghostShadow.y][ghostShadow.x - 1] !== 10 && map[ghostShadow.y][ghostShadow.x - 1] !== 11 && map[ghostShadow.y][ghostShadow.x - 1] !== 12) {
            map[ghostShadow.y][ghostShadow.x] = 2;
            ghostShadow.x = ghostShadow.x - 1;
            map[ghostShadow.y][ghostShadow.x] = 9;
        }
    }
    //1 = left
    else if (ghostSpeedyMovement == 1) {
        //checks for walls or other ghost to the left of the ghost and if there isnt, lets it move
        if (map[ghostSpeedy.y][ghostSpeedy.x - 1] !== 1 && map[ghostSpeedy.y][ghostSpeedy.x - 1] !== 10 && map[ghostSpeedy.y][ghostSpeedy.x - 1] !== 11 && map[ghostSpeedy.y][ghostSpeedy.x - 1] !== 12) {
            map[ghostSpeedy.y][ghostSpeedy.x] = 2;
            ghostSpeedy.x = ghostSpeedy.x - 1;
            map[ghostSpeedy.y][ghostSpeedy.x] = 10;
        }
    }
    //1 = left
    else if (ghostBashfulMovement == 1) {
        //checks for walls or other ghost to the left of the ghost and if there isnt, lets it move
        if (map[ghostBashful.y][ghostBashful.x - 1] !== 1 && map[ghostBashful.y][ghostBashful.x - 1] !== 10 && map[ghostBashful.y][ghostBashful.x - 1] !== 11 && map[ghostBashful.y][ghostBashful.x - 1] !== 12) {
            map[ghostBashful.y][ghostBashful.x] = 2;
            ghostBashful.x = ghostBashful.x - 1;
            map[ghostBashful.y][ghostBashful.x] = 11;
        }
    }
    //1 = left
    else if (ghostPokeyMovement == 1) {
        //checks for walls or other ghost to the left of the ghost and if there isnt, lets it move
        if (map[ghostPokey.y][ghostPokey.x - 1] !== 1 && map[ghostPokey.y][ghostPokey.x - 1] !== 10 && map[ghostPokey.y][ghostPokey.x - 1] !== 11 && map[ghostPokey.y][ghostPokey.x - 1] !== 12) {
            map[ghostPokey.y][ghostPokey.x] = 2;
            ghostPokey.x = ghostPokey.x - 1;
            map[ghostPokey.y][ghostPokey.x] = 12;
        }
    }
    //2 = up
    if (ghostShadowMovement == 2) {
        //checks for walls or other ghost above the ghost and if there isnt, lets it move
        if (map[ghostShadow.y - 1][ghostShadow.x] !== 1 && map[ghostShadow.y - 1][ghostShadow.x] !== 10 && map[ghostShadow.y - 1][ghostShadow.x] !== 11 && map[ghostShadow.y - 1][ghostShadow.x] !== 12) {
            map[ghostShadow.y][ghostShadow.x] = 2;
            ghostShadow.y = ghostShadow.y - 1;
            map[ghostShadow.y][ghostShadow.x] = 9;
        }
    }
    //2 = up
    else if (ghostSpeedyMovement == 2) {
        //checks for walls or other ghost above the ghost and if there isnt, lets it move
        if (map[ghostSpeedy.y - 1][ghostSpeedy.x] !== 1 && map[ghostSpeedy.y - 1][ghostSpeedy.x] !== 10 && map[ghostSpeedy.y - 1][ghostSpeedy.x] !== 11 && map[ghostSpeedy.y - 1][ghostSpeedy.x] !== 12) {
            map[ghostSpeedy.y][ghostSpeedy.x] = 2;
            ghostSpeedy.y = ghostSpeedy.y - 1;
            map[ghostSpeedy.y][ghostSpeedy.x] = 10;
        }
    }
    //2 = up
    else if (ghostBashfulMovement == 2) {
        //checks for walls or other ghost above the ghost and if there isnt, lets it move
        if (map[ghostBashful.y - 1][ghostBashful.x] !== 1 && map[ghostBashful.y - 1][ghostBashful.x] !== 10 && map[ghostBashful.y - 1][ghostBashful.x] !== 11 && map[ghostBashful.y - 1][ghostBashful.x] !== 12) {
            map[ghostBashful.y][ghostBashful.x] = 2;
            ghostBashful.y = ghostBashful.y - 1;
            map[ghostBashful.y][ghostBashful.x] = 11;
        }
    }
    //2 = up
    else if (ghostPokeyMovement == 2) {
        //checks for walls or other ghost above the ghost and if there isnt, lets it move
        if (map[ghostPokey.y - 1][ghostPokey.x] !== 1 && map[ghostPokey.y - 1][ghostPokey.x] !== 10 && map[ghostPokey.y - 1][ghostPokey.x] !== 11 && map[ghostPokey.y - 1][ghostPokey.x] !== 12) {
            map[ghostPokey.y][ghostPokey.x] = 2;
            ghostPokey.y = ghostPokey.y - 1;
            map[ghostPokey.y][ghostPokey.x] = 12;
        }
    }
    //3 = right
    if (ghostShadowMovement == 3) {
        //checks for walls or other ghost to the right of the ghost and if there isnt, lets it move

        if (map[ghostShadow.y][ghostShadow.x + 1] !== 1 && map[ghostShadow.y][ghostShadow.x + 1] !== 10 && map[ghostShadow.y][ghostShadow.x + 1] !== 11 && map[ghostShadow.y][ghostShadow.x + 1] !== 12) {
            map[ghostShadow.y][ghostShadow.x] = 2;
            ghostShadow.x = ghostShadow.x + 1;
            map[ghostShadow.y][ghostShadow.x] = 9;
        }
    }
    //3 = right
    else if (ghostSpeedyMovement == 3) {
        //checks for walls or other ghost to the right of the ghost and if there isnt, lets it move

        if (map[ghostSpeedy.y][ghostSpeedy.x + 1] !== 1 && map[ghostSpeedy.y][ghostSpeedy.x + 1] !== 10 && map[ghostSpeedy.y][ghostSpeedy.x + 1] !== 11 && map[ghostSpeedy.y][ghostSpeedy.x + 1] !== 12) {
            map[ghostSpeedy.y][ghostSpeedy.x] = 2;
            ghostSpeedy.x = ghostSpeedy.x + 1;
            map[ghostSpeedy.y][ghostSpeedy.x] = 10;
        }
    }
    //3 = right
    else if (ghostBashfulMovement == 3) {
        //checks for walls or other ghost to the right of the ghost and if there isnt, lets it move

        if (map[ghostBashful.y][ghostBashful.x + 1] !== 1 && map[ghostBashful.y][ghostBashful.x + 1] !== 10 && map[ghostBashful.y][ghostBashful.x + 1] !== 11 && map[ghostBashful.y][ghostBashful.x + 1] !== 12) {
            map[ghostBashful.y][ghostBashful.x] = 2;
            ghostBashful.x = ghostBashful.x + 1;
            map[ghostBashful.y][ghostBashful.x] = 11;
        }
    }
    //3 = right
    else if (ghostPokeyMovement == 3) {
        //checks for walls or other ghost to the right of the ghost and if there isnt, lets it move

        if (map[ghostPokey.y][ghostPokey.x + 1] !== 1 && map[ghostPokey.y][ghostPokey.x + 1] !== 10 && map[ghostPokey.y][ghostPokey.x + 1] !== 11 && map[ghostPokey.y][ghostPokey.x + 1] !== 12) {
            map[ghostPokey.y][ghostPokey.x] = 2;
            ghostPokey.x = ghostPokey.x + 1;
            map[ghostPokey.y][ghostPokey.x] = 12;
        }
    }
    //4 = down
    if (ghostShadowMovement == 4) {
        //checks for walls or other ghost below the ghost and if there isnt, lets it move
        if (map[ghostShadow.y + 1][ghostShadow.x] !== 1 && map[ghostShadow.y + 1][ghostShadow.x] !== 10 && map[ghostShadow.y + 1][ghostShadow.x] !== 11 && map[ghostShadow.y + 1][ghostShadow.x] !== 12) {
            map[ghostShadow.y][ghostShadow.x] = 2;
            ghostShadow.y = ghostShadow.y + 1;
            map[ghostShadow.y][ghostShadow.x] = 9;
        }
    }
    //4 = down
    else if (ghostSpeedyMovement == 4) {
        //checks for walls or other ghost below the ghost and if there isnt, lets it move
        if (map[ghostSpeedy.y + 1][ghostSpeedy.x] !== 1 && map[ghostSpeedy.y + 1][ghostSpeedy.x] !== 10 && map[ghostSpeedy.y + 1][ghostSpeedy.x] !== 11 && map[ghostSpeedy.y + 1][ghostSpeedy.x] !== 12) {
            map[ghostSpeedy.y][ghostSpeedy.x] = 2;
            ghostSpeedy.y = ghostSpeedy.y + 1;
            map[ghostSpeedy.y][ghostSpeedy.x] = 10;
        }
    }
    //4 = down
    else if (ghostBashfulMovement == 4) {
        //checks for walls or other ghost below the ghost and if there isnt, lets it move
        if (map[ghostBashful.y + 1][ghostBashful.x] !== 1 && map[ghostBashful.y + 1][ghostBashful.x] !== 10 && map[ghostBashful.y + 1][ghostBashful.x] !== 11 && map[ghostBashful.y + 1][ghostBashful.x] !== 12) {
            map[ghostBashful.y][ghostBashful.x] = 2;
            ghostBashful.y = ghostBashful.y + 1;
            map[ghostBashful.y][ghostBashful.x] = 11;
        }
    }
    //4 = down
    else if (ghostPokeyMovement == 4) {
        //checks for walls or other ghost below the ghost and if there isnt, lets it move
        if (map[ghostPokey.y + 1][ghostPokey.x] !== 1 && map[ghostPokey.y + 1][ghostPokey.x] !== 10 && map[ghostPokey.y + 1][ghostPokey.x] !== 11 && map[ghostPokey.y + 1][ghostPokey.x] !== 12) {
            map[ghostPokey.y][ghostPokey.x] = 2;
            ghostPokey.y = ghostPokey.y + 1;
            map[ghostPokey.y][ghostPokey.x] = 12;
        }
    }

    // PACMAN MOVE LEFT
    //Checks for whether right arrow key or a is clicked
    if (event.keyCode === 37 || event.keyCode === 65) {
        //Checks for if there is a wall in the desired dirction of movement
        if (map[pacman.y][pacman.x - 1] !== 1) {
            map[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x - 1;
            map[pacman.y][pacman.x] = 6;
            //Checks for if there is a coin in the desired direction of movement
            if (map[pacman.y][pacman.x - 1] == 2) {
                score = score + 10;
                document.getElementById('score').innerHTML = score;
            }
            //Checks for if there is a powerPill in the desired direction of movement
            else if (map[pacman.y][pacman.x - 1] == 4) {
                score = score + 50;
                document.getElementById('score').innerHTML = score;
            }
            //Checks for ghost in the desired direction of movement
            else if (map[pacman.y][pacman.x - 1] == 9 || map[pacman.y][pacman.x - 1] == 10 || map[pacman.y][pacman.x - 1] == 11 || map[pacman.y][pacman.x - 1] == 12) {
                gameOver();
            }
            //Checks for leftTeleport in the desired irection of movement
            else if (map[pacman.y][pacman.x - 1] == 7) {
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
    //Checks for whether up arrow key or w is clicked
    else if (event.keyCode === 38 || event.keyCode === 87) {
        //Checks for if there is a wall in the desired dirction of movement
        if (map[pacman.y - 1][pacman.x] !== 1) {
            map[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y - 1;
            map[pacman.y][pacman.x] = 6;
            //Checks for if there is a coin in the desired dirction of movement
            if (map[pacman.y - 1][pacman.x] == 2) {
                score = score + 10;
                document.getElementById('score').innerHTML = score;
            }
            //Checks for if there is a powerPill in the desired dirction of movement
            else if (map[pacman.y - 1][pacman.x] == 4) {
                score = score + 50;
                document.getElementById('score').innerHTML = score;

            }
            //Checks for if there is a ghost in the desired dirction of movement
            else if (map[pacman.y - 1][pacman.x] == 9 || map[pacman.y - 1][pacman.x] == 10 || map[pacman.y - 1][pacman.x] == 11 || map[pacman.y - 1][pacman.x] == 12) {
                gameOver();
            }
            drawWorld();
        }
    }




    // PACMAN MOVE RIGHT
    //Checks for whether right arrow key or d is clicked
    else if (event.keyCode === 39 || event.keyCode === 68) {
        //Checks for if there is a wall in the desired dirction of movement
        if (map[pacman.y][pacman.x + 1] !== 1) {
            map[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x + 1;
            map[pacman.y][pacman.x] = 6;
            //Checks for if there is a coin in the desired dirction of movement
            if (map[pacman.y][pacman.x + 1] == 2) {
                score = score + 10;
                document.getElementById('score').innerHTML = score;
            }
            //Checks for if there is a powerPill in the desired dirction of movement
            else if (map[pacman.y][pacman.x + 1] == 4) {
                score = score + 50;
                document.getElementById('score').innerHTML = score;
            }
            //Checks for if rightTeleport in the desired dirction of movement
            else if (map[pacman.y][pacman.x + 1] == 8) {
                map[pacman.y][pacman.x] = 3;
                pacman = {
                    x: 3,
                    y: 8
                }
            }
            //Checks for if there is a ghost in the desired dirction of movement
            else if (map[pacman.y][pacman.x + 1] == 9 || map[pacman.y][pacman.x + 1] == 10 || map[pacman.y][pacman.x + 1] == 11 || map[pacman.y][pacman.x + 1] == 12) {
                gameOver();
            }
            drawWorld();
        }
    }




    // PACMAN MOVE DOWN
    //Checks for whether down arrow key or s is clicked
    else if (event.keyCode === 40 || event.keyCode === 83) {
        //Checks for if there is a wall in the desired dirction of movement
        if (map[pacman.y + 1][pacman.x] !== 1) {
            map[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y + 1;
            map[pacman.y][pacman.x] = 6;
            //Checks for if there is a coin in the desired dirction of movement
            if (map[pacman.y + 1][pacman.x] == 2) {
                score = score + 10;
                document.getElementById('score').innerHTML = score;
            }
            //Checks for if there is a powerPill in the desired dirction of movement
            else if (map[pacman.y + 1][pacman.x] == 4) {
                score = score + 50;
                document.getElementById('score').innerHTML = score;
            }
            //Checks for if there is a ghost in the desired dirction of movement
            else if (map[pacman.y + 1][pacman.x] == 9 || map[pacman.y + 1][pacman.x] == 10 || map[pacman.y + 1][pacman.x] == 11 || map[pacman.y + 1][pacman.x] == 12) {
                gameOver();
            }
            drawWorld();
        }
    }
}//Sets up coordinates for each moveable object
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


//Map, mulitple arrays that will be read off to place all the divs

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

map = [
    [3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 4, 1, 1, 2, 1, 1, 2, 2, 2, 1, 1, 2, 1, 1, 4, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 2, 2, 2, 3, 3, 3, 9, 3, 3, 3, 2, 2, 2, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 1, 1, 2, 1, 3, 1, 1, 3, 1, 1, 3, 1, 2, 1, 1, 1, 3, 3, 3],
    [7, 7, 7, 7, 3, 3, 2, 1, 3, 3, 11, 10, 12, 3, 3, 1, 2, 3, 3, 8, 8, 8, 8],
    [3, 3, 3, 1, 1, 1, 2, 1, 3, 1, 1, 3, 1, 1, 3, 1, 2, 1, 1, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 4, 2, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 4, 1, 3, 3, 3],
    [3, 3, 3, 1, 1, 1, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 2, 1, 1, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 2, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 3, 3],
    [3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3]
]

//Sets variables needed
var level = document.getElementById('game'),
    score = 0;

//Function used to make the map each time
function drawWorld() {
    //Checks for when the player has hit 1000 score, then activates winner();
    if (score >= 1000) {
        winner();
    }
    level.innerHTML = '';
    //The double for loop checks loop through all the arrys in the map, placing objects as needed
    for (var y = 0; y < map.length; y++) {
        for (var x = 0; x < map[y].length; x++) {
            if (map[y][x] === 1) {
                //wall
                level.innerHTML += "<div class='wall'></div>";
            } else if (map[y][x] === 2) {
                //coin
                level.innerHTML += "<div class='coin'></div>";
            } else if (map[y][x] === 3) {
                //ground
                level.innerHTML += "<div class='ground'></div>";
            } else if (map[y][x] === 4) {
                //powerPill
                level.innerHTML += "<div class='powerPill'></div>";
            } else if (map[y][x] === 5) {
                //vulnerableGhost
                level.innerHTML += "<div class='vulnerableGhost'></div>";
            } else if (map[y][x] === 6) {
                //pacman
                level.innerHTML += "<div class='pacman'></div>";
            } else if (map[y][x] === 7) {
                //leftTeleport
                level.innerHTML += "<div class='leftTeleport'></div>";
            } else if (map[y][x] === 8) {
                //rightTeleport
                level.innerHTML += "<div class='rightTeleport'></div>";
            } else if (map[y][x] === 9) {
                //ghostShadow
                level.innerHTML += "<div class='ghostShadow' id='ghost'></div>";
            } else if (map[y][x] === 10) {
                //ghostSpeedy
                level.innerHTML += "<div class='ghostSpeedy' id='ghost'></div>";
            } else if (map[y][x] === 11) {
                //ghostBashful
                level.innerHTML += "<div class='ghostBashful' id='ghost'></div>";
            } else if (map[y][x] === 12) {
                //ghostPokey
                level.innerHTML += "<div class='ghostPokey' id='ghost'></div>";
            }
        }
        level.innerHTML += "<br>";
    }
}

drawWorld();

//Winner function if triggered will take the user to the winner page
function winner() {
    window.location.href = "endscreens/1playerWinner.html";
}
//Gameover function if triggered will take the user to the gameover page
function gameOver() {
    window.location.href = "endscreens/1playerGameOver.html";
}

//Movement for the ghosts and pacman
document.onkeydown = function(event) {

    //1 = left
    //2 = up
    //3 = right
    //4 = down

    //Random number generator for each of the ghosts so each all go in different directions
    var ghostShadowMovement = Math.floor((Math.random() * 4) + 1),
        ghostSpeedyMovement = Math.floor((Math.random() * 4) + 1),
        ghostBashfulMovement = Math.floor((Math.random() * 4) + 1),
        ghostPokeyMovement = Math.floor((Math.random() * 4) + 1);
    //1 = left
    if (ghostShadowMovement == 1) {
        //checks for walls or other ghost to the left of the ghost and if there isnt, lets it move
        if (map[ghostShadow.y][ghostShadow.x - 1] !== 1 && map[ghostShadow.y][ghostShadow.x - 1] !== 10 && map[ghostShadow.y][ghostShadow.x - 1] !== 11 && map[ghostShadow.y][ghostShadow.x - 1] !== 12) {
            map[ghostShadow.y][ghostShadow.x] = 2;
            ghostShadow.x = ghostShadow.x - 1;
            map[ghostShadow.y][ghostShadow.x] = 9;
        }
    }
    //1 = left
    else if (ghostSpeedyMovement == 1) {
        //checks for walls or other ghost to the left of the ghost and if there isnt, lets it move
        if (map[ghostSpeedy.y][ghostSpeedy.x - 1] !== 1 && map[ghostSpeedy.y][ghostSpeedy.x - 1] !== 10 && map[ghostSpeedy.y][ghostSpeedy.x - 1] !== 11 && map[ghostSpeedy.y][ghostSpeedy.x - 1] !== 12) {
            map[ghostSpeedy.y][ghostSpeedy.x] = 2;
            ghostSpeedy.x = ghostSpeedy.x - 1;
            map[ghostSpeedy.y][ghostSpeedy.x] = 10;
        }
    }
    //1 = left
    else if (ghostBashfulMovement == 1) {
        //checks for walls or other ghost to the left of the ghost and if there isnt, lets it move
        if (map[ghostBashful.y][ghostBashful.x - 1] !== 1 && map[ghostBashful.y][ghostBashful.x - 1] !== 10 && map[ghostBashful.y][ghostBashful.x - 1] !== 11 && map[ghostBashful.y][ghostBashful.x - 1] !== 12) {
            map[ghostBashful.y][ghostBashful.x] = 2;
            ghostBashful.x = ghostBashful.x - 1;
            map[ghostBashful.y][ghostBashful.x] = 11;
        }
    }
    //1 = left
    else if (ghostPokeyMovement == 1) {
        //checks for walls or other ghost to the left of the ghost and if there isnt, lets it move
        if (map[ghostPokey.y][ghostPokey.x - 1] !== 1 && map[ghostPokey.y][ghostPokey.x - 1] !== 10 && map[ghostPokey.y][ghostPokey.x - 1] !== 11 && map[ghostPokey.y][ghostPokey.x - 1] !== 12) {
            map[ghostPokey.y][ghostPokey.x] = 2;
            ghostPokey.x = ghostPokey.x - 1;
            map[ghostPokey.y][ghostPokey.x] = 12;
        }
    }
    //2 = up
    if (ghostShadowMovement == 2) {
        //checks for walls or other ghost above the ghost and if there isnt, lets it move
        if (map[ghostShadow.y - 1][ghostShadow.x] !== 1 && map[ghostShadow.y - 1][ghostShadow.x] !== 10 && map[ghostShadow.y - 1][ghostShadow.x] !== 11 && map[ghostShadow.y - 1][ghostShadow.x] !== 12) {
            map[ghostShadow.y][ghostShadow.x] = 2;
            ghostShadow.y = ghostShadow.y - 1;
            map[ghostShadow.y][ghostShadow.x] = 9;
        }
    }
    //2 = up
    else if (ghostSpeedyMovement == 2) {
        //checks for walls or other ghost above the ghost and if there isnt, lets it move
        if (map[ghostSpeedy.y - 1][ghostSpeedy.x] !== 1 && map[ghostSpeedy.y - 1][ghostSpeedy.x] !== 10 && map[ghostSpeedy.y - 1][ghostSpeedy.x] !== 11 && map[ghostSpeedy.y - 1][ghostSpeedy.x] !== 12) {
            map[ghostSpeedy.y][ghostSpeedy.x] = 2;
            ghostSpeedy.y = ghostSpeedy.y - 1;
            map[ghostSpeedy.y][ghostSpeedy.x] = 10;
        }
    }
    //2 = up
    else if (ghostBashfulMovement == 2) {
        //checks for walls or other ghost above the ghost and if there isnt, lets it move
        if (map[ghostBashful.y - 1][ghostBashful.x] !== 1 && map[ghostBashful.y - 1][ghostBashful.x] !== 10 && map[ghostBashful.y - 1][ghostBashful.x] !== 11 && map[ghostBashful.y - 1][ghostBashful.x] !== 12) {
            map[ghostBashful.y][ghostBashful.x] = 2;
            ghostBashful.y = ghostBashful.y - 1;
            map[ghostBashful.y][ghostBashful.x] = 11;
        }
    }
    //2 = up
    else if (ghostPokeyMovement == 2) {
        //checks for walls or other ghost above the ghost and if there isnt, lets it move
        if (map[ghostPokey.y - 1][ghostPokey.x] !== 1 && map[ghostPokey.y - 1][ghostPokey.x] !== 10 && map[ghostPokey.y - 1][ghostPokey.x] !== 11 && map[ghostPokey.y - 1][ghostPokey.x] !== 12) {
            map[ghostPokey.y][ghostPokey.x] = 2;
            ghostPokey.y = ghostPokey.y - 1;
            map[ghostPokey.y][ghostPokey.x] = 12;
        }
    }
    //3 = right
    if (ghostShadowMovement == 3) {
        //checks for walls or other ghost to the right of the ghost and if there isnt, lets it move

        if (map[ghostShadow.y][ghostShadow.x + 1] !== 1 && map[ghostShadow.y][ghostShadow.x + 1] !== 10 && map[ghostShadow.y][ghostShadow.x + 1] !== 11 && map[ghostShadow.y][ghostShadow.x + 1] !== 12) {
            map[ghostShadow.y][ghostShadow.x] = 2;
            ghostShadow.x = ghostShadow.x + 1;
            map[ghostShadow.y][ghostShadow.x] = 9;
        }
    }
    //3 = right
    else if (ghostSpeedyMovement == 3) {
        //checks for walls or other ghost to the right of the ghost and if there isnt, lets it move

        if (map[ghostSpeedy.y][ghostSpeedy.x + 1] !== 1 && map[ghostSpeedy.y][ghostSpeedy.x + 1] !== 10 && map[ghostSpeedy.y][ghostSpeedy.x + 1] !== 11 && map[ghostSpeedy.y][ghostSpeedy.x + 1] !== 12) {
            map[ghostSpeedy.y][ghostSpeedy.x] = 2;
            ghostSpeedy.x = ghostSpeedy.x + 1;
            map[ghostSpeedy.y][ghostSpeedy.x] = 10;
        }
    }
    //3 = right
    else if (ghostBashfulMovement == 3) {
        //checks for walls or other ghost to the right of the ghost and if there isnt, lets it move

        if (map[ghostBashful.y][ghostBashful.x + 1] !== 1 && map[ghostBashful.y][ghostBashful.x + 1] !== 10 && map[ghostBashful.y][ghostBashful.x + 1] !== 11 && map[ghostBashful.y][ghostBashful.x + 1] !== 12) {
            map[ghostBashful.y][ghostBashful.x] = 2;
            ghostBashful.x = ghostBashful.x + 1;
            map[ghostBashful.y][ghostBashful.x] = 11;
        }
    }
    //3 = right
    else if (ghostPokeyMovement == 3) {
        //checks for walls or other ghost to the right of the ghost and if there isnt, lets it move

        if (map[ghostPokey.y][ghostPokey.x + 1] !== 1 && map[ghostPokey.y][ghostPokey.x + 1] !== 10 && map[ghostPokey.y][ghostPokey.x + 1] !== 11 && map[ghostPokey.y][ghostPokey.x + 1] !== 12) {
            map[ghostPokey.y][ghostPokey.x] = 2;
            ghostPokey.x = ghostPokey.x + 1;
            map[ghostPokey.y][ghostPokey.x] = 12;
        }
    }
    //4 = down
    if (ghostShadowMovement == 4) {
        //checks for walls or other ghost below the ghost and if there isnt, lets it move
        if (map[ghostShadow.y + 1][ghostShadow.x] !== 1 && map[ghostShadow.y + 1][ghostShadow.x] !== 10 && map[ghostShadow.y + 1][ghostShadow.x] !== 11 && map[ghostShadow.y + 1][ghostShadow.x] !== 12) {
            map[ghostShadow.y][ghostShadow.x] = 2;
            ghostShadow.y = ghostShadow.y + 1;
            map[ghostShadow.y][ghostShadow.x] = 9;
        }
    }
    //4 = down
    else if (ghostSpeedyMovement == 4) {
        //checks for walls or other ghost below the ghost and if there isnt, lets it move
        if (map[ghostSpeedy.y + 1][ghostSpeedy.x] !== 1 && map[ghostSpeedy.y + 1][ghostSpeedy.x] !== 10 && map[ghostSpeedy.y + 1][ghostSpeedy.x] !== 11 && map[ghostSpeedy.y + 1][ghostSpeedy.x] !== 12) {
            map[ghostSpeedy.y][ghostSpeedy.x] = 2;
            ghostSpeedy.y = ghostSpeedy.y + 1;
            map[ghostSpeedy.y][ghostSpeedy.x] = 10;
        }
    }
    //4 = down
    else if (ghostBashfulMovement == 4) {
        //checks for walls or other ghost below the ghost and if there isnt, lets it move
        if (map[ghostBashful.y + 1][ghostBashful.x] !== 1 && map[ghostBashful.y + 1][ghostBashful.x] !== 10 && map[ghostBashful.y + 1][ghostBashful.x] !== 11 && map[ghostBashful.y + 1][ghostBashful.x] !== 12) {
            map[ghostBashful.y][ghostBashful.x] = 2;
            ghostBashful.y = ghostBashful.y + 1;
            map[ghostBashful.y][ghostBashful.x] = 11;
        }
    }
    //4 = down
    else if (ghostPokeyMovement == 4) {
        //checks for walls or other ghost below the ghost and if there isnt, lets it move
        if (map[ghostPokey.y + 1][ghostPokey.x] !== 1 && map[ghostPokey.y + 1][ghostPokey.x] !== 10 && map[ghostPokey.y + 1][ghostPokey.x] !== 11 && map[ghostPokey.y + 1][ghostPokey.x] !== 12) {
            map[ghostPokey.y][ghostPokey.x] = 2;
            ghostPokey.y = ghostPokey.y + 1;
            map[ghostPokey.y][ghostPokey.x] = 12;
        }
    }

    // PACMAN MOVE LEFT
    //Checks for whether right arrow key or a is clicked
    if (event.keyCode === 37 || event.keyCode === 65) {
        //Checks for if there is a wall in the desired dirction of movement
        if (map[pacman.y][pacman.x - 1] !== 1) {
            map[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x - 1;
            map[pacman.y][pacman.x] = 6;
            //Checks for if there is a coin in the desired direction of movement
            if (map[pacman.y][pacman.x - 1] == 2) {
                score = score + 10;
                document.getElementById('score').innerHTML = score;
            }
            //Checks for if there is a powerPill in the desired direction of movement
            else if (map[pacman.y][pacman.x - 1] == 4) {
                score = score + 50;
                document.getElementById('score').innerHTML = score;
            }
            //Checks for ghost in the desired direction of movement
            else if (map[pacman.y][pacman.x - 1] == 9 || map[pacman.y][pacman.x - 1] == 10 || map[pacman.y][pacman.x - 1] == 11 || map[pacman.y][pacman.x - 1] == 12) {
                gameOver();
            }
            //Checks for leftTeleport in the desired irection of movement
            else if (map[pacman.y][pacman.x - 1] == 7) {
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
    //Checks for whether up arrow key or w is clicked
    else if (event.keyCode === 38 || event.keyCode === 87) {
        //Checks for if there is a wall in the desired dirction of movement
        if (map[pacman.y - 1][pacman.x] !== 1) {
            map[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y - 1;
            map[pacman.y][pacman.x] = 6;
            //Checks for if there is a coin in the desired dirction of movement
            if (map[pacman.y - 1][pacman.x] == 2) {
                score = score + 10;
                document.getElementById('score').innerHTML = score;
            }
            //Checks for if there is a powerPill in the desired dirction of movement
            else if (map[pacman.y - 1][pacman.x] == 4) {
                score = score + 50;
                document.getElementById('score').innerHTML = score;

            }
            //Checks for if there is a ghost in the desired dirction of movement
            else if (map[pacman.y - 1][pacman.x] == 9 || map[pacman.y - 1][pacman.x] == 10 || map[pacman.y - 1][pacman.x] == 11 || map[pacman.y - 1][pacman.x] == 12) {
                gameOver();
            }
            drawWorld();
        }
    }

    // PACMAN MOVE RIGHT
    //Checks for whether right arrow key or d is clicked
    else if (event.keyCode === 39 || event.keyCode === 68) {
        //Checks for if there is a wall in the desired dirction of movement
        if (map[pacman.y][pacman.x + 1] !== 1) {
            map[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x + 1;
            map[pacman.y][pacman.x] = 6;
            //Checks for if there is a coin in the desired dirction of movement
            if (map[pacman.y][pacman.x + 1] == 2) {
                score = score + 10;
                document.getElementById('score').innerHTML = score;
            }
            //Checks for if there is a powerPill in the desired dirction of movement
            else if (map[pacman.y][pacman.x + 1] == 4) {
                score = score + 50;
                document.getElementById('score').innerHTML = score;
            }
            //Checks for if rightTeleport in the desired dirction of movement
            else if (map[pacman.y][pacman.x + 1] == 8) {
                map[pacman.y][pacman.x] = 3;
                pacman = {
                    x: 3,
                    y: 8
                }
            }
            //Checks for if there is a ghost in the desired dirction of movement
            else if (map[pacman.y][pacman.x + 1] == 9 || map[pacman.y][pacman.x + 1] == 10 || map[pacman.y][pacman.x + 1] == 11 || map[pacman.y][pacman.x + 1] == 12) {
                gameOver();
            }
            drawWorld();
        }
    }

    // PACMAN MOVE DOWN
    //Checks for whether down arrow key or s is clicked
    else if (event.keyCode === 40 || event.keyCode === 83) {
        //Checks for if there is a wall in the desired dirction of movement
        if (map[pacman.y + 1][pacman.x] !== 1) {
            map[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y + 1;
            map[pacman.y][pacman.x] = 6;
            //Checks for if there is a coin in the desired dirction of movement
            if (map[pacman.y + 1][pacman.x] == 2) {
                score = score + 10;
                document.getElementById('score').innerHTML = score;
            }
            //Checks for if there is a powerPill in the desired dirction of movement
            else if (map[pacman.y + 1][pacman.x] == 4) {
                score = score + 50;
                document.getElementById('score').innerHTML = score;
            }
            //Checks for if there is a ghost in the desired dirction of movement
            else if (map[pacman.y + 1][pacman.x] == 9 || map[pacman.y + 1][pacman.x] == 10 || map[pacman.y + 1][pacman.x] == 11 || map[pacman.y + 1][pacman.x] == 12) {
                gameOver();
            }
            drawWorld();
        }
    }
}
