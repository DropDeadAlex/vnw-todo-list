import styled, { css } from 'styled-components';

const InputTask = styled.input`
  width: 80%;
  height: 40px;
  border: 2px solid rgb(127, 90, 240);
  background-color: rgb(22, 23, 34);
  font-size: 18px;
  border-radius: 8px 0px 0px 8px;
  padding: 10px;
  color: rgb(204, 204, 204);
`

const TaskForm_ = styled.form`
  position: relative;
  top: -20px;
  display: flex;
  width: 100%;
  max-width: 540px;
`

const AddTask = styled.button(
  ({ bgColor }) => css`
    border-radius: 0px 8px 8px 0px;
    border: 2px solid rgb(127, 90, 240);
    background-color: rgb(127, 90, 240);
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
    width: 20%;
    cursor: pointer;
    overflow: hidden;
  `
)


export { InputTask, AddTask, TaskForm_ }