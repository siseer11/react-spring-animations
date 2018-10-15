import React, { Component } from "react";
import {Srping} from 'react-spring';

export default class Gallery extends Component{ 
 state = {
   pages : ['page1' , 'page2' , 'page3' , 'page4'],
   activePage : 0,
 }
 componentDidMount(){
  console.log(this.gallerySlides)
  galleryLogic(this.gallerySlides , [this.arrowLeft,this.arrowRight])
 }
 render(){
  const {pages:pagesList} = this.state;
  return (
   <div className='page-wrapper'>
    <div className='gallery-wrapper'>
     {
      pagesList.map((el,idx)=>(
       <div 
        key={el} 
        className={`gallerySlide ${idx==0?'active':''}`}
        ref={component=>{
         this.gallerySlides?(
          this.gallerySlides.push(component)
         ):(
          this.gallerySlides = [component]
         )
        }} 
       >
        <h2>{el}</h2>
       </div>
      ))
     }
     <div class='arrows'>
      <div className='arrow' data-to='-1' ref={(arrow)=>this.arrowLeft=arrow}>{'<'}</div>
      <div className='arrow' data-to='1' ref={(arrow)=>this.arrowRight=arrow}>{'>'}</div>
     </div>
    </div>
   </div>
  )
 }
}


function galleryLogic(slides , arrows){
let activeIdx = 0;

const nSlides = slides.length;

const changeItem = (arrowTo) => {

 slides[activeIdx].classList.remove('active');
 console.log(typeof(arrowTo))
 activeIdx += arrowTo;

 if(activeIdx<0){
  activeIdx = slides.length-1;
 }

 if(activeIdx==slides.length){
  activeIdx = 0;
 }

 slides[activeIdx].classList.add('active')

 console.log(arrowTo)
}

arrows.forEach(el=>el.addEventListener('click',(e)=> changeItem(Number(el.dataset.to))))
}