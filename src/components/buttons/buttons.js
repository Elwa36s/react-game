import React from 'react';
import { connect } from 'react-redux';
import './buttons.css'
import {initGame, settings, mute, leaderBoard, resetScore} from '../../redux/actions/actionCreators'

function Buttons(props){
    function sort(arr){
        let newArr = arr.sort((a, b) => {return (b.score - a.score)});
        return newArr.slice(0, 10);
    }
    return (
        <div id='btns'>
            <button type='button' onClick={props.initGame}>New game</button>
            <button type='button' onClick={props.settings}>Settings</button>
            <p id='rules'>Use <strong>arrows</strong> or <strong>WASD</strong> to move, <strong>R</strong> - new game, <strong>F</strong> - fullscreen</p>
            {props.modal && (
            <div id='settings'>
            <button type='button' className='set' onClick={props.leaderBoard}>Show best scores</button>
            <button type='button' className='set' onClick={props.resetScore}>Reset statistics</button>
            <button type='button>' className='set' onClick={props.mute}>Sound on/off</button>
            <button type='button' className='set' onClick={props.settings}>Close settings</button>
            </div>
            )}
            {props.score && (<div id='leaderBoard'>
                    <button type='button' className="closeSetts" onClick={props.leaderBoard}>&times;</button>
                    {sort(props.top10).map((record, index) => {
                    return <p className='top' key={index}>{index + 1}. {record.score} points in {record.moves} steps</p>})}
                    </div>
            )}
        </div>
        
    )
}

const mapStateToProps = state => {
    return {modal : state.buttons.settingsIsOpen,
            muted: state.buttons.muted,
            score : state.buttons.score,
            top10 : state.field.top10};
}

const mapDispatchToProps = {
    initGame, settings, mute, leaderBoard, resetScore
}
export default connect(mapStateToProps, mapDispatchToProps)(Buttons);