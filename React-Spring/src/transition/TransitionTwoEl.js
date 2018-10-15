import React , {Component} from 'react';
import { Transition , config} from 'react-spring';

const initStyle={
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '0',
    left: '0',
}

const CompA = ({opacity , transform , change}) => 
<div style={{...initStyle , opacity: opacity , transform : `translateY(${transform})` , background : 'orange'}} onClick={change} >A</div>

const CompB = ({opacity , transform , change}) =>
<div style={{...initStyle , opacity: opacity , transform : `translateY(${transform})` , background : 'purple'}} onClick={change}>B</div>


class TransitionTwoEl extends Component{
    state = {a : false , clickable: true}
    changeClickable = (to)=>{
        this.setState({
            clickable : to
        })
    }
    changeIt = ()=>{
        if(this.state.clickable){
            this.setState(prev=>({a: !prev.a , clickable : false}))
        }else{
            console.log('ho neboo')
        }
    }
    render(){
        const {a} = this.state;
        return(
            <Transition 
                onRest={()=>{
                    this.changeClickable(true)
                    console.log('reeest')
                }} 
                
                from={{opacity:1,transform:'0%'}} 
                enter={{opacity:1,transform:'0%'}} 
                leave={{opacity:1,transform:'-100%'}} 
                config={{...config.stiff }}
                change={this.changeIt}
            >
                {a?CompA:CompB}
            </Transition>
        )
    }
}

export default TransitionTwoEl;