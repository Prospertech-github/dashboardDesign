import React from 'react'
import ColumnTitle from '../columnTitle/ColumnTitle'
import TaskCard from '../taskCard/TaskCard'
import styles from './GridItem.module.css'

const GridItem = () => {
  return (
    <div className={styles.gridItem}>
      <ColumnTitle text='To Do' number='3' />
      <TaskCard text='Usability testing' progress/>
    </div>
  )
}

export default GridItem