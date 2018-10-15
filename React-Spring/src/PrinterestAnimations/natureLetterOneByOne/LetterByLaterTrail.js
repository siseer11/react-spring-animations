import React from 'react';
import { Trail, animated, config } from 'react-spring';

export const LetterByLetterTrail = ({ word, config = 'molasses', xFrom = 30, fSize = 80, fWeight = 800 }) => {
	word = word.split('')
	return (
		<div className='extra-wrapper'>
			<div className='wrappezzr' style={{ overflow: 'hidden' }}>
				<Trail
					native
					config={{tension : 400 , friction : 30 , restSpeedThreshold : 0.1 , restDisplacementThreshold : 0.1 }}
					keys={word.map((el, idx) => el + idx)}
					from={{ x: xFrom, opacity: 0 }}
					to={{ x: 0, opacity: 1 }}
				>
					{
						word.map(
							(el, idx) =>
								({ x, opacity }) =>
									<animated.p
										style={{
											display: 'inline-block',
											fontSize: fSize,
											fontWeight: fWeight,
											opacity: opacity,
											transform: x.interpolate(x => `translateY(${x}px)`),
										}}
									>
										{el}
									</animated.p>
						)
					}
				</Trail>
			</div>
		</div>
	)
}