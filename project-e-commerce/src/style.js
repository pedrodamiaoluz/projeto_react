import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: transparent;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Ul = styled.ul` 
   display: inline-block;
   list-style-type: none;
`
export const Li = styled.li`
    display: inline-block;
    padding: 0.5rem;
`
export const Image = styled.img`
    width: 100px;
    height: 100px;
    padding: 0.5rem;
`

export const A = styled.a` 
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    font-weight: bold;
`

