import PropTypes from 'prop-types';
import {
  FriendItem,
  Status,
  FriendAvatar,
  Name,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusColor = isOnline ? 'green' : 'red';

  return (
    <FriendItem>
      <Status style={{ backgroundColor: statusColor }}></Status>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
