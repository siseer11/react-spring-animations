import React from 'react';
import { Spring, config } from 'react-spring';

export default class PrinterestAnimation extends React.Component {
 render() {
  return (
   <div className='page-wrapper printerest-animation'>
    <Box />
   </div>
  )
 }
}

const Box = props => (
 <div className='box-wrapper'>
  <div className='left-side'>
   <div className='top'>
    <div className='top-left'>
     <h3>NORTH</h3>
    </div>
    <div className='top-right'>
     <h5>PLACES</h5>
     <h5>ABOUT</h5>
    </div>
   </div>
   <div className='main-content'>
    <Spring
     from={{y : 100, opacity : 0, }}
     to={{y : 0, opacity : 1,}}
     config={config.slow}
     delay={500}
    >
     {({y,opacity})=>(
      <HeaderTxt y={y} opacity={opacity} country='Iceland'/>
     )}
    </Spring>
    <Spring
     from={{y : 100, opacity : 0, }}
     to={{y : 0, opacity : 1,}}
     config={config.slow}
     delay={700}
    >
     {({y,opacity})=>(
      <ParagraphTxt y={y} opacity={opacity} txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Fusce aliquet odio quis dolor cursus fringilla. Aliquam ultrices odio sem,
      nec posuere nunc posuere at. Donec dignissim velit ut nibh feugiat scelerisque.'/>
     )}
    </Spring>
   </div>
   <div className='facts-box'>
    <div className='fact'>
     <p>Top activity</p>
     <h2>Swim in rivers.</h2>
    </div>
    <div className='fact'>
     <p>Population</p>
     <h2>5.352m people</h2>
    </div>
   </div>
  </div>
  <div className='right-side'>
   <Spring
    from={{ y: 100 }}
    to={{ y: 0 }}
    config={config.slow}
    delay={600}
    onRest={()=>console.log('rrreeeerrrseeestt')}
   >
    {({ y }) => (
     <Img y={y} src='bg.jpg'/>
    )}
   </Spring>
   <div className='right-content-arrow'>-></div>
  </div>
 </div>
)

const Img = ({y , src}) => (
 <img style={{transform:`translateY(${y}%)`}} src={window.location.origin + `/images/${src}`} />
)

const HeaderTxt = ({y , opacity , country}) => (
 <React.Fragment>
  <h1 style={{transform: `translateY(${2 * y}%)` , opacity : opacity}} className='main-title'>Beautiful</h1>
  <h1 style={{transform: `translateY(${2 * y}%)` , opacity : opacity}} className='main-title'>{country}</h1>
 </React.Fragment>
)

const ParagraphTxt = ({y, opacity , txt}) => (
 <p
 style={{transform: `translateY(${2 * y}%)` , opacity : opacity}}
 >
  {txt}
 </p>
)