import React, { useEffect, useState, createContext } from "react";

export const PhotoContextProvider = createContext(null);
export default function ContextData({ children }) {
  const [photo, setPhotos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/photos")
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data[0]);
      });
    },[]);
  return (
    <>
        <PhotoContextProvider.Provider value={photo}>
             {children}
        </PhotoContextProvider.Provider>
    </>
  )
}
