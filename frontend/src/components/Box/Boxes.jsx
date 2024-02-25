import React, { useContext, useEffect, useState } from "react";
import Box from "./Box";
import { PhotoContextProvider } from "../../context/ContextData.jsx";
import { ContextTitle } from "../../context/ContextTitleProvider.jsx"
const Boxes = ({ handleClickLike }) => {
  const txt = useContext(ContextTitle)
  const photos = useContext(PhotoContextProvider);
  const [image, setImage] = useState([]);
  const [texts, setText] = useState([]);

  useEffect(() => {
    setImage(photos);
    setText(txt);
  }, [photos, txt]);

  return <div>
    {
      texts.map((item, index) => {
        const result = image.find(elem => elem == item.image);
        return (
          <div key={index}>
            <div key={item.id}><Box handleClickLike={() => handleClickLike(result, item)} AllPhoto={result} Alltext={item} /></div>
          </div>
        )
      })
    }
  </div>;
};

export default Boxes;
