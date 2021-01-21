import React, {useRef, useEffect} from 'react';

const ImageComponent = ({src, refArray}) => {
    const image = useRef(src);

    useEffect(() =>{
      refArray.push(image);
    })
    return(
        <img src={src} alt={src} ref={image}/>
    )
}

export default ImageComponent;