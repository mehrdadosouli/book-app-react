import React, { useContext, useEffect, useState } from "react";
import Box from "./Box";
import { PhotoContextProvider } from "../../context/ContextData.jsx";
import { ContextTitle } from "../../context/ContextTitleProvider.jsx"
const Boxes = () => {
  const txt = useContext(ContextTitle)
  const photos = useContext(PhotoContextProvider);
  const [image, setImage] = useState([]);
  const [texts, setText] = useState([]);
  useEffect(() => {
    setImage(photos);
    setText(txt);
  }, [photos,txt]);

  return <div>
    {
      texts.map(item=><div>
        {image.map(photo=><div key={photo}><Box AllPhoto={photo} Alltext={item} /></div>)}
      </div>)
    }
  </div>;
};
 
export default Boxes;
