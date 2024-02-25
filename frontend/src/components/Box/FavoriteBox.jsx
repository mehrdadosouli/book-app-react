import React from 'react';
import styles from './favoriteBox.module.css'

const FavoriteBox = ({texts,photos}) => {
    return (
        <div className={styles.container}>
       <div className={styles.left}>
        <div>
              <img src={`http://localhost:5000/assets/${photos}`} alt="photo" />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <h4>{texts.title}</h4>
            </div>
            <div className={styles.title}>
              <p>{texts.author}</p>
            </div>
            <div className={styles.description}>
              <div>{texts.language }</div>
              <div>{texts.pages } pages</div>
            </div>
          </div>
       </div>
    </div>
    );
};

export default FavoriteBox;