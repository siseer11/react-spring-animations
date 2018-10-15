import React , {Component} from 'react';
import { Keyframes , Spring , config ,animated , interpolate} from 'react-spring'
import delay from 'delay';

const fast = {...config.stiff, restSpeedThreshold: 0.1 , restDisplacementThreshold : 0.1}

const Container = Keyframes.Spring({
    //peek
    peek : [
        {delay:400, from: {x : 0} , to: {x : 1} , config : config.stiff},
        {delay: 2000 , to: { x :0 } , config : config.stiff },
    ],
})


const MyDiv = ({
    scale
})=>(
    <div style={{width: '200px' , height: '200px' , background: 'red' , transform : `scale(${scale})`}} ></div>
)

class KeyframesFrist extends Component{
    render(){
        return(
           <Spring from={{scale : 0}} to={{scale: 1}} children={MyDiv} config = {config.stiff}/>
        )
    }
}

export default KeyframesFrist;