import React, { useEffect } from 'react'
import styles from '../Favorite/favorite.module.css'
export default function Favorite({data}) {
  useEffect(()=>{
    console.log(data);
  },[])
  return (
    <div className={styles.container}>
        <h2>Favorite</h2>
    </div>
  )
}
