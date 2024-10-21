import React from 'react';
import video1 from "./assets/kayak.mp4"; // Video dosyasını doğru yoldan import ediyoruz
import "./index.css"; // Stil dosyasını import ediyoruz
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

function App() {
  return (
    <div className='mainbox'>

      <p className='logo'>Goderdziskiservice</p>


      <video loop autoPlay muted >
        <source src={video1} type="video/mp4" />
      </video>


      <div className='intelbox'>
        <h1>We will be with you very soon</h1>
        <div className='colorbox'>
          <div></div>
        </div>
        <div className='social'>
          <p>Preparing for you...</p>
        </div>
      </div>

      <div>
        <p className='copyright'>@Copyright 2024 goderdziskiservice. All-Right Reserved
        </p>
      </div>
    </div>
  );
}

export default App;
