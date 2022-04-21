import React, { useEffect } from 'react'
import './random.css';
function Randomimagefeed() {
  useEffect(()=>{
    getingRandomImages()
  },[])
  const getingRandomImages = ()=>{
    const container = document.querySelector('.container');
    const imageUrl = 'https://source.unsplash.com/random/';
    const row = 2;
    
    for(let r=0; r < row *3; r++){
      let img = document.createElement('img');
      img.src = `${imageUrl}`
      container.appendChild(img)
    }
    const getRandomSize = () =>{
      return `${getRandomNumber()}  x ${getRandomNumber()}`
    }
    
    const getRandomNumber = () =>{
      return Math.floor(Math.random() * 10) + 300;
    }
    console.log(getRandomSize());
    // console.log(getRandomNumber());
  }
  return (
    <>
        <h1>Random Image Feed</h1>
        <div className="container"></div>
    </>
  )
}

export default Randomimagefeed