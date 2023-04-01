import React from "react";
import styled from "styled-components";
import cardimg from "../logo.png";
import songimg from '../assets/songs.jpeg'
export default function Maincard(props) {
  // console.log(props)
  return (
    <Cards onClick={()=>props.setid(props.data.id)}>
      <img src={props.data.album.images[0].url} alt="" srcset="" />
    </Cards>
  );
}
const Cards = styled.div`
    width:175px;
    height:175px;
    margin:1rem;
    display:'flex';
    border-radius:2rem;
    justify-content:'center';
    align-items:'center';
    img{
        width:100%;
        height:100%;
        border-radius:1rem;
    }
`;
