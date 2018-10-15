import React, { Component } from 'react';
import { Trail } from 'react-spring';

const initStyle = {
	width: '200px',
	height: '50px',
	background: 'orange',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}

class Trailxx extends Component {
	state = {
		items: ["item1", "item2", "item3", "item4", "item5", "item6"],
		moved: false,
	}
	move = () => this.setState(prev => ({ moved: !prev.moved }))
	render() {
		const { items, moved } = this.state;
		return (
			<ul>
				<Trail
					keys={items}
					from={{ scale: .5, opacity: 0 }}
					to={{ scale: moved ? .5 : 1, opacity: moved ? .5 : 1 }}
				>
					{
						items.map((el, idx) => ({ scale, opacity }) => <li onClick={this.move} style={{ ...initStyle, transform: `scale(${scale})`, opacity: opacity }} key={el}>{el}</li>)
					}
				</Trail>
			</ul>
		)
	}
}

export default Trailxx;