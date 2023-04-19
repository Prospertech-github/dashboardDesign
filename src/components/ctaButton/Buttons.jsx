import React from 'react'
import styles from './Buttons.module.css'

export const AddTask = () => {
  return <button className={styles.addtaskButton}> &#43; Add Task </button>;
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
