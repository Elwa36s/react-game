import React, {useEffect} from 'react';
import './Field.css';
import Tile from '../tile/Tile'
import {makeLines} from '../../redux/reducers/arrayTransformation'
import {connect, useDispatch} from 'react-redux'
import {moveUp, moveDown, moveLeft, moveRight, initGame} from '../../redux/actions/actionCreators'





function Field(props){
    useEffect(()=>{
        document.addEventListener('keydown', (e) => eventHandler(e))
    }, [])
    const eventHandler = (event) => {
        switch (event.keyCode) {
            case 37:
                (props.moveLeft());
                break;
              case 38:
                (props.moveUp());
                break;
              case 39:
                (props.moveRight());
                break;
              case 40:
                (props.moveDown());
                break;
              case 82:
                (props.initGame());
                break;
              default:
        }
    }
    console.log(`***********${props.tiles}***************`)
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
    console.log(state)
     return {tiles : state.field}
    };

const mapDispatchToProps = {
    moveUp, moveDown, moveLeft, moveRight, initGame
};
export default connect(mapStateToProps, mapDispatchToProps)(Field)