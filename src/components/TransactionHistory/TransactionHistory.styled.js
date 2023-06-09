import styled from 'styled-components';

export const Table = styled.table`
  width: 1200px;
  border-radius: 4px;
  background-color: white;
  text-align: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 10px 10px rgba(0, 0, 0, 0.14),
    0px 15px 13px rgba(0, 0, 0, 0.2);
  thead {
    color: white;
    background-color: #2196f3;
    font-size: 28px;
    text-transform: uppercase;
    th {
      padding: 20px;
      width: 400px;
    }
  }
  tbody {
    font-size: 28px;
    tr{
        background-color: antiquewhite;
        &:nth-child(even){
        background-color: white;
      } 
td {
        
      padding: 20px;
      &:first-child {
        text-transform: capitalize;
        text-align: start;
        padding-left: 180px;
        
      }
      
    }
    }
    
  }
`
