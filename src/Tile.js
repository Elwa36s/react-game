import React from 'react';
import './Tile.css'
export default function Tile(props){
return(
    <div className={`tile tile-${props.value}`}>
    {props.value}
    </div>
    )
}