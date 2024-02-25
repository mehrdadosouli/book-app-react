import React from "react";
import Box from "./Box";
const Boxes = ({ handleClickLike,filterSearch,alltexts,image }) => {
  return <div>
    { !filterSearch.length ?
      alltexts.map((item, index) => {
        const result = image.find(elem => elem == item.image);
        return (
          <div key={index}>
            <div key={item.id}><Box handleClickLike={() => handleClickLike(result, item)} AllPhoto={result} Alltext={item} /></div>
          </div>
        )
      }) :
      filterSearch.map((item, index) => {
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
