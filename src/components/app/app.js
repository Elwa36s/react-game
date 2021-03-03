import React from 'react';
import Field from '../field/Field';
import Buttons from '../buttons/buttons';
import Stat from '../stat/stat';
import Footer from '../footer/footer'
import './app.css'

const App = () => {
    return(
        <div id='app'>
        <Buttons />
        <Stat />
        <Field />
        <Footer />
        </div>
    )
}
export default App;