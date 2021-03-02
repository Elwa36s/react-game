import React from 'react';
import { connect } from 'react-redux';
import './buttons.css'
import {initGame, settings, mute} from '../../redux/actions/actionCreators'

function Buttons(props){
    return (
        <div id='btns'>
            <button type='button' onClick={props.initGame}>New game</button>
            <button type='button' onClick={props.settings}>Settings</button>
{props.modal && (
<div id='settings'>
<button type='button' className='set'>Show best scores</button>
<button type='button' className='set'>Reset statistics</button>
<button type='button>' className='set' onClick={props.mute}>Sound {props.muted ? 'unmute' : 'mute'}</button>
<button type='button' className='set' onClick={props.settings}>Close settings</button>
</div>
        )}
        </div>
        
    )
}

const mapStateToProps = state => {
    return {modal : state.buttons.settingsIsOpen,
            muted: state.buttons.muted,
            score : state.buttons.score};
}

const mapDispatchToProps = {
    initGame, settings, mute
}
export default connect(mapStateToProps, mapDispatchToProps)(Buttons);