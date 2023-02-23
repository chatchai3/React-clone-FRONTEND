import React,{useEffect, useState} from "react";
import './Head.css';
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Head=(props)=>{
  const[status,setstatus]=useState(true)
  const params = {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  const params1 = {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
    const saved = localStorage.getItem("data");
    const initialValue = JSON.parse(saved);
    const saved1 = localStorage.getItem("data-2");
    const initialValue1 = JSON.parse(saved1);
    
  const focus_=()=>{
    setstatus(!status)
  }
  return(
    <>
    <div className='title'>
                    <h5>ฮิตที่ Netflix</h5>
    </div>
    <Swiper {...params} >
      {initialValue.map((e)=>{
        return(
          <div>
            <img src={e.Img}  />
          </div>
         
        )
      })}
      
    </Swiper>

    <div className='title'>
          <h5>ภาพยนตร์และรายการทีวีจากประเทศไทย</h5>
    </div>
    <Swiper {...params1} >
      {initialValue1.map((e)=>{
        return(
          <div>
            <img src={e.Img}  />
          </div>
         
        )
      })}
      
    </Swiper>
    
    </>
  )
  

}
export default Head