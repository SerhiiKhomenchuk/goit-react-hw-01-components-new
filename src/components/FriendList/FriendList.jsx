import { FriendListStyle } from "./FriendList.styled";
import { FriendListItem } from "./FriendListItem";
import PropTypes from 'prop-types';

export const FriendList = ({arrFriends}) => {
  
   return <FriendListStyle>
       <FriendListItem friends={arrFriends} />
    </FriendListStyle>
}

FriendList.propTypes = {
    arrFriends: PropTypes.arrayOf(PropTypes.object)
}