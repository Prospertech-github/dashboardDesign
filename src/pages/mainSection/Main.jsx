import React from 'react'
import styles from './Main.module.css'
import Header from '../../components/heading/Header'

const Main = () => {
  return (
    <div className={styles.mainSection}>
      <Header />
      <div className={styles.contentSection}>

      </div>
    </div>
  )
}

export default Main