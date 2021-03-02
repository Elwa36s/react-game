import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './stat.css'
import {checkForLose, checkForWin, calcScore} from '../../redux/actions/actionCreators'


function Stat(props){
    useEffect(()=>{
        props.checkForWin();
        props.checkForLose();
        props.calcScore();  
        }, [props]
        )
    return(
        <div id='stat'>
            <section id='score'>
                Score: {props.currentScore}
            </section>
            <section id='moves'>
                Steps: {props.moves}
            </section>
            <section id='bestScore'>
                Best score: {props.bestScore}
            </section>
        </div>
    )
}

const mapStateToProps = state => {
    return {currentScore : state.field.currentScore,
        bestScore : state.field.bestScore,
        moves : state.field.moves,
        }
};
const mapDispatchToProps = {
    checkForLose, checkForWin, calcScore
};
export default connect(mapStateToProps, mapDispatchToProps)(Stat)