import React from 'react'
import ColumnTitle from '../columnTitle/ColumnTitle'
import TaskCard from '../taskCard/TaskCard'
import styles from './GridItem.module.css'
import TaskImage1 from '../../assets/images/cardImage1.png'
import TaskImage2 from '../../assets/images/cardImage2.png'
import TaskImage3 from '../../assets/images/cardImage3.png'

const GridItem = ({ section, number, duo, reverse }) => {
  let sliderStyle;
  if (section === 'To Do') sliderStyle = 'toDo';
  if (section === 'Inprogress') sliderStyle = 'progress';
  if (section === 'Completed') sliderStyle = 'completed';

		return (
			<div className={styles.gridItem}>
				<ColumnTitle text={section} number={number} />
				{duo ? (
					<div
						className={`${styles.flexItems} ${
							reverse && styles.reverse
						}`}
					>
						<TaskCard
							img
							text="Highfidelity Design"
							sliderStyle={sliderStyle}
							imgName={TaskImage1}
						/>
						<TaskCard text="Usability testing" sliderStyle={sliderStyle} />
					</div>
				) : (
					<TaskCard
						img
						text="Highfidelity Design"
						sliderStyle ={sliderStyle}
						imgName={TaskImage1}
					/>
				)}
			</div>
		);
}

export default GridItem