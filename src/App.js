import React from 'react';
import LiveGame from '../src/page/LiveGame/LiveGame';
import {ResetStyle, GlobalStyle} from '../src/public_component/globalStyle'


const App = () =>{

    return (
        <React.Fragment>
            <ResetStyle />
            <GlobalStyle />
            
            <LiveGame/>
        </React.Fragment>
    )
}

export default App;