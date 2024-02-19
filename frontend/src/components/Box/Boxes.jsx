import React, { useContext, useEffect, useState } from "react";
import Box from "./Box";
import { PhotoContextProvider } from "../../context/ContextData.jsx";
import { ContextTitle } from "../../context/ContextTitleProvider.jsx";

const Boxes = ({ btnFavorites }) => {
  const txt = useContext(ContextTitle);
  const photos = useContext(PhotoContextProvider);
  const [image, setImage] = useState([]);
  const [texts, setText] = useState([]);
  const [btnFavorite, setBtnFav] = useState([]);

const btnFavoriteHandler=(itemm)=>{  
  
  }
  useEffect(() => {
    setImage(photos);
    setText(txt);
  },[txt,photos]);

  return (
    <div style={!texts? { width: "100%" } : { width: "70%" }}>
      {texts.map((item) => (
        <div key={item.id}>
          {image.map((photo) => (
            <div key={photo.id}>
              <Box
                AllPhoto={photo}
                Alltext={item}
                onFavoriteHandler={btnFavoriteHandler}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
  
  
  
};

export default Boxes;
