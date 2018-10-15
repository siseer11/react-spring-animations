import React, {Component} from 'react';
import {Spring , animated , interpolate} from 'react-spring'



class NativeFlag extends Component{

    render(){
        return(

            <Spring native from={{radius:0, time:0, x:0, y:0 , color: 0}} to={{radius:10, time:1, x:100, y:200 , color: 255}}>
                {({radius,time,x,y,color})=>(
                    <animated.div
                        style={{
                            borderRadius : radius,
                            display : 'flex',
                            justifyContent : 'center',
                            alignItems : 'center',
                            background : time.interpolate(t => `rgba(0,0,0, ${1})`),
                            //color : interpolate([color] , g => `rgb(${g},150,${g})`),
                            color : time.interpolate({ range : [0,1] , output: ['red','blue'] }),
                            width: '200px',
                            transform : interpolate([x , y] , (x,y) => `translate(${x}px , ${y}px)`),
                            height: '100px',
                        }}>
                        Hello
                    </animated.div>

                )}

            </Spring>
        )
    }
}



export default NativeFlag;