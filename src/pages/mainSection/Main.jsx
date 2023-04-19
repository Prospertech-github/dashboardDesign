import React from 'react'
import styles from './Main.module.css'
import Header from '../../components/heading/Header'
import GridItem from '../../components/gridItems/GridItem'

const Main = () => {
  return (
		<div className={styles.mainSection}>
			<Header />
			<div className={styles.contentSection}>
				<GridItem section="To Do" number={3} duo/>
				<GridItem section="Inprogress" number={1} />
				<GridItem section="Completed" number={2}  duo reverse/>
			</div>
		</div>
  );
}

export default Main