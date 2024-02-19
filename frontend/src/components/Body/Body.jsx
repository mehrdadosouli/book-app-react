import React, { useEffect, useState } from "react";
import styles from "../Body/style.module.css";
import Favorite from "./Favorite/Favorite";
import Boxes from "../Box/Boxes";
const Body = () => {
  const [favorite, setFavorite] = useState(null);

  useEffect(()=>{
    console.log(favorite);
  },[favorite])

  return (
    <div className={styles.container}>
      <input type="text" className={styles.search} placeholder="search.." />
      <div className={styles.body}>
        <Boxes btnFavorite={favorite} />
        {favorite && <Favorite />}
      </div>
    </div>
  );
};

export default Body;
