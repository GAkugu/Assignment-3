import React from 'react';
import './ImageCard.css';

const ImageCard =(props)=>{
    return(
<div>
<article class="wallpaper">
            <img src={props.url} alt="Wallpaper #1" class="wallpaper" />
          </article>
</div>
    )
}

export default ImageCard;