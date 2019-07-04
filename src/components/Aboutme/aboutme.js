import React from 'react';
import './abtme.css';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
class Aboutme extends React.Component {
    render(){
        return(
        <div>
        <AppBar position="relative">
            <Toolbar className="bg-col-bar">
            <Typography  className = "app-bar-at" noWrap>
             About me
            </Typography>
            </Toolbar>
        </AppBar>
            <div className="main-abt">
                <div className="lft-abt">
                    <p className="abt-head">
                        Who Am I? I'm <span className="special-txt"> Suchi Sinha</span> AND I'M A <br/> 
                        <span className="special-txt">WEBDESIGNER</span> 
                    </p>
                    <p className="abt-content">
                        Welcome to my website.<br/><br/>By now you must have know that I'm a Web designer and 
                        have over ten Years of industry experience as <b>PHP developer</b> and in implementing 
                        <b> third-party APIs</b>.<br/><br/>
                        I can handle projects related to Core PHP /My SQL/HTML/Adobe Photoshop/CSS.
                         This includes various CMS, Frameworks and other APIs such as Wordpress, Cake PHP, 
                         Code Ignitor, E-Commerce, Infusionsoft API, Json, Ajax, OOP's Concept, JQuery and 
                         Javascript.<br/><br/>
                         I love my work and enjoy each new project as I get it. Feel free to have a look at 
                         my work samples and don't hesitate to contact me if you think I can be of service 
                         to you. 
                    </p>

                </div>
                <div className="rgt-abt">

                </div>
            </div>
        </div>   
        );
    }
}
export default Aboutme;