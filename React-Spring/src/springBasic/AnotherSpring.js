import React , {Component} from 'react';
import {Spring , config} from 'react-spring';

const MyDiv = ({width , height , background , toggle}) =>
<div style={{
    width : width,
    height: height,
    background: background,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}} onClick={toggle}>Hallow</div>

class AnotherSpring extends Component {
    state = {
        big : false,
    }
    toggle = () => this.setState(prev=>({big : !prev.big}))
    render(){
        const big = this.state.big;
        return(
            <Spring
                config={{tension : 120 , friction : 15 , restSpeedThreshold : 0.1 , restDisplacementThreshold : 0.1 , velocity: 20}}
                from={{
                    with : '100px',
                    height : '50px',
                    background : 'rgba(150,100,210,.8)',
                }}
                to={{
                    width : big?'300px':'100px',
                    height: big?'100px':'50px',
                    background:big?'rgba(150,35,110,.5)':'rgba(150,100,210,.8)',
                }}
                toggle={this.toggle}
                children={MyDiv}
            />
        )
    }
}

export default AnotherSpring;