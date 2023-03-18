import styled, { css } from 'styled-components';

const DeleteBtn = styled.button`
  opacity: 0%;
  visibility: hidden ;

  transition: 500ms;
`

const List = styled.ul`

`

const Task = styled.li`
  &:hover {
    button {
      opacity: 100%;
      visibility: visible;
    }
  }
`

export { List, Task, DeleteBtn }
