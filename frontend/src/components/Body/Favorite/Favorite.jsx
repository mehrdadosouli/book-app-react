import React, { useEffect } from "react";
import styles from "../Favorite/favorite.module.css";
export default function Favorite({ data }) {
  useEffect(() => {
    console.log(data);
  });
  return (
    <>
      <h2>Favorite</h2>
      {data.map((item) => (
        <div className={styles.left}>
          <div>
            <img src={`http://localhost:5000/assets/${item.image}`} alt="" />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <h4>{item.title}</h4>
            </div>
            <div className={styles.title}>
              <p>{item.author}</p>
            </div>
            <div className={styles.description}>
              <div>{item.language }</div>
              <div>{item.pages } pages</div>
            </div>
          </div>
       </div>
      ))}
    </>
  );
}
