import React from 'react';
import { Spring, Trail, Transition, animated, interpolate, Keyframes, config } from 'react-spring';
import { data } from './data';
import { TopLabel, BottomInfos } from './TopBottomLabel';
import { MyImageAnimation, MyTextAnimation } from './animationsDefinition';


const Heading = ({ country }) => (
 <React.Fragment>
  <h2 className='main-title'>Beautiful</h2>
  <h2 className='main-title'>{country}</h2>
 </React.Fragment>
)

const Paragraph = ({ content }) => (
 <p className='main-paragraph'>{content}</p>
)



export default class PrinterestAnimationKeyframes extends React.Component {
 state = {
  activeOne: 0,
  firstIteration: false,
 }

 chnageState = () => {
  this.setState((prevState)=>({
   activeOne : prevState.activeOne==2?0:prevState.activeOne+1,
   firstIteration : true,
  }))
 }

 render() {
  const { activeOne, firstIteration } = this.state;
  return (
   <div className='page-wrapper printerest-animation'>
    <div className='box-wrapper'>
     <div className='static-for-the-moment'>
      <div onClick={this.chnageState} className='arrow'>ARROW</div>
      <TopLabel />
      <BottomInfos />
     </div>
     <div className='cards'>
      <div className='card'>
       {
        data.map((el, idx) => (
         <Card
          key={idx}
          state={
           activeOne === idx
            ? 'enter'
            : activeOne - 1 === idx
             ? 'leave'
             : 'off'
          }
           textArr={[el.headings , el.paragraph]} imgUrl={el.imageUrl} />
        ))
       }
      </div>
     </div>
    </div>
   </div>
  )
 }
}



const Card = ({ state, textArr, imgUrl }) => (
 <React.Fragment>
  <MyTextAnimation native state={state} keys={textArr.map(el => el.id)}>
   {
    textArr.map(el => ({ tY, display, opacity }) => (
     <animated.div
      key={el.id}
      className={el.classN}
      style={{
       opacity: opacity,
       transform: tY.interpolate(y => `translateY(${y}px)`),
       
      }}
     >
      {el.id.indexOf('paragraph')<0?(
       <Heading country={el.content}/>
      ):(
       <Paragraph content={el.content}/>
      )}
      
     </animated.div>
    )
    )
   }
  </MyTextAnimation>
  <MyImageAnimation native state={state}>
   {({ imgY, display }) => (
    <animated.img
     style={{
      transform: imgY.interpolate(y => `translateY(${y}%)`),
      display: display.interpolate(d => d === 1 ? 'block' : 'none'),
     }}
     className='card-image'
     src={window.location.origin + `/images/${imgUrl}`} >
    </animated.img>
   )}
  </MyImageAnimation>


 </React.Fragment>
)
/*
state={
           activeOne === idx
            ? (firstIteration ? 'enter' : 'stayActive')
            : activeOne - 1 === idx
             ? 'leave'
             : 'stayInactive'
          }
          */