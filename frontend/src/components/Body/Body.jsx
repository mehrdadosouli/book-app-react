import React, { useEffect, useState } from "react";
import styles from "../Body/style.module.css";
import Favorite from "./Favorite/Favorite";
import Boxes from "../Box/Boxes";
import { useDispatch, useSelector } from "react-redux";
import { selectors } from "../../app/feauters/favoriteSlice";

const Body = () => {
  const [favorite, setFavorite] = useState(null);
  const selector = useSelector(selectors);
  useEffect(() => {
    setFavorite(selector.payload)
  }, [selector]);

  return (
    <div className={styles.container}>
      <input type="text" className={styles.search} placeholder="search.." />
      <div className={styles.body}>
        <Boxes />
        {favorite && <Favorite data={favorite} />}
      </div>
    </div>
  );
};

export default Body;
