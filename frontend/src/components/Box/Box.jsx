import React, { useEffect, useState } from 'react'
import styles from '../Box/box.module.css'
import { IoHeart } from "react-icons/io5";
export default function Box({AllPhoto,Alltext,onFavoriteHandler}) {

  return ( 
    <div className={styles.container}>
       <div className={styles.left}>
        <div>
              <img src={`http://localhost:5000/assets/${AllPhoto}`} alt="" />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <h4>{Alltext.title}</h4>
            </div>
            <div className={styles.title}>
              <p>{Alltext.author}</p>
            </div>
            <div className={styles.description}>
              <div>{Alltext.language }</div>
              <div>{Alltext.pages } pages</div>
            </div>
          </div>
       </div>
       <div onClick={()=>onFavoriteHandler(Alltext)} className={styles.btnFav}> <IoHeart /></div>
    </div>
  )
}
