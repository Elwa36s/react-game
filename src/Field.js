import React from 'react';
import './Field.css';
import Tile from './Tile'

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
    function makeLines(){
        let lines = [];
            props.tiles.forEach((value, index) => {
            let lineIndex = Math.floor(index / 4);
            lines[lineIndex] = lines[lineIndex] || [];
            lines[lineIndex].push(value);
        });
        return lines;
    }
}