import React , {Component} from 'react';
import {Spring , Trail , config , animated , interpolate} from 'react-spring';

let ulStyle = {
    width: '100%',
    height: '100vh',
    background: 'rgba(10,150,210,.8)'
}

let liInitStyle = {
    display : 'flex',
    width: '200px',
    height: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'orange',
    cursor: 'pointer',
    opacity: 1,
}
class Trails extends Component{
    state={
        items : ['Home' , 'Gallery' , 'About' , 'Contact'],
        toggled : false,
        
    }
    toggle = ()=>{
        this.setState(prevState=>({toggled:!prevState.toggled}))
    }
    render(){
        const {items , toggled} = this.state;
        return(
            <ul style={{...ulStyle}}>
            <Trail
                native
                config={config.wobbly}
                from={{opacity:0 , transform : 0}}
                to={{opacity: toggled?1:0 , transform : toggled?1:0}}
                keys={items}
            >
                {
                    items.map(el=>
                        ({opacity , transform})=>(
                            <animated.li 
                                onClick={this.toggle}
                                style={{
                                    ...liInitStyle,
                                    opacity: opacity,
                                    transform: transform.interpolate({range: [0,1] , output: [`translateX(-50%)`, `translateX(0)`]}),
                                }} 
                                key={el}
                            >
                                {el}
                            </animated.li>
                        )
                    )
                }

            </Trail>
            </ul>
        )
    }
}


export default Trails;