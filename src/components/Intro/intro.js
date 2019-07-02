import React from 'react';
import './intro.css';
import TextTransition,  { presets } from "react-text-transition";
// import SplitText from 'react-pose-text';
// const charPoses = {
//     exit: { opacity: 0, y: 20 },
//     enter: {
//       opacity: 1,
//       y: 0,
//       delay: ({ charIndex }) => charIndex * 30
//     }
//   };
class Intro extends React.Component {
    constructor(props) {
        super();
        this.state = {
            active : 0
        }
    };
    componentDidMount() {
        setInterval(() => {
          this.setState({ active : this.state.active + 1 });
        }, 2000);
      }
      static texts = [
        "Php",
        "Python",
        "Photoshop",
        "Webdev",
        "Javascript"
      ];
        
      
    render(){
        return(
        // <div style={this.state.divStyle} onMouseMove={this._onMouseMove}>
        <div className = "main">
          <div className="root">
            <h1 className="intro-head">Suchi Sinha Mathur</h1>
            <p className="intro">I'm a Computer Engineer from India</p>
            <section className="intro">
            I know a bit of -> 
            <TextTransition
              text={Intro.texts[this.state.active % Intro.texts.length]}
              spring={presets.gentle}
              className = "lang"
              inline
              overflow
            />
          </section>
          </div>
        </div>);
    };
}
export default Intro