import React, {useEffect} from 'react';
import './Field.css';
import Tile from '../tile/Tile'
import {makeLines} from '../../redux/reducers/arrayTransformation'
import {connect} from 'react-redux'
import {moveUp, moveDown, moveLeft, moveRight, initGame} from '../../redux/actions/actionCreators'


function Field(props){
    useEffect(()=>{
        document.addEventListener('keydown', (e) => eventHandler(e))
    }, [])
    const eventHandler = (event) => {
        switch (event.keyCode) {
            case 37 :
                (props.moveLeft());
                break;
            case 65 :
                (props.moveLeft());
                break;    
              case 38:
                (props.moveUp());
                break;
              case 87:
                (props.moveUp());
                break;  
              case 39:
                (props.moveRight());
                break;
              case 68:
                (props.moveRight());
                break;  
              case 40:
                (props.moveDown());
                break;
              case 83:
                (props.moveDown());
                break;  
              case 82:
                (props.initGame());
                break;
              default:
        }
    }
    if (props.lose){
      return (
        <div className='endScreen' id='loseScreen'>
          <p>Game over! =(</p>
          <p>You reached {props.score} in {props.moves}steps</p>
        </div>
      )
    }
    if (props.win){
      return (
        <div className='endScreen' id='winScreen'>
          <p>Congratulations!</p>
          <p>You win the game with {props.score} score in {props.moves} steps!</p>
        </div>
      )
    }
    return(
        <div id='field'>
            {
            makeLines(props.tiles).map((tiles,lineIndex) => {
                    return (
                        <div key={lineIndex} className='tileLine'>
                           {tiles.map((tile, index) => {
                                return <Tile key={lineIndex*4 + index} value={tile} />
                                })} 
                        </div>
                    )
                })
            }
        </div>
        )
}

const mapStateToProps = state => {
     return {tiles : state.field.tiles,
            win : state.field.win,
            lose : state.field.lose,
            score : state.field.currentScore,
            moves : state.field.moves}
    };

const mapDispatchToProps = {
    moveUp, moveDown, moveLeft, moveRight, initGame
};
export default connect(mapStateToProps, mapDispatchToProps)(Field)