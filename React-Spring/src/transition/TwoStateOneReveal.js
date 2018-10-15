import React , {Component} from 'react';
import {Transition,animated} from 'react-spring';

const basicStyle = {
    width : '100%',
    height: '100vh',
    margin: '0px',
    padding: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '40px',
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    left: 0,
}

const CompA = ({opacity , changeState , transform})=>
<animated.div onClick={changeState} style={{...basicStyle , transform: transform, background : '#e67e22' , opacity : opacity}}>COMP-A</animated.div>

const CompB = ({opacity , changeState , transform})=>
<animated.div onClick={changeState} style={{...basicStyle ,transform: transform, background : '#bdc3c7' , opacity : opacity}}>COMP-B</animated.div>



class TwoElTransition extends Component{
    state = {first:true}
    changeState = () => this.setState(prev=>({first : !prev.first}))
    render(){
        return(
            <Transition
                native
                config={{tension:150 , friction:50 , restSpeedThreshold:0.1 , restDisplacementThreshold: 0.1 }}
                from={{opacity:0,transform:'translateY(0%)'}}
                enter={{opacity:1,transform:'translateY(0%)'}}
                leave={{transform:'translateY(-100%)'}}
                changeState={this.changeState}
            >
            {this.state.first?CompA:CompB}
            </Transition>


        )
    }
}

export default TwoElTransition;