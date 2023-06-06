import { ItemFriendStyle } from "./FriendList.styled"

export const FriendListItem = ({friends}) => {
    
    
    return friends.map(({name,isOnline,avatar,id}) => {
       return <ItemFriendStyle key={id} isOnline={isOnline}>
           <span class="status"></span>
           <img class="avatar" src={avatar} alt="User avatar" width="auto" height='78'/>
           <p class="name">{name}</p>
</ItemFriendStyle> 
    })
}