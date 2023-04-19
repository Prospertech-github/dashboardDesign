import React from 'react'
import ColumnTitle from '../columnTitle/ColumnTitle'
import TaskCard from '../taskCard/TaskCard'
import styles from './GridItem.module.css'
import TaskImage1 from '../../assets/images/cardImage1.png'
import TaskImage2 from '../../assets/images/cardImage2.png'
import TaskImage3 from '../../assets/images/cardImage3.png'

const GridItem = () => {
  return (
    <div className={styles.gridItem}>
      <ColumnTitle text='To Do' number='3' />
      <TaskCard text='Usability testing' progress />
      <TaskCard img text='Highfidelity Design' toDo imgName={TaskImage1}/>
    </div>
  )
}

export default GridItem