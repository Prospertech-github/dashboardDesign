import React from 'react'
import SideBar from '../sidebar/SideBar'
import Main from '../mainSection/Main'
import styles from './DashBoard.module.css'

const DashBoard = () => {
  return (
    <div className={styles.dashboard}>
      <SideBar />
      <Main />
    </div>
  )
}

export default DashBoard