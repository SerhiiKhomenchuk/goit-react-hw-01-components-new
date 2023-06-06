import styled from "styled-components"


export const Container = styled.div`
  width: 700px;
  background-color: white;
  padding-top: 50px;
  border-radius: 15px;
  box-shadow: 0px 1px 3px rgba(0,0,0,.12), 0px 1px 1px rgba(0,0,0,.14), 0px 2px 1px rgba(0,0,0,.2);
  margin-top:30px;
  
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  margin-bottom: 20px;
  p{
    margin-top: 10px;
    margin-bottom: 10px;
    
  }
`
export const Avatar = styled.img`
  width: 200px;
  height: auto;
  
   
`
export const Name = styled.p`
 font-size: 52px;
 color: black;
 font-weight: 700;
  
`
export const Stats = styled.ul`
  display: flex;
  flex-direction:row;
  padding: 0px;
  margin: 0px;
  list-style: none;
   border-top: 3px solid gray;
   
   
  li{
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
  
    
    align-items:center;
    justify-content: center;
   &:not(:last-child){
        border-right:3px solid gray;
    }
    }
    
`
export const Label = styled.span`
color: gray;
font-size: 32px;
`
export const Quantity = styled.span`
font-weight: 700;
`
