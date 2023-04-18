import React from 'react'
import styles from './IconText.module.css'

const IconText = ({ text, iconName, space }) => {
  let gap;
  if (space === 9) gap = 'nine';
  if (space === 4) gap = 'four';
  if (space === 6) gap = 'six';
  return (
    <div className={`${styles.iconText} ${styles[gap]}`}> 
      <img src={`${iconName}`} alt={`${iconName}`} className={styles.icon} />
      
      <p>{text}</p>
    </div>
  )
}

export default IconText