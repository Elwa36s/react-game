import React from 'react';
import Field from '../field/Field';
import Buttons from '../buttons/buttons';
import Stat from '../stat/stat';
import './app.css'

const App = () => {
    return(
        <div id='app'>
        <Buttons />
        <Stat />
        <Field />
        </div>
    )
}
export default App;