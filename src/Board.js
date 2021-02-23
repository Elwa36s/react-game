import React, {useState} from 'react';
import './Board.css';

export default function Board(){
    const [board, setBoard] = useState([[0,0,0,0],
                                       [0,0,0,0],
                                       [0,0,0,0],
                                       [0,0,0,0]]);
    /*const line = Array(4),
          currentField = [];
    line.fill(<div className='cell'>0</div>)
    for (let i = 0; i < 4; i++){
        currentField.push(line);
    }
    setBoard(currentField);*/
    return(
        <div id="board">
            {board.forEach(function loop(line){
                 line.map(function getCell(cell,index){
                 return <div className='cell' id={cell} key={index}></div>
                 
                })
            })}
        </div>
    )
}
