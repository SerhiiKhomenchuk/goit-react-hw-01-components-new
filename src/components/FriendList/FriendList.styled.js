import styled from "styled-components"


export const FriendListStyle = styled.ul`
width: 700px;
padding: 0px;
/* background-color: white;
border-radius: 10px;

 box-shadow: 0px 1px 3px rgba(0,0,0,.12), 0px 1px 1px rgba(0,0,0,.14), 0px 2px 1px rgba(0,0,0,.2); */
`
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
span{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color:${(props)=>props.isOnline? "green" : "red"};
}
`
