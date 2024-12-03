import Avatar from '../../Avatar/Avatar.jsx';
import StatusBadge from '../../StatusBadge/StatusBadge.jsx';
import styles from './TeacherAvatar.module.scss';

const TeacherAvatar = ({ avatarUrl, fullName, isActive }) => {
	return (
		<div className={styles.avatarWrapper}>
			<Avatar src={avatarUrl} alt={fullName} withBorder={true} />
			<StatusBadge isActive={true} />
		</div>
	);
};

export default TeacherAvatar;
