import React , {Component} from 'react';
import {Transition , animated , config} from 'react-spring';

const defaultStyle = {
    width : '200px',
    height : '50px',
    background : 'red',
}
let i = 0;
class TransitionsBasics extends Component{
    state = {items : ['item']}
    addNew = (newItem) => this.setState(prev => ({ items : [...prev.items , newItem] }))
    removeLast = () => this.setState(prev => ({items : [...prev.items.slice(0,-1)]}))
    render(){
        return(
            <div className='wrapper'>
                <h2 onClick={()=>this.addNew(`item${i++}`)}>AddNEW</h2>
                <h2 onClick={this.removeLast}>Remove Last</h2>
                <ul>
                    <Transition
                        config={config.wobbly}
                        native
                        keys={this.state.items}
                        from={{opacity:0,transform:'translateX(200px) scale(1)'}}
                        enter={{opacity:1,transform:'translateX(0px) scale(1)'}}
                        leave={{opacity:0,transform:'translateX(0px) scale(0.5)'}}
                        update={{opacity:1,transform:'translateX(0px) scale(1)',color:'white'}}
                    >
                    {this.state.items.map(el=>styles=><animated.li style={{...defaultStyle , ...styles}}>{el}</animated.li>)}
                    </Transition>
                </ul>
                
            </div>
        )
    }
}


export default TransitionsBasics;