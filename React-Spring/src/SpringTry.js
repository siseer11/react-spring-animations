import React , {Component} from 'react';
import {Spring} from 'react-spring';


function randomNumber(min,max){
    return Math.floor((Math.random()*max-min)+min)
}


const randomColor = () => {
    return `rgb(${randomNumber(1,255)},${randomNumber(1,255)},${randomNumber(1,255)})`
}



class SrpingTry extends Component{
    state={
        color : randomColor(),
        width : randomNumber(50,200),
        height : randomNumber(50,200),
    }

    render(){
        return(
            <Spring 
                from={{
                    background:'black',
                    width : this.state.width,
                    height : this.state.height,
                }}
                to={{
                    background : this.state.color,
                    width : this.state.width,
                    height : this.state.height,
                }} 
                children={(styles)=><div onClick={()=>this.setState({color:randomColor(),width:randomNumber(50,200),height:randomNumber(50,200)})} style={styles}>Hello</div>}
                />
        )
    }
}






export default SrpingTry;