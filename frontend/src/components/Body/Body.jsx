import React from 'react';
import Box from '../Box/Boxes';
import styles from '../Body/style.module.css'
const Body = () => {
    return (
        <div className={styles.container}>
            <input type="text" className={styles.search} placeholder='search..' />
            <div>
                <Box />
            </div>
        </div>
    );
};

export default Body;