import React,{Component} from 'react';
import {Spring , config , animated , interpolate} from 'react-spring';
import PropTypes from 'prop-types';

const flexCenter = {
    display : 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 10,
    height: 20,
    opacity: .5,
}

const MyDiv = ({
    x,
    switchz,
})=>
<animated.div style={{
                    ...flexCenter,
                    width: x.interpolate({range:[0,1], output:['10px','100px'] }),
                    height: x.interpolate({range:[0,1] , output:['20px' , '300px']}),
                    opacity: x.interpolate({range:[0,1] , output:[.5,1]}), 
                    background: 'orange'
                 }} onClick={switchz} >MyDiv</animated.div>

class SpringOne extends Component{
    state = {
        full : false,
    }
    switcher = ()=>this.setState(prev=>({full:!prev.full}))
    render(){
        const {full} = this.state;
        return(
            <Spring
                native
                config={{tension:80 , friction: 20 , restSpeedThreshold:0.08 , restDisplacementThreshold: 0.08}}
                onRest={()=>console.log('rreest')}
                onStart={()=>console.log('startt')}
                to={{
                    x:full?1:0
                }}
                switchz={this.switcher}
                children={MyDiv} 
            />
        )
    }
}

export default SpringOne;

/*
const MyDiv = ({
    width,
    height,
    opacity,
    switchz,
})=>
<div onClick={switchz} style={{...flexCenter,width:width,height:height,opacity:opacity, background: 'orange'}}>MyDiv</div>

class SpringOne extends Component{
    state = {
        full : false,
    }
    switcher = ()=>this.setState(prev=>({full:!prev.full}))
    render(){
        const {full} = this.state;
        return(
            <Spring
                config={{tension:80 , friction: 20}}
                onRest={()=>console.log('rreest')}
                onStart={()=>console.log('startt')}
                to={{
                    width:full?'200px':'10px',
                    height:full?'300px':'20px',
                    opacity:full?1:.5,
                }}
                switchz={this.switcher}
                children={MyDiv} 
            />
        )
    }
    */