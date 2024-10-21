
document.addEventListener('DOMContentLoaded', function(){
    let postion = 0
    movePlayer(0, getSquares());
    document.addEventListener('keydown',function(event){ 
        if(event.key === 'ArrowRight'){
            let squares = getSquares();
            event.preventDefault();
            postion = (postion + 1)%squares.length;
            movePlayer(postion, squares);
            
        }
        if(event.key === 'ArrowLeft'){
            let squares = getSquares();
            event.preventDefault();
            if(postion === 0){
                postion = squares.length -1;
            } else {
                postion--
            }
            movePlayer(postion, squares);
        }
    });
});

function getSquares(){
    sq = document.getElementsByClassName('square');
    return sq;
}

function movePlayer(index, squares){
    for(let i=0; i<squares.length; i++){
        squares[i].classList.remove('player-square');
    }
    squares[index].classList.add('player-square');
}

