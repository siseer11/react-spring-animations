import React from 'react';
import { Trail , config } from 'react-spring';


const links = ['Home' , 'About' , 'Gallery' , 'Contact' , 'Terms']

export default class TrailShit extends React.Component{
 state={
  opened : false,
 }

 toggleEvent = () => this.setState((prevState)=>({opened : !prevState.opened}))

 render(){
  const {opened} = this.state;
  return(
   <React.Fragment>
    <div
     onClick={this.toggleEvent}
     className='burger'
     style={{cursor:'pointer'}}>
     {opened?'Close':'Open'}
    </div>
    <div className='bar'>
     <Trail
      from={{x : -100 , opacity : 0}}
      to={{x : opened?0:(-100) , opacity : opened?1:0}}
      keys={
       links
      }
     >
      {
       links.map(
        link => ({x , opacity}) => (
         <div style={
          {
           transform:`translateX(${x}%)`,
           opacity : opacity,
           width: 100,
           height: 50,
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           backgroundColor: 'orange',
           color: 'white'
          }
         }>{link}</div>
        )
       )
      }
     </Trail>
    </div>
   </React.Fragment>
  )
 }
}