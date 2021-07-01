import React from 'react';
import LiveGame from '../src/page/LiveGame/LiveGame';
import AllTours from '../src/page/AllTours/AllTournaments';
import {ResetStyle, GlobalStyle} from '../src/public_component/globalStyle';
// import allTour from '../datas/2021_tour/tournaments'


const App = () =>{

    console.log('5566')

    return (
        
        <React.Fragment>
            <ResetStyle />
            <GlobalStyle />
            {/* <AllTours/> */}
            <LiveGame/>
        </React.Fragment>
    )
}

export default App;