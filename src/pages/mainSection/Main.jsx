import React from 'react'
import styles from './Main.module.css'
import Header from '../../components/heading/Header'
import GridItem from '../../components/gridItems/GridItem'

const Main = () => {
  return (
    <div className={styles.mainSection}>
      <Header />
      <div className={styles.contentSection}>
      <GridItem />
      </div>
    </div>
  )
}

export default Main