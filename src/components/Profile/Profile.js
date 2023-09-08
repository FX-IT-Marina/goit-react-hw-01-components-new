import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  ProfileDescription,
  Statistics,
  Items,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description key={username}>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <ProfileDescription>@{tag}</ProfileDescription>
        <ProfileDescription>{location}</ProfileDescription>
      </Description>
      <Statistics>
        <Items>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Items>
        <Items>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Items>
        <Items>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Items>
      </Statistics>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
