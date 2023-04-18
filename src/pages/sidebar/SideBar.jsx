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
	PlusIcon,
} from '../../components/icons/Icons';
import IconText from '../../components/iconText/IconText';
import { SideBarButton } from '../../components/ctaButton/Buttons';

const SideBar = () => {
	return (
		<div className={styles.sidebar}>
			<SideBarButton text='Welcome Keerthi'>
				<LighteningWelcome /> 
			</SideBarButton>

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

				<IconText text="Profile" space={9} grey>
					<LighteningIcon size={18} fill="#858A93" />
				</IconText>

				<IconText text="Logout" space={9} grey>
					<UsersIcon size={18} fill="#858A93" />
				</IconText>
			</div>

			<div className={styles.bottomDiv}>
				<SideBarButton text='NEW PROJECT'>
					<PlusIcon size={18} fill='white' />
				</SideBarButton>
			</div>
		</div>
	);
};

export default SideBar;
