import React from 'react';

export const TopLabel = ({region}) => (
 <div className='top'>
  <div className='top-left'>
   <h3>NORTH</h3>
  </div>
  <div className='top-right'>
   <h5>PLACES</h5>
   <h5>ABOUT</h5>
  </div>
 </div>
)

export const BottomInfos = (props) => (
 <div className='facts-box'>
 <div className='fact'>
  <p>Top activity</p>
  <h2>Swim in rivers.</h2>
 </div>
 <div className='fact'>
  <p>Population</p>
  <h2>5.352m people</h2>
 </div>
</div>
)