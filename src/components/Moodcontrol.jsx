import React from "react";
import styled from "styled-components";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";
import { UserContext } from "../App";
import { useEffect, useState } from "react";
import { useContext } from "react";
export default function Moodcontrol() {
  const [mainset, setmainset] = useState(false);
  const { trackdata, settrackdata, playlistdata, setplaylistdata } =
    useContext(UserContext);
  const [audioElement, setAudioElement] = useState(null);

  useEffect(() => {
    if (playlistdata && !audioElement) {
      const audio = new Audio(playlistdata[0]?.preview_url);
      setAudioElement(audio);
      console.log(audioElement);
    }
  }, [ audioElement, playlistdata]);
  const changeState = async () => {
    setmainset(!mainset);
  
  };
  function handlePlay() {
    console.log(audioElement);
    if (audioElement) {
      audioElement.play();
      changeState();
    }
  }

  function handlePause() {
    console.log(audioElement)
    if (audioElement) {
      audioElement.pause();
      changeState();
      setAudioElement(null)
    }
  }

  return (
    <Container>
      <div className="shuffle">
        <BsShuffle />
      </div>
      <div className="previous">
        <CgPlayTrackPrev />
      </div>
      <div className="state">
        {mainset ? (
          <BsFillPauseCircleFill onClick={() => handlePause()} />
        ) : (
          <BsFillPlayCircleFill onClick={() => handlePlay()} />
        )}
      </div>
      <div className="next">
        <CgPlayTrackNext />
      </div>
      <div className="repeat">
        <FiRepeat />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .state {
    cursor: pointer;
  }
  gap: 2rem;
  svg {
    color: #b3b3b3;
    transition: 0.2s ease-in-out;
    &:hover {
      color: white;
    }
  }
  .state {
    svg {
      color: white;
    }
  }
  .previous,
  .next,
  .state {
    font-size: 2rem;
  }
`;
