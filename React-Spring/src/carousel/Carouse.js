import React from 'react';
import carouselFunc from './carrouse-functionlaity';
import './Carouse.css';

export default class Carousel extends React.Component {
 componentDidMount(){
  carouselFunc()
 }

 render() {
  return (
   <div className='component-to-copy gb-image-carousel-1'>
    <ul className='carousel-1-images-list'>
    </ul>
    <div className='carousel-1-about-slide'>
     <h2 className='carousel-1-slide-title gb-text-black gb-title-medium-large-on-desktop'></h2>
     <a className='carousel-1-slide-author gb-text-black-opacity-50 gb-paragraph-small' href='#'></a>
    </div>
    <ul className='carousel-1-pagination'>
    </ul>
   </div>
  )
 }
}