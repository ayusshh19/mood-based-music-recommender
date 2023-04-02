import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import { UserContext } from "../App";
import { useContext } from "react";
export default function CurrentTrack() {
  const { trackdata, settrackdata, playlistdata, setplaylistdata } =
  useContext(UserContext);
  const [{ token, currentPlaying }, dispatch] = useStateProvider();
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.data !== "") {
        const currentPlaying = {
          id: response.data.item.id,
          name: response.data.item.name,
          artists: response.data.item.artists.map((artist) => artist.name),
          image: response.data.item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
      }
    };
    getCurrentTrack();
  }, [token, dispatch]);
  return (
    <Container>
      {playlistdata && (
        <div className="track">
          <div className="track__image">
            <img src={playlistdata[0]?.album?.images[0].url} alt="currentPlaying" />
          </div>
          <div className="track__info">
            <h4 className="track__info__track__name">{playlistdata[0]?.album?.name}</h4>
            <h6 className="track__info__track__artists">
            {playlistdata[0]?.artists[0]?.name}
            </h6>
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;
    img{
      width:4rem;
      height:4rem;
    }
    &__image {
    }
    &__info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      &__track__name {
        color: white;
      }
      &__track__artists {
        color: #b3b3b3;
      }
    }
  }
`;
