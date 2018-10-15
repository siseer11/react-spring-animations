import React from 'react';
import {Spring , config} from 'react-spring';

let d1 = 'M 93.738093,16.16369 82.398809,49.047617 51.782738,54.717262 79.752975,70.214285 68.41369,100.45238 94.116069,81.175594 122.84226,100.0744 111.125,69.836308 132.66964,55.095237 105.07738,49.803571 Z'
let d2 = 'M 93.738093,16.16369 64.633928,25.235117 51.782738,54.717262 55.562499,83.821428 68.41369,100.45238 95.249998,97.806546 122.84226,100.0744 87.690476,64.544641 132.66964,55.095237 119.0625,24.10119 Z'

export default class SvgSpring extends React.Component{
 render(){
  return(
   <Spring 
    config={{ tension: 50, friction: 300, restSpeedThreshold: 10 , delay : 500 }}
    from={{path : d1}} 
    to={{path : d2}}>
    {({path}) => (
       <svg>
        <path d={path}/>
       </svg>
    )}
   </Spring>

  )
 }
}