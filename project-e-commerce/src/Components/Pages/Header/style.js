import styled from "styled-components";

export const Select = styled.select`
   background-color: transparent;
   border: none;
   color: black;
    font-size: 1rem;
    font-weight: bold;
   
`


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
    font-size: 1rem;
    font-weight: bold;
`

export const Inputs = styled.div` 
  background-color: #56C033;
  border-radius: 10px;
  display: flex;
  flex-direction:row-reverse;
  align-items: center;
  gap: 0.5rem;
  padding-left: 0.7rem;
  color: #fff;
  cursor: pointer;
`

export const Input = styled.input` 
   outline: none;
   padding: 0.7rem;
   border: 1px solid #569641; 
   border-radius: 10px;
   overflow: hidden;
   text-overflow: ellipsis;
`
export const Container_Input = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
   color: #000;
`
export const Container_Icons = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 5px;
   color: #000;
   font-size: 1.5rem;

   a{
      text-decoration: none;
      color: #000;
      cursor: pointer;
   }
`

export const Navagate = styled.div`
ul{
   display: inline-block;
   list-style-type: none;
}

li{
   display: inline-block;
    padding: 0.5rem;
}

a{
   text-decoration: none;
    color: black;
    font-size: 1rem;
    font-weight: bold;
}
`