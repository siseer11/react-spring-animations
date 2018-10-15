import React from 'react';
import { Spring, Keyframes, Trail, Transition , animated , interpolate , config} from 'react-spring';

const delay = (ms) => {
 return (
  new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve('done')
   }, ms)
  })
 )
}

const Springy = Keyframes.Spring({
 show: {from:{opacity : 0} , to: { opacity: 1 } , config : config.slow},
 showHide : [ { from:{opacity : 0} , to: { opacity: 1 } } , { to: { opacity: .5 } , delay : 2000}],
 awaytShowHide : async (next, ownProps) => {
  await next({from:{opacity : 0 , x : 0 , display : 1} , to : {opacity: 1 , display : 1}}),
  await delay(2000),
  await next({to : {opacity: 0}}),
  await delay(500),
  await next({to : {opacity: .5}})
  await delay(500),
  await next({to : {x : 200 , opacity: 0}}),
  await delay(50),
  await next({to : {display : 0}})
  await delay(500),
  await next({to : {display : 1}})
  await delay(50),
  await next({to : {x : 100 , opacity : 1}})
 }

})

export default class KeyframesShit2 extends React.Component {
 render() {
  return (
   <Springy native state={'awaytShowHide'} >
    {
     ({opacity,x,display}) => (
      <animated.div
       style={{
        width : 200,
        height : 200,
        borderRadius : 20,
        background : 'orange',
        opacity : opacity,
        transform : x.interpolate(x=>`translateX(${x}px)`),
        display : display.interpolate(d=>d===1?'block':'none')
       }}
      >

      </animated.div>
     )
    }
   </Springy>
  )
 }
}