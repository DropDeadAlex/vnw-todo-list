import styled, { css } from 'styled-components';

export const EditForm = styled.form`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  height: 200px;
  border-radius: 8px;
  background-color: var(--color-tl-dark2);

  h3 {
    width: 89%;
    text-align: start;
    color: rgb(204, 204, 204);
  }
`

export const EditInput = styled.input`
  width: 90%;
  height: 40px;
  border: 2px solid var(--color-accent-pnk);
  border-radius: 5px;
  color: rgb(204, 204, 204);
  font-size: 18px;
  padding: 10px;
  background-color: transparent;
`

export const ContainerBtn = styled.div
.attrs({ className: 'container-btn' })
(css`
  display: flex;
  -webkit-box-pack: end;
  justify-content: end;
  gap: 20px;
  width: 88%;

  button {
    color: var(--color-accent-pnk);
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    background-color: transparent;
  }
`)
