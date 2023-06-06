import { FriendListStyle } from "./FriendList.styled";
import { FriendListItem } from "./FriendListItem";


export const FriendList = ({arrFriends}) => {
  
   return <FriendListStyle>
       <FriendListItem friends={arrFriends} />
    </FriendListStyle>
}