import React from 'react';
import image1 from './img/hulk-1.jpg';
import image2 from './img/venom-1.jpg';
import image3 from './img/venom-2.jpg';
import Header from './component/Header';
import ImageCard from './component/ImageCard';
import SearchInput from './component/searchinput';

import './App.css';

function App() {
  return (
    <div>
      
      <Header/>
      
    
    
    <header class="header">
      <div class="container">
        <h1 class="title">Mavel's Fearless</h1>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p> 
       
<div >
          <SearchInput/>    

          </div>
      
       
        <div class="sample-wallpaper">
        <ImageCard url={image1}/>
        <ImageCard url={image2}/>
        <ImageCard url={image3}/>
        </div>
        

        
      </div>
    </header>



    </div>
  );
}

export default App;
