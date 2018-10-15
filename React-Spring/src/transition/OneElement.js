import React,{Component} from 'react';
import {Spring , Transition} from 'react-spring'

const MyDiv = ({opacity , max})=>
<Spring
    to={{opacity: max?.5:opacity}}
>
    {styles => <div style={{width:'100px',height:'50px',background:'orange',opacity:styles.opacity}}>Hallow</div>}
</Spring>


const ShowButton = ({showDiv,background})=>
<div style={{cursor:'pointer',width:'100px',height:'50px',background:background}} onClick={showDiv}>SHOW</div>


class OneElementTransition extends Component {
    state = {showDiv : false , translateSelf: false}
    showDiv = () => this.setState(prev=>({showDiv:!prev.showDiv}))
    translateSelf = () => this.setState(prev=>({translateSelf:!prev.translateSelf}))
    render(){
        const showDiv = this.state.showDiv;
        return(
            <div className='wrapper'>
                <Spring
                    to={{
                        background : showDiv?'red':'green'
                    }}
                    showDiv={this.showDiv}
                    children={ShowButton}
                />
                <Transition 
                    from={{opacity : 0}}
                    enter={{opacity : 1}}
                    leave={{opacity : 0}}
                    max = {true}
                    >
                {showDiv && MyDiv}
                </Transition>
            </div>
        )
    }
}

export default OneElementTransition;