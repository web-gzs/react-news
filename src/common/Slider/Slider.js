import React from 'react';
import ReactSwipe from 'react-swipe';
import './Slider.css';
const Slider = (props) =>{
  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ 
          continuous: true,
          auto:1000
        }}
      >
      
        <div ><img src="http://img0.imgtn.bdimg.com/it/u=3445716062,4056082154&fm=26&gp=0.jpg" alt="" style={{height:'150px',width:'100%',marginTop:'38px',marginBottom:'0px'}}/></div>
        <div ><img src="http://img0.imgtn.bdimg.com/it/u=3556009802,2412315854&fm=26&gp=0.jpg" alt="" style={{height:'150px',width:'100%',marginTop:'38px',marginBottom:'0px'}}/></div>
        <div ><img src="http://img5.imgtn.bdimg.com/it/u=1881082793,2805077818&fm=26&gp=0.jpg" alt="" style={{height:'150px',width:'100%',marginTop:'38px',marginBottom:'0px'}}/></div>
       
      </ReactSwipe>
     
    </div>
  );
}
   
export default Slider;