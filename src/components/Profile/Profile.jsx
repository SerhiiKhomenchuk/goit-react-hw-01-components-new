import {
  Avatar,
  Container,
  Description,
  Label,
  Name,
  Quantity,
  Stats,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ avatar, location, tag, username, stats }) => {
  console.log(stats);
  return (
    <Container class="profile">
      <Description class="description">
        <Avatar src={avatar} alt="User avatar" class="avatar" />
        <Name class="name">{username}</Name>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </Description>

      <Stats>
        <li>
          <Label class="label">Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label class="label">Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
