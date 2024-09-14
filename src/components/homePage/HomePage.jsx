// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Style.css";
import logoHome from '../../assets/logoHome.png';
import downArrow from '../../assets/Down.png';
import doctorHome from '../../assets/doctorHome.png';
function HomePage() {
  return (
    <div id="HomePage">
    
      <div className="home-container"><div className='doctor-home'>
    <img src={doctorHome} />
    </div>
        <div className="home-text">
          <h1>
            Helping You to Bring Back Your Happy <br/> <span> Smile </span>
          </h1>
          <a href='#contact'>
          <button className="home-button">Take a reservation</button>
          </a>
          <a href='#Services'>
          <img src={downArrow} alt="Down Arrow" className=' w-14 h-10 animate-bounce'/></a>
        </div>
        <div className="home-img">
          <img src={logoHome}  />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
