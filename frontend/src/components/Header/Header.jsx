import React from 'react';
import styles from '../Header/header.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
            <div><h1>Book App</h1></div>
            <div>Mehrdad Osouli</div>
        </div>
    );
};

export default Header;