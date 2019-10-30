import React from 'react';
import { useState, useEffect, useRef } from "react";
import ItemImage from './ItemImage';

const initImages = [  
  {
    index: 0,
    src : "https://www.maggiesadler.com/wp-content/uploads/2015/10/10004088_1491055334449687_1187165020_n.jpg"
  },
  {
    index: 1,
    src : "https://www.maggiesadler.com/wp-content/uploads/2015/10/10919749_326992714172441_299394464_n.jpg"
  },
  {
    index: 2,
    src : "https://www.maggiesadler.com/wp-content/uploads/2015/10/10617007_939025979457209_6938406_n.jpg"
  },
  {
    index: 3,
    src :  "https://www.maggiesadler.com/wp-content/uploads/2015/10/1168617_1435408473368301_409182770_n.jpg"
  },
  {
    index: 4,
    src : "https://www.maggiesadler.com/wp-content/uploads/2015/10/11189836_754178218029431_2102772742_n.jpg"
  },
  {
    index: 5,
    src :  "https://www.maggiesadler.com/wp-content/uploads/2015/10/10843869_1658219887738208_2033326788_n.jpg",
  },
  {
    index: 6,
    src :   "https://www.maggiesadler.com/wp-content/uploads/2015/10/1515054_1379051609022475_1394148610_n.jpg"       
  }

  // "https://www.maggiesadler.com/wp-content/uploads/2015/10/10817863_856543214397968_517239188_n.jpg",
  // "https://www.maggiesadler.com/wp-content/uploads/2015/10/10919749_326992714172441_299394464_n.jpg",
  // "https://www.maggiesadler.com/wp-content/uploads/2015/10/10617007_939025979457209_6938406_n.jpg",
  // "https://www.maggiesadler.com/wp-content/uploads/2015/10/1168617_1435408473368301_409182770_n.jpg",
  // "https://www.maggiesadler.com/wp-content/uploads/2015/10/11189836_754178218029431_2102772742_n.jpg",
  // "https://www.maggiesadler.com/wp-content/uploads/2015/10/10843869_1658219887738208_2033326788_n.jpg",
  // "https://www.maggiesadler.com/wp-content/uploads/2015/10/1515054_1379051609022475_1394148610_n.jpg"            
];

const Carousel = () => {
  const [images, setImages] = useState(initImages);


  const inputEl = useRef(null);

  // slider.scrollLeft = scrollLeft*2;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    // console.log(inputEl.current.scrollLeft);

    const timer = setInterval(() => {
      // const newIndex = images.index+1;
      // console.log(newIndex);
      const newIndex = images.shift();
    
      console.log(newIndex);
      // property: data.properties[newIndex]
      setIndex(newIndex);


      setIndex(images.index++);
      // console.log(images);
      // console.log('aa');
      // console.log(inputEl.current.scrollLeft);
      // console.log(inputEl.current.getBoundingClientRect().x);
      // inputEl.current.getBoundingClientRect().x = 500;
      // inputEl.current.scrollLeft = 500;

    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="carousel">
      <div className="carousel-container" ref={inputEl} >
        {/* <div className="carousel-container" ref={inputEl} style={{
        'transform': `translateX(-${property * (100 / properties.length)}%)`
      }}></div> */}
        <div className="carousel-list">    
            {images.map(image => (
              <ItemImage  key={image.index} src={image.src} />
            ))}           
        </div>
      </div>
    </div>


  )
}

export default Carousel


