import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { reducerCases } from "../utils/Constants";
import { useStateProvider } from "../utils/StateProvider";
import { useState } from "react";
import Loading from "./Loading";

export default function Playlists() {
  const [{ token, playlists }, dispatch] = useStateProvider();
  const [loading,setloading]=useState(false)
  const [filterurl,setfilterurl]=useState(false)
  useEffect(()=>{
    const getmood=async ()=>{
      // setloading(true)
      const data=await axios.get('http://127.0.0.1:5000/hello')
      setfilterurl(data.data[0].dominant_emotion)
      if(data){
        // setloading(false)
        console.log(data.data)
      }
    }
    getmood()
  },[])
  useEffect(() => {
    
    const getPlaylistData = async () => {
      console.log(token)
      const apirout="https://api.spotify.com/v1/me/playlists"
      const response = await axios.get(
        apirout,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch,filterurl]);
  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
  };
  return (
    <>
    {loading?<Loading/>:(
      <Container>
      <ul>
        {playlists.map(({ name, id }) => {
          return (
            <li key={id} onClick={() => changeCurrentPlaylist(id)}>
              {name}
            </li>
          );
        })}
      </ul>
    </Container>
    )}
    </>
  );
}

const Container = styled.div`
  color: #b3b3b3;
  height: 100%;
  overflow: hidden;
  background-color: #002b5b;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 55vh;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.7rem;
      &-thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
    li {
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
  }
`;
