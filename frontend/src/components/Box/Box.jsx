import React, { useEffect } from 'react'
import styles from '../Box/box.module.css'
export default function Box({AllPhoto}) {
    useEffect(()=>{
       
    },[])
  return (
    <div className={styles.container}>
        <div>
            <img src={`http://127.0.0.1:5000/photos/${AllPhoto}`} alt="" />
        </div>
        <div className={styles.heading}>
            <h4></h4>
            <span></span>
        </div>
    </div>
  )
}
