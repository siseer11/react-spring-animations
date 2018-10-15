import React from 'react';
import { Transition, config } from 'react-spring';


const sty = {
 width: 300,
 height: 100,
 background: 'orange',
 color: 'white',
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
 border: '1px solid black',
}
export default class TransitionNew extends React.Component {
 state = {
  show: true,
  list: ['one', 'two', 'three', 'four'],
 }

 hide = () => {
  this.setState((prev) => ({
   list: [...prev.list.slice(0, -1)],
  }))
 }

 render() {
  const list = this.state.list
  return (
   <div className='wrapp'>

    {this.state.show ? (
     <React.Fragment>
      <Transition
       onRest={() => {
        console.log('reeest')
       }}
       keys={list.map(el => el)}
       from={{ opacity: 0 }}
       enter={{ opacity: 1 }}
       leave={{ opacity: .5 }}
       config={{ tension: 50, friction: 100, restSpeedThreshold: 10 }}
      >
       {list.map(el => ({ opacity }) => <div style={{ ...sty, opacity }}>{el}</div>)}
      </Transition>
      <h2 onClick={this.hide}> HIDE </h2>
     </React.Fragment>
    ) : (
      <h2 onClick={this.hide}> SHOW </h2>
     )}

   </div>
  )
 }
}