import React from 'react';
import './Field.css';
import Tile from './Tile'
import {makeLines} from './redux/reducers/arrayTransformation'
import {connect} from 'react-redux'
import {moveUp, moveDown, moveLeft, moveRight} from './redux/actions/actionCreators'

function Field(props){
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

const mapStateProps = (state) => ({tiles: state.tiles});
const mapDispatchToProps = {moveUp, moveDown, moveLeft, moveRight};
export default connect(mapStateProps, mapDispatchToProps)(Field)