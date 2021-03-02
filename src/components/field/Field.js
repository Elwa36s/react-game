import React, {useEffect} from 'react';
import './Field.css';
import Tile from '../tile/Tile'
import {makeLines} from '../../redux/reducers/arrayTransformation'
import {connect} from 'react-redux'
import {moveUp, moveDown, moveLeft, moveRight, initGame, loadGame} from '../../redux/actions/actionCreators'


function Field(props){
    useEffect(()=>{
        document.addEventListener('keydown', (e) => {eventHandler(e);
        });
        return ()=>{
          document.removeEventListener('keydown', (e) => {eventHandler(e);
          });
        }
    },[]);
    useEffect(()=>{
          props.loadGame()
        },[]);
    useEffect(()=>{
      saveGame(props)
    },[props]);
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
                (props.loadGame());
                break;
              
              default: break;
        }
    }
    const saveGame = (state) => {
      const currentState = JSON.stringify(state);
      localStorage.setItem('lastState', currentState);
    };

    if (props.lose){
      return (
        <div className='endScreen' id='loseScreen'>
          <p>Game over! =(</p>
          <p>You reached {props.currentScore} in {props.moves} steps</p>
        </div>
      )
    }
    if (props.win){
      return (
        <div className='endScreen' id='winScreen'>
          <p>Congratulations!</p>
          <p>You win the game with {props.currentScore} score in {props.moves} steps!</p>
        </div>
      )
    }
    if (!props.win && !props.lose){
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
        )}
}

const mapStateToProps = state => {
     return {...state.field}
    };

const mapDispatchToProps = {
    moveUp, moveDown, moveLeft, moveRight, initGame, loadGame,
};
export default connect(mapStateToProps, mapDispatchToProps)(Field)