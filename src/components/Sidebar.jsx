import React, { useContext } from "react";
import styled from "styled-components";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import Playlists from "./Playlists";
import logo from "../logo.png";
import { UserContext } from "../App";
export default function Sidebar() {
  const { trackdata, settrackdata, playlistdata, setplaylistdata } =
  useContext(UserContext);
  return (
    <Container>
      <div className="top__links">
        <div className="logo">
          <h2>
            <img src={logo} alt="" srcset="" /> Suno Jorse
          </h2>
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li onClick={()=>settrackdata(!trackdata)}>
            <IoLibrary />
            <span>{trackdata?'Mood playlist':'Your Library'}</span>
          </li>
        </ul>
      </div>
      <Playlists />
    </Container>
  );
}

const Container = styled.div`
  background-color: #002b5b;
  .logo h2 {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo h2 img {
    width: 2rem;
    height: 2rem;
  }
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 1rem 0;
      img {
        max-inline-size: 80%;
        block-size: auto;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
`;
