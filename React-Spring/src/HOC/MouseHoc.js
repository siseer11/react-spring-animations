import React from 'react';

const MyElement = ({mouse})=>(
 <h2>{mouse.x} {mouse.y}</h2>
)

const WithMouseHoc = (Component) => {
 return class extends React.Component{
  state = {
   x : 0,
   y : 0,
  }
  moveHandler=(e)=>{
   this.setState({
    x : e.clientX,
    y : e.clientY,
   })
  }
  render(){
   return(
    <div 
    style={{
     width: 200,
     height: 200,
     background: 'orange',
     color: 'white',
     textAlign: 'center',
    }}
    className='box'
    onMouseMove={this.moveHandler}
    >
     <Component {...this.props} mouse={this.state}/>
    </div>
   )
  }
 }
}

const MouseHoc = WithMouseHoc(MyElement);
export default MouseHoc;

