import React from 'react'
import styles from "./navbar.module.css"
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Practise Area</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar