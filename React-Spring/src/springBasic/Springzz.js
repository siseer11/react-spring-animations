import React, { Component } from 'react';
import { Spring, config, } from 'react-spring';

const boxyStyle = {
	width: 300,
	height: 50,
	background: 'orange',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}

class Springzz extends Component {
	render(){
		return(
			<div className='wrapp'>
				<Spring from={{
					opacity : 1,
					number:0,
				}} to={{
					opacity : 1,
					number : 10000,
				}}
				config={{ tension: 200, friction: 300, restSpeedThreshold: 1000 }}

				>
					{({opacity , number })=>{
						number = Math.floor(number);
						if(number > 1000){
							number = (number/100).toFixed(1) + 'K'
						}
						return(
							<div className='boxy' style={{...boxyStyle , opacity}}>{number}</div>
						)
					}}
				</Spring>
			</div>
		)
	}
}

export default Springzz;
