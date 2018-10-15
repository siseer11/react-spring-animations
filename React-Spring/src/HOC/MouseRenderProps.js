import React from 'react';

/*
Render prop is just a normal component which takes a function as child
then it calls it with some params, same as react spring.
*/

class WithMouseRenderProp extends React.Component{
 state = {
  x : 0,
  y : 0,
 }
 mouseHandler = (e) => {
  this.setState({
   x : e.clientX,
   y : e.clientY,
  })
 }
 render(){
  return(
   <div className='box' onMouseMove={this.mouseHandler}>
    {this.props.children(this.state)}
   </div>
  )
 }
}

export const RenderPropsMouse = props => (
 <div>
  <WithMouseRenderProp>
   {({x,y})=>(
    <h2>{x} {y}</h2>
   )}
  </WithMouseRenderProp>
 </div>
)