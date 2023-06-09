import styled from 'styled-components';

export const FriendListStyle = styled.ul`
  width: 700px;
  padding: 0px;
`;
export const ItemFriendStyle = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  padding-left: 40px;
  background-color: white;
  border-radius: 10px;
  width: 100%;
  list-style: none;
  align-items: center;
  gap: 40px;
  span {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
  }
`;
