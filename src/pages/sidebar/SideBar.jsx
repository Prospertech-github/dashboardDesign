import React from 'react';
import styles from './SideBar.module.css';
import { DashBoardIcon, LighteningWelcome } from '../../components/icons/Icons';
import IconText from '../../components/iconText/IconText';

const SideBar = () => {
	return (
		<div className={styles.sidebar}>
			<button className={styles.btnWelcome}>
				{' '}
				<LighteningWelcome /> Welcome Keerthi{' '}
			</button>

			<div className={styles.navigations}>
				<IconText text="Dashboard" space={9}>
					{' '}
					<DashBoardIcon size={18} fill='white' />{' '}
				</IconText>
			</div>
		</div>
	);
};

export default SideBar;
