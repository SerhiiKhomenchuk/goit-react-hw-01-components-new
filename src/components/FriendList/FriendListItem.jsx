import { ItemFriendStyle } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ name, isOnline, avatar }) => {
  return (
    <ItemFriendStyle isOnline={isOnline}>
      <span class="status"></span>
      <img
        class="avatar"
        src={avatar}
        alt="User avatar"
        width="auto"
        height="78"
      />
      <p class="name">{name}</p>
    </ItemFriendStyle>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
