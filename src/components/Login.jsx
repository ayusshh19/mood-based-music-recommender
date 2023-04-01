import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import logo from '../logo.png'
export default function Login() {
  const handleClick = async () => {
    const client_id = "89da00ab461f44c8a164e3dc809797e0";
    const redirect_uri = "http://localhost:3000/";
    const api_uri = "https://accounts.spotify.com/authorize";

    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
      <Maincontent>
        <h2>
          <img src={logo} alt="" />
          <Typewriter
            options={{
              strings: ["Suno Jorse", "Duniya waalo"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </Maincontent>
      <button onClick={handleClick}>Connect Yourself</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1a5f7a;
  color: white;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: #002b5b;
    color: #159895;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
const Maincontent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #159895;
  font-size: 4em;
  h2{
    display: flex;
    justify-content: center;
  }
  img{
    width: 10rem;
    height: 10rem;
  }
  @media (max-width: 990px) {
    font-size: 2em;
    img{
    width: 5rem;
    height: 5rem;
  }
  }
`;
