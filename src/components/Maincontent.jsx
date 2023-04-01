import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import currentlogo from '../assets/songs.jpeg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";
import Maincard from "./Maincard";
export default function Maincontent() {
  // useEffect(()=>{
  //     axios.get('http://127.0.0.1:8000/').then((data)=>{
  //     console.log(data)
  //     }).catch(()=>{
  //         console.log('something went wrong!!!')
  //     })
  // })
  return (
    <Mainspot>
      <div className="maintop">
        <div className="leftcurrent">
          <img src={currentlogo} alt="" srcset="" />
        </div>
        <div className="rightcurrent">
          <h4>details</h4>
        </div>
      </div>
      <div className="mainbottom">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={6}
          className="mySwiper"
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          preventClicks={false}
          allowSlideNext={true}
          allowSlidePrev={true}
          preventClicksPropagation={false}
        >
          <SwiperSlide>
            <Maincard />
          </SwiperSlide>
          <SwiperSlide>
            <Maincard />
          </SwiperSlide>
          <SwiperSlide>
            <Maincard />
          </SwiperSlide>
          <SwiperSlide>
            <Maincard />
          </SwiperSlide>
          <SwiperSlide>
            <Maincard />
          </SwiperSlide>
          <SwiperSlide>
            <Maincard />
          </SwiperSlide>
          <SwiperSlide>
            <Maincard />
          </SwiperSlide>
          <SwiperSlide>
            <Maincard />
          </SwiperSlide>
          <SwiperSlide>
            <Maincard />
          </SwiperSlide>
        </Swiper>
      </div>
    </Mainspot>
  );
}
const Mainspot = styled.div`
  width: 100%;
  height: 70vh;
  display: flex ;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: #002b5b; */
  .swiper-scrollbar-drag{
    background-color:#fff;
  }
  .swiper-pagination-bullet-active{
    background-color:#FFF;
  }
  .swiper-button-prev:after,.swiper-button-next:after{
    color:#fff;
  }
  .maintop {
    width: 100%;
    height: 55%;
    display:flex;
  }
  .maintop .leftcurrent{
    width:50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .maintop img{
    width:18rem;
    height:18rem;
  }
  .mainbottom {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
