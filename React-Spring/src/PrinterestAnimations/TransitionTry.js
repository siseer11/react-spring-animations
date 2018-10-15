import React from 'react';
import { Spring, Transition , config } from 'react-spring';

export default class TransitionTry extends React.Component{
 state = {
  visible : true,
  txtVisible : true,
  once : false,
 }

 toggleWhole = () => {
  if(this.state.once) return
  this.setState((prevState)=>({
   visible : !prevState.visible,
   once : true
  }))
 }

 toggleState = () => {
  this.setState(prevState=>({
   txtVisible : !prevState.txtVisible,
  }))
 }

 render(){
  const {visible , txtVisible} = this.state;
  return(
   <div>
    <div
     onClick = {this.toggleState}
     style={{
      width : 100,
      height : 20,
      border : '2px solid orange',
      cursor : 'pointer',
      textAlign : 'center',
     }}
    >{visible?'Hide':'Show'}</div>
    <Transition
     from={{opacity : 0}}
     enter={{opacity : 1}}
     leave={{opacity : 0}}
     delay={10}
     config={config.slow}
    >
     {visible && (({opacity})=>(
      <div
       style={{
        opacity : opacity,
        backgroundColor : 'orange',
        color: 'white',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 100
       }}
      >
       <Transition
        from={{y : 100 , opacity : 0}}
        enter={{y : 0 , opacity : 1}}
        leave={{y : -100 , opacity : 0}}
        delay={visible?500:0}
        onRest={()=>{
         if(!txtVisible){
          this.toggleWhole()
         }else{
          console.log('not now')
         }
        }}
        config={{ tension: 50, friction: 10, restDisplacementThreshold: 0.0050 }}
       >
        {txtVisible && (({y , opacity})=>(
         <p style={{transform:`translateY(${-y*2}%)` , opacity: opacity}}>BOX</p>
        ))}
       </Transition>  
      </div>
     ))}
    </Transition>
     
   </div>
  )
 }
}

/*

*******************
* LIST TRANSITION *
*******************

export default class TransitionTry extends React.Component{
 state = {
  items : [{key : 0 , text : 'First'} , {key : 1 , text : 'Second'} , {key : 2 , text : 'Third'}],
  inputVal : '',
 }

 deleteItem = (idx) => {
  this.setState((prevState)=>({
    items : [...prevState.items.slice(0,idx),
             ...prevState.items.slice(idx+1)]
   })
  )
 }

 changeHandler = () => {
  this.setState({
   inputVal : this.inputNode.value,
  })
 }

 submitHandler = (e) => {
  e.preventDefault();
  this.setState((prevState)=>{
   const lastKey = prevState.items[prevState.items.length-1].key;
   return {
   items : [...prevState.items , {key : lastKey+1  , text : this.state.inputVal}],
   inputVal : '',
   }
 })
 }

 render(){
  const items = this.state.items;
  return(
   <div className='ceapa'>
    <Transition
     keys={items.map(item => item.key)}
     from={{ opacity: 0, height: 0 , background : 'yellow'}}
     enter={{ opacity: 1, height: 30 , background : 'orange'}}
     leave={{ opacity: 0, height: 0 , background : 'yellow'}}>
     {items.map((item,idx) => styles => <Item itemIdx={idx} listener={this.deleteItem} styles={styles} text={item.text}/>)}
    </Transition>
    <form onSubmit={this.submitHandler}>
    <input ref={(node)=>this.inputNode=node} type='text' value={this.state.inputVal} onChange={this.changeHandler} />
    </form>
   </div>
  )
 }
}


const Item = ({text , styles , listener , itemIdx}) =>(
 <Spring
  from = {{background : 'white'}}
  to = {{background : 'red'}}
  delay = {1000}
 >
 {({background})=>(
  <li onClick={()=>listener(itemIdx)} style={{...styles }}>{text}</li>
 )}
 </Spring>
 
)



***********************************
* TWO OR MORE ELEMENTS TRANSITION *
***********************************

export default class TransitionTry extends React.Component {
 state = {
  toggle: true,
  first: true,
  clickAble : 0,
  txtVisible : true,
 }

 setClickAble = (to) => {
  this.setState(()=>({
   clickAble : to,
  }))
 }

 showNext = () => {
  
  if(this.state.clickAble === 1){
   // this.setClickAble(0);
   // this.setState(prevState => ({
   //  toggle: !prevState.toggle,
   //  first: false,
   // }))
   this.setState({
    txtVisible : false
   })
  }else{
   console.log('buggy')
  }
  

 }

 render() {
  const { toggle, first , clickAble , txtVisible} = this.state;
  return (
   <Transition
    from={{ opacity: first ? 1 : 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}
   >
    {
     toggle
      ? styles => <MyComponent visible={txtVisible} clickAble={clickAble} setClickAble={this.setClickAble} first={first} clickHandler={this.showNext} styles={styles} background='orange'>Iceland</MyComponent>
      : styles => <MyComponent visible={txtVisible} clickAble={clickAble} setClickAble={this.setClickAble} first={first} clickHandler={this.showNext} styles={styles} background='blue'>Sweden</MyComponent>
    }
   </Transition>
  )
 }
}

const MyComponent = ({ visible , children, styles, background, clickHandler , first , clickAble , setClickAble }) => (
 <div
  style={{
   width: '100vw',
   height: '100vh',
   position: 'absolute',
   top: 0,
   left: 0,
   backgroundColor: background,
   color: 'white',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   opacity: 1,
   flexDirection : 'column',
   ...styles
  }}
  onClick={clickHandler}
 >



  <Transition
   from = {{opacity: first?1:0 , y : first?0:100}}
   enter = {{opacity: 1 , y : 0}}
   leave = {{opacity : 0 , y : 100}}
   delay = {visible?500:0}
   config = {config.slow}
  >
   {visible && (({opacity , y}) => (
    <h2
     style={{
      transform: `translateY(${-y}%)`,
      opacity : opacity,
      fontSize: '100px',
     }}
    >
     {children}
    </h2>
   )
   )}
  </Transition>


  <Transition
   from = {{opacity: first?1:0 , y : first?0:100}}
   enter = {{opacity: 1 , y : 0}}
   leave = {{opacity : 0 , y : 100}}
   delay = {visible?500:200}
   config = {config.slow}
   onRest = {()=>{
    clickAble?(
     console.log('neboo?')
    ):(
     setClickAble(1)
    )
   }}
  >
   {visible && (({opacity , y})=>(
    <p
     style = {{
      opacity : opacity,
      transform : `translateY(-${y}%)`,
      fontSize : 12,
      lineHeight : '17px',
      maxWidth : 300,
      textAlign : 'center',
      marginTop : 15,
     }}
    >
     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     In suscipit delectus sapiente soluta modi. Recusandae necessitatibus ea deserunt v
     itae ipsam provident qui aliquid. Earum dolore rem ipsum dolores excepturi ratione?
    </p>
   ))}
  </Transition>
 </div>
)




*****************************
* SINGLE ELEMENT TRANSITION *
*****************************




*/