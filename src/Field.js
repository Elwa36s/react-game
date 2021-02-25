import React from 'react';
import './Field.css';
import Tile from './Tile'
import {makeLines} from './redux/reducers/arrayTransformation'

export default function Field(props){
    return(
        <div id='field'>
            {
            makeLines().map((tiles,lineIndex) => {
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