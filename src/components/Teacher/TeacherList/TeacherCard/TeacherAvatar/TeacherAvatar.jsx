import Avatar from '../../../../shared/Avatar/Avatar.jsx';
import StatusBadge from '../../../../shared/StatusBadge/StatusBadge.jsx';
import styles from './TeacherAvatar.module.scss';

const TeacherAvatar = ({ avatarUrl, fullName, isActive }) => {
	return (
		<div className={styles.avatarWrapper}>
			<Avatar
				src={avatarUrl}
				alt={fullName}
				width={96}
				height={96}
				withBorder={true}
			/>
			<StatusBadge isActive={true} />
		</div>
	);
};

export default TeacherAvatar;
