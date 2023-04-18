import React from 'react';
import styles from './Slider.module.css';

const Slider = ({ half, color }) => {
	let bgColor;
	if (color == 'orange') bgColor = 'orange';
  if (color == 'green') bgColor = 'green';
  
	return (
		<div className={`${styles.slider} ${styles[bgColor]}`}>
			{half && <div />}
		</div>
	);
};

export default Slider;
