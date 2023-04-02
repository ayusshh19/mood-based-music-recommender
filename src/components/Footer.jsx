import React, { useContext } from "react";
import styled from "styled-components";
import CurrentTrack from "./CurrentTrack";

import PlayerControls from "./PlayerControls";
import Volume from "./Volume";
import Moodcontrol from "./Moodcontrol";
import { UserContext } from "../App";
export default function Footer() {
  const { trackdata, settrackdata, playlistdata, setplaylistdata } =
    useContext(UserContext);
  return (
    <Container>
      <CurrentTrack />
      {trackdata ? <Moodcontrol /> : <PlayerControls />}

      <Volume />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #181818;
  border-top: 1px solid #282828;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;
