import React , {Component} from 'react';
import { Spring , config} from 'react-spring';
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
const TransitionDiv = ({toggle , width , height , background , borderRadius , content})=>
<div 
    onClick={toggle} 
    style={{...initStyle , 
            'width': width, 
            'height': height , 
            'background': background,
            'borderRadius': borderRadius,
    }}
>{content}</div>


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
                    onStart={()=>console.log('start')}
                    onRest={()=>console.log('rest')}
                    config={{tension:180 , friction:10}} //tension friction
                    to = {{
                        width: circle?'50px':'200px',
                        height: circle?'50px':'80px',
                        background: circle?green:blue,
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


