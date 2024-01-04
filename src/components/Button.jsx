import styled from "styled-components";

export const Button = styled.button`
 background-color: ${({isSelected}) => (isSelected ? "#f22f2f" :"#ff4343")};
 outline: 1px solid ${({isSelected}) => (isSelected ? "white" :"#ff4343")};
 border-radius: 5px;
 padding: 6px 12px;
 border: none;
 color: white;
 cursor: pointer;
 &:hover{
  background-color: #f22f2f;
 }
 `;