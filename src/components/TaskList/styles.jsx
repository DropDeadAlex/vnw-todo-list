import styled, { css } from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 540px;
  margin: 15px 0px 50px;
`

const Task = styled.li`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  border-radius: 8px;
  padding: 10px 15px 10px 10px;
  background-color: rgb(37, 39, 60);
`

const ContainerBtn = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 15px;
  transition: opacity 0.4s ease 0s;

  opacity: 0%;
  visibility: hidden ;

  ${Task}:hover & {
    opacity: 100%;
    visibility: visible;
  }
`

const DeleteBtn = styled.span`
  cursor: pointer;
  
  &:hover {
    color: rgb(240, 15, 67);
    text-shadow: 
      rgb(240 15 67) 0px 0px 15px,
      rgb(240 15 67) 0px 0px 15px,
      rgb(240 15 67) 0px 0px 15px
      ;
  }
`

export { List, Task, ContainerBtn, DeleteBtn }
