import React from 'react';
import styles from './TaskCard.module.css';
import cardImage from '../../assets/images/cardImage1.png';
import ThunderIcon from '../../assets/icons/thunderIcon.svg';
import ProfileStack from '../../assets/images/profileStackx32.png';
import IconText from '../iconText/IconText';
import Slider from '../sliders/Slider';
import ListIcons from '../icons/ListIcons';
import { CommentIcon, LinkIcon } from '../icons/Icons';
import DotIcons from '../icons/DotIcons';

const TaskCard = ({img, text, toDo, progress, completed}) => {
	return (
		<div className={styles.taskCard}>
			{img && (
				<div className={styles.imgContainer}>
					<img src={cardImage} alt="Card task" />
				</div>
			)}

			<div className={styles.textContainer}>
				<div className={styles.taskName}>
					<div>
						<h3>{text} </h3>
						<p>Make clear design and color</p>
					</div>

					<DotIcons fill="#B8B9BD" size={15} />
				</div>

				<div className={styles.taskdetails}>
					<div className={styles.taskIconSection}>
						<div>
							<IconText
								iconName={ThunderIcon}
								text="Progress"
								space={4}
							>
								{' '}
								<ListIcons
									checkList
									fill="#B8B9BD"
									size={15}
								/>{' '}
							</IconText>

							<h4> 2/10 </h4>
						</div>
						{toDo && <Slider />}
						{progress && <Slider color="orange" half />}
						{completed && <Slider color='green'/>}
						{/* <Slider /> */}
					</div>

					<div className={styles.extraIconDetails}>
						<div className={styles.taskIconDetails}>
							<IconText text="7" space={4}>
								{' '}
								<CommentIcon fill="#B8B9BD" size={15} />{' '}
							</IconText>

							<IconText text="2" space={4}>
								{' '}
								<LinkIcon fill="#B8B9BD" size={15} />{' '}
							</IconText>
						</div>
						<img src={ProfileStack} alt="Profile" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TaskCard;
