
document.addEventListener('DOMContentLoaded', function(){
    let positon = 0
    movePlayer(0, getSquares());
    document.addEventListener('keydown',function(event){ 
        if(event.key === 'ArrowRight'){
            let squares = getSquares();
            event.preventDefault();
            positon = (positon + 1)%squares.length;
            movePlayer(positon, squares);
            
        }
        if(event.key === 'ArrowLeft'){
            let squares = getSquares();
            event.preventDefault();
            if(positon === 0){
                positon = squares.length -1;
            } else {
                positon--
            }
            movePlayer(positon, squares);
        }
    });
});

/**
 * gets squares from the DOM
 * @returns array
 */
function getSquares(){
    sq = document.getElementsByClassName('square');
    return sq;
}

/**
 * takes an index and array then 'moves' the player by adding a class to change the 
 * colour of the square at the players location.
 */
function movePlayer(index, squares){
    for(let i=0; i<squares.length; i++){
        squares[i].classList.remove('player-square');
    }
    squares[index].classList.add('player-square');
}


/**
 * clears the board 
 */
function clearBoard(squares){
    for(let i=0; i<squares.lenght; i++){
        squares[i].classList.remove('incorrect-square');
        squares[i].classList.remove('correct-square');
        squares[i].classList.remove('player-square');
    }
}

/**
 * Adds correct-square class to square
 * @param {int} index 
 * @param {Array} squares 
 */
function setCorrectSquare(index, squares){
    squares[index].classList.add('correct-square');
}


/**
 * Adds incorrect-square class to square
 * @param {int} index 
 * @param {Array} squares 
 */
function setIncorrectSquare(index, squares){
    squares[index].classList.add('incorrect-square');
}