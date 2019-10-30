import React from 'react';
import background from './bg.jpeg';
import { useState, useEffect, useRef } from "react";

import './App.css';
import Carousel from './components/Carousel';



function App() {
  // const inputEl = useRef(null);
 
  // slider.scrollLeft = scrollLeft*2;

  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   inputEl.current.focus();
  //   console.log(inputEl.current);
  //   const timer = setInterval(() => {
      
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, [index]);
  
  return (
    <>
      <img src={background} className="hero-section" alt="background"/>
    

        <Carousel/>

      {/* {images.map(image => (
        <Carousel key={image} src={image} />
      ))} */}

    </>
  );
}

export default App;
