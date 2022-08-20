import React from 'react'
import {useRef} from'react'
import './star.css'
import Page from './Page';
import { useSlotProps } from '@mui/base';


  export default function Star(props){

    const StarStar = useRef(); //useRef 지정
    const Star1=useRef(null);

    
    const drawStar1=() => {
      StarStar.current.style = 'width:'+Star1.current.value*20+'%'
      //setvalue=Star1.current.value
      //console.log(Starvalue);
    }

    
    
  return(
  <span className="star">
    ★★★★★
    <span className='star_span' ref={StarStar} >★★★★★</span>
    <span><input type="range" ref={Star1} onInput={drawStar1} defaultValue="1"  step="1" min="0" max="5" className='star_input'
    onChange={event=>props.starvalue(event.target.value)}/>
    
  </span>
  </span>
  )
  }