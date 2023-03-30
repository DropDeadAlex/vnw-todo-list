import styled, { css } from 'styled-components';

export const TaskForm_ = styled.form`
  position: relative;
  top: -20px;
  display: flex;
  width: 100%;
  max-width: 540px;

  input {
    width: 80%;
    height: 40px;
    border: 2px solid var(--color-accent-pnk);
    background-color: var(--color-tl-dark2);
    font-size: 18px;
    border-radius: 8px 0px 0px 8px;
    padding: 10px;
    color: inherit;
  }

  button {
    border-radius: 0px 8px 8px 0px;
    border: 2px solid var(--color-accent-pnk);
    background-color: var(--color-accent-pnk);
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
    width: 20%;
    cursor: pointer;
    overflow: hidden;
  }
`