import React from 'react';
import { Keyframes, Spring, Transition, config, animated } from 'react-spring';

const delay = (ms) => (
 new Promise((resolve, reject) => {
  setTimeout(() => {
   resolve()
  }, ms)
 })
)


const Sidebar = Keyframes.Spring({
 undef: { to: { x: -100 } },
 open: { to: { x: 0 } , config : config.gentle },
 close: { to: { x: -100 }, delay: 500, config : config.stiff }
})

const SidebarContent = Keyframes.Trail({
 undef: { to: { x: -150 } },
 open: async call => {
  await delay(400)
  await call({ to: { x: 0 } , config : config.gentle})
 },
 close: { to: { x: -150 } , config : config.stiff}
})


export default class KeyframeShit extends React.Component {
 state = {
  open: undefined,
  items: [
   <Avatar src='bg.jpg'/>,
   <Input placeholder='User name' />,
   <Input placeholder='Password' />,
   <React.Fragment>
    <div style={{marginTop:30, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
     <p style={{ fontSize: '11px', opacity: .8, margin: '5px 0' }}>Remember me!</p>
     <a style={{ fontSize: '11px', opacity: .8, margin: '5px 0' }} href='#'>Forgot Password</a>
    </div>
    <Button value='Log-in' />
    <p style={{ fontSize: '11px', opacity: .8, margin: '10px 0' }}>Or <a href='#'>register now!</a></p>
   </React.Fragment>
  ]
 }

 toggle = () => this.setState((prevState) => ({ open: !prevState.open }))

 render() {
  const { open , items } = this.state;
  const state = open === true ? 'open' : open === false ? 'close' : 'undef';


  return (
   <div className='shit-wrapper'>
    <p onClick={this.toggle} style={{ zIndex: 10, padding: '20px', position: 'fixed', top: 0, left: 0, cursor: 'pointer' }} className='burger'>{open === true ? 'x' : '+'}</p>
    <Sidebar native state={state}>
     {
      ({ x }) => (
       <animated.div style={{
        width: 320,
        boxSizing: 'border-box',
        height: '100vh',
        backgroundColor: 'rgb(240,240,240)',
        position: 'absolute',
        padding: '60px 30px',
        top: 0,
        left: 0,
        transform: x.interpolate(x => `translateX(${x}%)`)
       }}>
        <SidebarContent  native keys={items.map((el, i) => i)} state={state}>
         {
          items.map((el, idx) => ({ x, ...props }) => (
           <animated.div
            style={{
             ...props,
             transform: x.interpolate(x => `translateX(${x}%)`)
            }}
           >
            {el}
           </animated.div>
          ))
         }
        </SidebarContent>
       </animated.div>
      )
     }

    </Sidebar>


   </div>
  )
 }
}

const flexCenter = {
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
}

const Avatar = ({ src }) => (
 <div className='avatar'
  style={{
   width: '100%',
   ...flexCenter,
   marginBottom: '50px'
  }}
 >
  <img
   src='url'
   src={window.location.origin + `/images/${src}`} alt='avatar'
   style={{
    width: 150,
    height: 150,
    borderRadius: '50%',
    margin : 0,
   }}
  />
 </div>
)

const Input = ({ placeholder }) => (
 <input
  style={{
   width: '100%',
   height: 30,
   padding: '0px 20px',
   borderRadius: '5px',
   border: '1px solid rgb(220 , 220 , 220)',
   margin: '5px 0',
   boxSizing: 'border-box'
  }}
  type='text'
  placeholder={placeholder} />
)


const Button = ({ value }) => (
 <div
  className='btn'
  style={{
   width: '100%',
   height: 30,
   textAlign: 'center',
   color: 'white',
   borderRadius: '5px',
   backgroundColor: '#1890ff',
   margin: '5px 0',
   boxSizing: 'border-box',
   ...flexCenter,
   fontSize: '12px',

  }}
 >
  {value}
 </div>
)




/*

const Container = Keyframes.Spring({
 show : { to : { opacity : 1 } , from : {opacity : 0} , delay : 100 , config : config.slow},
 
 showAndHide : [
  {from : {opacity : 0} , to : {opacity : 1} , delay : 50 , config : config.slow},
  {to : {opacity : 0}, delay: 2000 , config : config.slow},
  {to : {opacity : .5} , delay: 2500 , config : config.slow },
 ],

 asyncTry : async (next , ownProps) => {
  console.log(ownProps , next);
  await next({to : {opacity: .5}})
  await delay(5000)
  await next({to : {opacity: 1}})
 } 
})

*/