import React from 'react';
import './timejour.css';
import Timeline from '../Timeline/timeline'
import {StyleRoot} from "radium";
import CssBaseline from '@material-ui/core/CssBaseline';
class Timejour extends React.Component {
    render(){
        return(
            <div>
                <CssBaseline/>
            <StyleRoot className="time">
                    <Timeline >
                        <div icon='1992'>started school - 19XX</div>
                        <div icon="20XX">lorem ipsum - 20XX</div>
                        <div>Entry 3 - 20XX</div>
                        {[0,1,2,3,4,5].map(i =>
                        <div key={i}>
                            <h1>{i}</h1>
                            Similar like events occuring - __ year
                        </div>
                        )}
                    </Timeline>
            </StyleRoot>
            </div>
        );
    };
};
export default Timejour;