import React from 'react';
import styles from './ColumnTitle.module.css';

const ColumnTitle = ({ text, number }) => {
	return (
		<div className={styles.column}>
			{text}
			<div>{number}</div>
		</div>
	);
};

export default ColumnTitle;
