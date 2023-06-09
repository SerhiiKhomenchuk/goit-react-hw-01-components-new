import { FriendListStyle } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ arrFriends }) => {
  return (
    <FriendListStyle>
      {arrFriends.map(({ name, isOnline, avatar, id }) => {
        return (
          <FriendListItem
            name={name}
            isOnline={isOnline}
            avatar={avatar}
            key={id}
          />
        );
      })}
    </FriendListStyle>
  );
};

FriendList.propTypes = {
  arrFriends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
