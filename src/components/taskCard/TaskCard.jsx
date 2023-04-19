import React from 'react';
import styles from './TaskCard.module.css';
import ThunderIcon from '../../assets/icons/thunderIcon.svg';
import ProfileStack from '../../assets/images/profileStackx32.png';
import IconText from '../iconText/IconText';
import Slider from '../sliders/Slider';
import ListIcons from '../icons/ListIcons';
import { CommentIcon, LinkIcon } from '../icons/Icons';
import DotIcons from '../icons/DotIcons';
import TaskImage1 from '../../assets/images/cardImage1.png';
import TaskImage2 from '../../assets/images/cardImage2.png';
import TaskImage3 from '../../assets/images/cardImage3.png';

const TaskCard = ({ img, text, sliderStyle }) => {
	return (
		<div className={styles.taskCard}>
			{img && (
				<div className={styles.imgContainer}>
					{sliderStyle === 'toDo' && (
						<img src={TaskImage1} alt="Card task" />
					)}

					{sliderStyle === 'progress' && (
						<img src={TaskImage2} alt="Card task" />
					)}

					{sliderStyle === 'completed' && (
						<img src={TaskImage3} alt="Card task" />
					)}
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

						{sliderStyle === 'toDo' && <Slider />}
						{sliderStyle === 'progress' && (
							<Slider color="orange" half />
						)}
						{sliderStyle === 'completed' && (
							<Slider color="green" />
						)}
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
