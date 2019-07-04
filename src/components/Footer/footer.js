import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './footer.css'
const ind = 2;
export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <footer className="foot">
        <h2 className="start">
          Suchi Sinha Mathur <span className="extr">&copy; 2019 </span>
        </h2>
        <div className="end">
          <ul className="list">
              <li><a href = "https://www.facebook.com/suchi.sinha.7">
                <img className="foot-img"  src={require('../../images/fb' + ind + '.svg')} alt="fb"/>
              </a></li>
              <li><a href = "https://www.instagram.com/suchisinha/">
                <img  className="foot-img" src={require('../../images/ins'+ ind + '.png')} alt="insta"/>
              </a></li>
          </ul>
        </div>
        {/* <MadeWithLove /> */}
      </footer>
    </React.Fragment>
  );
}