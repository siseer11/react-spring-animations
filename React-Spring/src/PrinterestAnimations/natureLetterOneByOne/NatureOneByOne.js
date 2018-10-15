import React from 'react';
import { LetterByLetterTrail } from './LetterByLaterTrail';
import { Keyframes, Spring, Trail, config, animated } from 'react-spring';
import { delay } from '../../keyframes/delay';

export default class NatureOneByOne extends React.Component {
	render() {
		return (

			<div className='nature-one-by-one page-wrapper'>
				<div className='nature-one-by-one-card'>
					<ImageBoxKeys native state='enter'>
						{({ bH, bS, iS, iD, leftOpacity, articleNumberY , ceapa }) => (
							<React.Fragment>
								<animated.div
									className='fake-bar'
									style={{
										transform: leftOpacity.interpolate(y => `translateY(-${50 - y * 50}%)`),
										opacity: leftOpacity,
									}}
								>
									<div className='fake-bar-left'>
										<h5>Photography.</h5>
									</div>
									<div className='fake-bar-right'>
										<div className='burger'>
											<span className='line'></span>
											<span className='line'></span>
											<span className='line'></span>
										</div>
									</div>
								</animated.div>

								<div className='left-content'>
									<div className='article-title'>
										<div className='article-number-wrapper'>
											<animated.h6 style={{ transform: articleNumberY.interpolate(y => `translateY(${y}%)`) }} className='article-number'>03.</animated.h6>
										</div>
										<animated.span>
											{
												bS.interpolate(y=>y==1&&<LetterByLetterTrail word='nature.'/>)
											}
										</animated.span>
									
									</div>
									<animated.p style={{ opacity: leftOpacity }} className='item-description'>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Laborum sed blanditiis architecto dolor accusantium! Est magni iusto dignissimos sequi dolorum
										ipsa.
									</animated.p>
									<animated.div style={{ opacity: leftOpacity }} className='see-more-wrapper'>
										<h4 className='underline see-more'>
											Take a look at the collection
									</h4>
									</animated.div>
								</div>

								<div className='image-box main-wrapper'>

									<animated.div
										className='black-box'
										style={{
											height: bH.interpolate(h => `${h}%`),
											transform: bS.interpolate(y => `scale(1,${y})`)
										}}
									>
									</animated.div>
									<animated.img
										className='main-image'
										src={window.location.origin + `/images/${'m2.jpg'}`}
										style={{
											transform: iS.interpolate(scale => `scale(${scale})`),
											display: iD.interpolate(i => i === 1 ? 'block' : 'none'),
										}}
									/>
								</div>
								<animated.div className='right-content'>
									{
										ceapa.interpolate(o => o === 1 && <RightEl />)
									}
								</animated.div>
							</React.Fragment>
						)}
					</ImageBoxKeys>
				</div>
			</div>

		)
	}
}

const ImageBoxKeys = Keyframes.Spring({
	enter: async (next) => {
		(console.log('all started'));
		await delay(500);
		await next({ from: { bH: 100, bS: 0, iS: 1.5, iD: 0, leftOpacity: 0, articleNumberY: 100 , ceapa : 0 }, to: { bS: 1 }, config: config.molasses });
		next({ to: { iD: 1 }, immediate: true });
		next({ to: { bH: -1, iS: 1 }, config: config.slow });
		await delay(800)
		next({to : {ceapa : 1} , immediate : true});
		await next({ to: { leftOpacity: 1 }, config: {tension :30 , friction : 30 , restSpeedThreshold : 0.1 , restDisplacementThreshold : 0.1 }});
		await next({ to: { articleNumberY: 0 }, config: config.stiff });
		(console.log('all ended'));
	}
})


const myArray = [
	{
		'caption': 'Created by',
		'value': 'John Smith',
	},
	{
		'caption': 'Featured image',
		'value': 'A Nice Mountain'
	},
	{
		'caption': 'Last update',
		'value': '2hours ago'
	}
]

const RightEl = props => (
	<div className='right-list'>
		<Trail
			from={{ y: 20, o: 0 }}
			to={{ y: 0, o: 1 }}
			keys={myArray.map(el => el.caption)}
			native
			config={config.molasses}
		>
			{
				myArray.map(
					el =>
						({ y, o }) => (
							<animated.div
								className='right-list-item'
								style={{
									opacity: o,
									transform: y.interpolate(y => `translateY(${y}px)`)
								}}
							>
								<React.Fragment>
									<h3 className='right-list-caption'>{el.caption}</h3>
									<p className='right-list-p'>{el.value}</p>
								</React.Fragment>
							</animated.div>
						)
				)
			}
		</Trail>
	</div>
)

				/*
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Laborum sed blanditiis architecto dolor accusantium! Est magni iusto dignissimos sequi dolorum 
				ipsa aspernatur odit ea fuga? Illo natus atque odio molestiae.
*/