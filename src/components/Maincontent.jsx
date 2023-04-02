import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import currentlogo from "../assets/songs.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";
import Maincard from "./Maincard";
import { UserContext } from "../App";
export default function Maincontent() {
  const { trackdata, settrackdata, playlistdata, setplaylistdata } =
    useContext(UserContext);
  const [getalldetails, setgetalldetails] = useState([]);
  const [mainheader, setmainheader] = useState([]);
  const [playid, setplayid] = useState();
  useEffect(() => {
    console.log(playid);
    const filterdata = getalldetails.filter((data) => {
      return data.id === playid;
    });
    console.log(filterdata);
    setmainheader(filterdata);
    setplaylistdata(filterdata)
  }, [playid]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/")
      .then((data) => {
        setgetalldetails(data.data);
        console.log(data);
      })
      .catch(() => {
        console.log("something went wrong!!!");
      });
  }, []);
  return (
    <Mainspot>
      <div className="maintop">
        <div className="leftcurrent">
          <img src={mainheader[0]?.album?.images[0].url} alt="" srcset="" />
        </div>
        <div className="rightcurrent">
          <h5>{mainheader[0]?.album?.album_type}</h5>
          <h1>{mainheader[0]?.album?.name}</h1>
          <h5>
            <span
              onClick={() =>
                window.location.replace(
                  mainheader[0]?.artists[0]?.external_urls.spotify
                )
              }
            >
              {mainheader[0]?.artists[0]?.name}
            </span>{" "}
            | 2017 | 20 songs, 1 hr 38 min
          </h5>
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
          {getalldetails.length > 0
            ? getalldetails.map((data) => {
                return (
                  <SwiperSlide>
                    <Maincard data={data} setid={setplayid} />
                  </SwiperSlide>
                );
              })
            : "loading"}
        </Swiper>
      </div>
    </Mainspot>
  );
}
const Mainspot = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: #002b5b; */
  .swiper-scrollbar-drag {
    background-color: #fff;
  }
  .swiper-pagination-bullet-active {
    background-color: #fff;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    color: #fff;
  }
  .maintop {
    width: 100%;
    height: 55%;
    display: flex;
  }
  .maintop .leftcurrent {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .rightcurrent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    /* align-items:center; */
  }
  .rightcurrent span {
    cursor: pointer;
    color: #159895;
    font-weight: bold;
  }
  .rightcurrent h1 {
    font-size: 3rem;
  }
  .maintop img {
    width: 12rem;
    height: 12rem;
  }
  .mainbottom {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
