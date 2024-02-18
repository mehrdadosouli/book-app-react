import React, { useContext, useEffect, useState } from "react";
import Box from "./Box";
import { PhotoContextProvider } from "../../context/ContextData";
const Boxes = () => {
  const photos = useContext(PhotoContextProvider);
  const [image, setImage] = useState([]);
  useEffect(() => {
    setImage(photos);
  }, [photos]);

  return <div>
    {
        image.map(photo=><><Box AllPhoto={photo} /></>)
    }
  </div>;
};
 
export default Boxes;
