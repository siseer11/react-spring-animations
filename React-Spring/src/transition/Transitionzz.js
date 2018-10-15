import React , { Component } from 'react';
import { Transition , config , animated} from 'react-spring'


const st = {
    display : 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'orange',
    width:'500px',
    marginBottom:'1px',
}
class Transitionzz extends Component{
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps)
        console.log(nextState)
        return true;
    }
    state = {items : ['item1' , 'item2' , 'item3']}
    addItem = ()=>this.setState(prev=>({items:[...prev.items , `item${prev.items.length+1}`]}))
    
    render(){
        const {items} = this.state;
        return(
            <div className='wrapper'>
                <div onClick={this.addItem}>ADD</div>
                <Transition
                    native
                    keys = {items.map(el=>el)}
                    from = {{opacity: 0}}
                    enter = {{opacity: 1}}
                    leave = {{opacity: 0}}
                    config = {config.slow}
                >
                {items.map(item=> styles => <animated.li style={{...st, ...styles}}>{item}</animated.li>)}

                </Transition>
            </div>
        )
    }
}

export default Transitionzz;