import React from 'react'
import styles from "./contactUs.module.css"
const ContactUs = ({ textColor, numberColor }) => {
    return (
        <p className={styles.contactUs} style={{ color: textColor }}>Contact Us <span style={{ color: numberColor }}> +1 (78) 673 3567</span></p>
    )
}

export default ContactUs