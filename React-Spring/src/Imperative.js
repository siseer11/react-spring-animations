import React , {Component} from 'react';
import {AnimatedValue , animated, interpolate, controller as spring} from 'react-spring';

const Imperative =()=>{
    const animation = new AnimatedValue('red');
    const hover = ()=>spring(animation , {to : 'red'}).start();
    const unhover = ()=>spring(animation , {to : 'blue'}).start()


    return(
        <animated.div
            style={{background : animation}}
            onMouseOver={hover}
            onMouseOut={unhover}
        >Hallo</animated.div>
    )
}

export default Imperative;