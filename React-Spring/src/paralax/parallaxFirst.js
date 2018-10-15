import React from 'react';
import {Parallax , ParallaxLayer , Spring} from 'react-spring';

export default class ParallaxFirst extends React.Component{
 render(){
  return(
   <Parallax pages={3} scrolling={true} horizontal ref={ref=>this.parallax = ref}>
    <ParallaxLayer offset={0} speed={0.5}>
      <Spring from={{opacity: 0}} to={{opacity: 1}}>
        {({opacity})=>(<h2 style={{opacity:opacity}} onClick={() => this.parallax.scrollTo(1)}>Hello</h2>)}
      </Spring>
    </ParallaxLayer>
    <ParallaxLayer offset={0.8} speed={0}>
      <h1 onClick={() => this.parallax.scrollTo(2)}>
        TUO
      </h1>
    </ParallaxLayer>
    <ParallaxLayer offset={1} speed={2}>
      <h2 style={{paddingTop:50}} onClick={() => this.parallax.scrollTo(0)}>
        TWOOO
      </h2>
    </ParallaxLayer>
    <ParallaxLayer offset={2} speed={2}>
      <span onClick={() => this.parallax.scrollTo(3)}>
        Tr3
      </span>
    </ParallaxLayer>
   </Parallax>
  )
 }
}