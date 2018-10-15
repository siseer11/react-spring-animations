import React,{Component} from 'react';
import {
    AnimatedValue,
    animated,
    interpolate,
    controller as spring,
  } from 'react-spring'
  
  const ImperativeApi = ({ children }) => {
    const animation = new AnimatedValue('#28d79f')
    const hover = () => spring(animation, { to: '#c23369' }).start()
    const unhover = () => spring(animation, { to: '#28d79f' }).start()
    
    return (
      <animated.div
        className="item"
        style={{ background: animation ,width : '200px',height:'50px'}}
        onMouseOver={hover}
        onMouseOut={unhover}>
        {children}
      </animated.div>
      
    )
  }

export default ImperativeApi;