import React from 'react'
import ColumnTitle from '../columnTitle/ColumnTitle'
import TaskCard from '../taskCard/TaskCard'
import styles from './GridItem.module.css'
import { AddTask } from '../ctaButton/Buttons'

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
							
						/>
						<TaskCard text="Usability testing" sliderStyle={sliderStyle} />
					</div>
				) : (
					<TaskCard
						img
						text="Highfidelity Design"
						sliderStyle ={sliderStyle}
					/>
        )}
        <AddTask />
			</div>
		);
}

export default GridItem