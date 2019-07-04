import React from 'react';
import './timejour.css';
import Timeline from '../Timeline/timeline'
import {StyleRoot} from "radium";
import Typography from '@material-ui/core/Typography';
class Timejour extends React.Component {
    
    render(){
        return(
            <div>
            <StyleRoot>
                    <Typography variant="h3" align ="center" gutterBottom>
                        <p className="journ-head">Journey so far!!!</p>
                    </Typography>
                    <Timeline >
                        <div icon='2003' className="time-text"><b>Completed 10th </b>from Gobindgarh Public School,Punjab</div>
                        <div icon='2005' className="time-text"><b>Completed 12th </b>from Gobindgarh Public School,Punjab</div>
                        <div icon="2009" className="time-text"><b>Completed Btech</b> in Cse from RIET,Gobindgarh,Punjab</div>
                        <div icon="2009" className="time-text"><b>Joined as HR </b> in Idea foundation, Panchkula</div>
                        <div icon="2010" className="time-text"><b>Joined as Web-developer</b> in SCL Networks Pvt. Ltd, Panchkula</div>
                        <div icon="2011" className="time-text"><b>promoted to Seniorn Web-developer in SCL Networks Pvt. Ltd, Panchkula</b></div>
                    </Timeline>
            </StyleRoot>
            </div>
        );
    };
};
export default Timejour;