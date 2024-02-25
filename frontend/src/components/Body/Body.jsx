import React, { useEffect, useState } from 'react';
import Boxes from '../Box/Boxes';
import styles from '../Body/style.module.css'
import FavoriteBox from '../Box/FavoriteBox';
const Body = () => {
    const [data,setData]=useState({
        allPhoto:[],
        allText:[]
    })
    const handleClickLike=(photo,text)=>{
        const hasText = data.allText.find(item => item.title === text.title);
        const hasPhoto = data.allPhoto.find(item => item === photo);
        if (hasText && hasPhoto) {
            // dislike
            setData(prev=>({...prev,allPhoto: data.allPhoto.filter(item => item !== photo), allText: data.allText.filter(item => item.id !== text.id)}))

        } else {
            // like
            const oldPhoto = data.allPhoto;
            oldPhoto.push(photo);
            const oldText = data.allText;
            oldText.push(text);
            setData(prev=>({...prev,allPhoto: oldPhoto, allText: oldText}))
        }
}
    useEffect(()=>{
        
    },[data])
    return (
        <div className={styles.container}>
            <input type="text" className={styles.search} placeholder='search..' />
            <div className={styles.boxs}>
                <div className={data.allPhoto.length ? styles.boxes : styles.leftBox}>
                    <Boxes handleClickLike={handleClickLike}/>
                </div>
                {
                   data.allPhoto.length ? 
                    <div className={styles.favoriteBox}>
                     {data.allText.map((text,index)=><FavoriteBox texts={text} photos={data.allPhoto[index]} />)} 
                     </div>
                    : ""
                }
            </div>
        </div>
    );
};

export default Body;
