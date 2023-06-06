import styled from "styled-components";
// eslint-disable-next-line
export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
export const StatisticsStyle = styled.section`
background-color: white;
margin: 70px 0px;
width:800px;
height: 300px;
border-radius:7px;

`
export const Title = styled.h2`
font-size:72px;
text-transform: uppercase;
color: gray;
text-align: center;

`
export const StatListStyle = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
list-style: none;
padding: 0px;
height:auto;

`
export const Item = styled.li`
width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
  color: white;
    
    align-items:center;
    justify-content: center;
    &:first-child{
  border-bottom-left-radius: 7px;
}
    &:last-child{
  border-bottom-right-radius:7px;
}
`