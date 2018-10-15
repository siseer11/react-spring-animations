import React, { Component } from 'react';
import { Keyframes, config } from 'react-spring';
import delay from 'delay';

const Anim = Keyframes.Spring({
	show: { from: { opacity: 0 }, to: { opacity: 1 } },

	showAndHide: [{ from: { opacity: 0 }, to: { opacity: 1 }, config: config.stiff }, { to: { opacity: .5 }, config: config.stiff }],

	wiggle: async call => {
		await call({ from: { opacity: 0 }, to: { opacity: 1 }, config: config.stiff })
		await delay(400)
		await call({ to: { opacity: .5 } })

	}
})


class Keyframeszz extends Component {
	render() {
		return (
			<Anim state='wiggle'>
				{styles => <div style={{ ...styles, width: '200px', height: '200px', background: 'orange' }}>Hello</div>}
			</Anim>
		)
	}
}

export default Keyframeszz;