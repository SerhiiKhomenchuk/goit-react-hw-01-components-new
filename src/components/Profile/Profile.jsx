import { Avatar, Container, Description, Label, Name, Quantity, Stats } from "./Profile.styled"
import PropTypes from 'prop-types';


export const Profile = ({ avatar, location, tag, username, stats }) => {
    
    return <Container class="profile">
  <Description class="description">
    <Avatar
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
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
      <Label >Likes</Label>
      <Quantity >{stats.likes}</Quantity>
    </li>
  </Stats>
</Container>
    
}

Profile.propTypes = {
  avatar: PropTypes.string,
  location: PropTypes.string,
  tag: PropTypes.string,
  username: PropTypes.string,
  stats: PropTypes.object
}