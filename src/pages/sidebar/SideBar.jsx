import React from 'react';
import styles from './SideBar.module.css';
import {
	DashBoardIcon,
	LighteningWelcome,
	SettingsIcon,
	LighteningIcon,
	UsersIcon,
	AddUserIcon,
	AffliateIcon,
} from '../../components/icons/Icons';
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
					<DashBoardIcon size={18} fill="white" />
				</IconText>

				<IconText text="Settings" space={9}>
					<SettingsIcon size={18} fill="white" />
				</IconText>

				<IconText text="Activities" space={9}>
					<LighteningIcon size={18} fill="white" />
				</IconText>

				<IconText text="Users" space={9}>
					<UsersIcon size={18} fill="white" />
				</IconText>

				<IconText text="Added user" space={9}>
					<AddUserIcon size={18} fill="white" />
				</IconText>

				<IconText text="Affliate" space={9}>
					<AffliateIcon size={18} fill="white" />
				</IconText>
				
				<div className={styles.line} />
			</div>

		</div>

	);
};

export default SideBar;
