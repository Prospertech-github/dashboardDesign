import React from 'react'
import styles from './Buttons.module.css'
import { PlusIcon } from '../icons/Icons';

export const AddTask = () => {
  return (
		<button className={styles.addtaskButton}>
			{' '}
			<PlusIcon fill="#7D8088" size={16}/> Add Task{' '}
		</button>
  );
}

export const SideBarButton = ({children, text}) => {
  return (
		<button className={styles.btnSideBar}>
			{children} {text}
		</button>
  );
}

export const PlainButton = ({ text }) => {
  return <button className={styles.plainBtn}>{text}</button>
}
