import React , {Component} from 'react';
import {Spring , animated , interpolate} from 'react-spring';

const MyDiv = ({x , borderTop, borderBot,toggle}) =>
<animated.div
    style={{
        boxShadow : '1px 1px 1px black',
        transform : x.interpolate(t=>`translateX(${t*100}px)`),
        background: x.interpolate({range : [0,1] , output : ['red' , 'green']}),
        border: interpolate([borderBot , borderTop] , (bb,bt)=> `${bt} 0 ${bb} 0 solid red`)
    }}
    onClick={toggle}
>
H
</animated.div>

class NativeInterpolate extends Component{
    state = {big:false};
    toggle = () => this.setState(prev => ({big:!prev.big}))
    render(){
        const big = this.state.big;
        return(
            <Spring 
                config={{tension:150 , friction:12 , restSpeedThreshold:0.1 , restDisplacementThreshold: 0.1 }}
                native
                onStart={()=>console.log('start')}
                onRest={()=>console.log('rest')}
                from={{x : 0 , borderTop : 12 , borderBot : 1 }}
                to={{x : big?1:0 , borderTop : 0 , borderBot : 15 }}
                toggle={this.toggle}
                children={MyDiv}
            />
        )
    }
}

export default NativeInterpolate;