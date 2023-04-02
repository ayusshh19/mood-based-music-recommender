import React, { useEffect } from "react";
import { useState, createContext } from "react";
import Login from "./components/Login";
import Spotify from "./components/Spotify";
import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";
export const UserContext = createContext();
export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  const [trackdata, settrackdata] = useState();
  const [playlistdata, setplaylistdata] = useState();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
    document.title = "Spotify";
  }, [dispatch, token]);
  return (
    <div>
      {token ? (
        <UserContext.Provider value={{trackdata, settrackdata,playlistdata, setplaylistdata}}>
          <Spotify />
        </UserContext.Provider>
      ) : (
        <Login />
      )}
    </div>
  );
}
