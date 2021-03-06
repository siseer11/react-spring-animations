import React , {Component} from 'react';
import { Spring , config , native , animated , interpolate} from 'react-spring';
import PropTypes from 'prop-types';

const [green,blue] = ['#2ecc71','#3498db']

const wrapperStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
const initStyle = {
    width: '200px',
    height: '80px',
    background: blue,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    borderRadius: '10px',
    cursor:'pointer',
}
const TransitionDiv = ({toggle , width , height , background , borderRadius , content , time , x , y})=>
<animated.div 
    onClick={toggle} 
    style={{...initStyle , 
            'width': width, 
            'height': height , 
            'background': background,
            'transform' : interpolate([x,y] , (translateX , translateY) => `translate(${translateX}px , ${translateY}px)`),
            'borderRadius': borderRadius,
    }}
>{content}</animated.div>


class SpringTwo extends Component {
    state = {
        circle : false,
        done : false,
    }

    toggleIt = () => this.setState(prev=>({ circle : !prev.circle }))

    render(){
        const [circle , done] = [this.state.circle , this.state.done]
        return(
            <div style={{...wrapperStyle}}>
                <Spring
                    native
                    onStart={()=>console.log('start')}
                    onRest={()=>console.log('rest')}
                    config={config.stiff} //tension friction
                    from={{time : 0 , x : -130 , y : -150}}
                    to = {{
                        width: circle?'50px':'200px',
                        height: circle?'50px':'80px',
                        background: circle?green:blue,
                        time : 3,
                        x : 0,
                        y : 0,
                        borderRadius: circle?'50%':'10px',
                    }}
                    toggle={this.toggleIt}
                    content={circle?'O':'click'}
                    children={TransitionDiv}
                />
            </div>
        )
    }
}

export default SpringTwo;