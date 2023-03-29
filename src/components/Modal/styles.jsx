import styled, { css } from 'styled-components';

export const Scrim = styled.div.attrs({ className: 'scrim' })`
  background-color: rgba(0, 0, 0, .4);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 5000;  

  transition: all 1000ms;
  /* opacity: 0; */

  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`

