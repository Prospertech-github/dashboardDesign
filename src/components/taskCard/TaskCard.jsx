import React from 'react';
import styles from './TaskCard.module.css';
import cardImage from '../../assets/images/cardImage1.png';
import ThunderIcon from '../../assets/icons/thunderIcon.svg';
import CommentIcon from '../../assets/icons/commentIcon.svg';
import LinkIcon from '../../assets/icons/linkIcon.svg';
import ProfileStack from '../../assets/images/profileStackx32.png';
import IconText from '../iconText/IconText';
import Slider from '../sliders/Slider';

const TaskCard = () => {
	return (
		<div className={styles.taskCard}>
			<div className={styles.imgContainer}>
				<img src={cardImage} alt="Card task" />
			</div>

			<div className={styles.textContainer}>
				<div className={styles.taskName}>
					<h3>Highfidelity Design </h3>
					<p>Make clear design and color</p>
				</div>

				<div className={styles.taskdetails}>
					<div className={styles.taskIconSection}>
						<div>
							<IconText
								iconName={ThunderIcon}
								text="Progress"
								space={4}
							/>

							<h4> 2/10 </h4>
						</div>
						<Slider />
					</div>

					<div className={styles.extraIconDetails}>
            <div className={styles.taskIconDetails}>
            <IconText iconName={CommentIcon} text="7" space={4} />
						<IconText iconName={LinkIcon} text="2" space={4} />
            </div>
					  <img src={ProfileStack} alt="Profile" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TaskCard;
