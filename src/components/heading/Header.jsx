import React from 'react'
import styles from './Header.module.css'
import { PlainButton } from '../ctaButton/Buttons';
import ProfileStack from '../../assets/images/profileStackx32.png'
import IconText from '../iconText/IconText'
import { BoardIcon, LighteningIcon, UsersIcon, PlusIcon } from '../icons/Icons';
import ListIcons from '../icons/ListIcons';

const Header = () => {
  return (
		<div className={styles.header}>
			<div className={styles.topDiv}>
				<div className={styles.topDivText}>
					<h1> New Campaign Run </h1>
					<p>
						{' '}
						A new campaign launch work for brand new featur in May
						month{' '}
					</p>
				</div>

				<PlainButton text="Add Members" />
			</div>

			<div className={styles.bottomDiv}>
				<div className={styles.profileDiv}>
					<img src={ProfileStack} alt="" srcset="" />
					<p> 8 member </p>
				</div>

				<div className={styles.navigation}>
					<IconText text="Participants View" space={4} grey>
						<UsersIcon size={18} fill="#858A93" />
					</IconText>

					<IconText text="Board View" space={4} grey>
						<BoardIcon size={18} fill="#858A93" />
					</IconText>

					<IconText text="List View" space={4} grey>
						<ListIcons fill="#858A93" size={18} />
					</IconText>

					<IconText text="Power View" space={4} grey>
						<LighteningIcon size={18} fill="#858A93" />
					</IconText>

					<IconText space={4} grey>
						<PlusIcon size={18} fill="#858A93" />
					</IconText>
				</div>
			</div>
		</div>
  );
}

export default Header