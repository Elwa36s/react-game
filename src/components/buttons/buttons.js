import React from 'react';
import { connect } from 'react-redux';
import './buttons.css'
import {initGame} from '../../redux/actions/actionCreators'

function Buttons(props){
    return (
        <div id='btns'>
            <button type='button' onClick={props.initGame}>New game</button>
            <button type='button'>Settings</button>
        </div>
    )
}

const mapDispatchToProps = {
    initGame
}
export default connect(null, mapDispatchToProps)(Buttons);