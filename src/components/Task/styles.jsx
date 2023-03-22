import styled, { css } from 'styled-components';

export const Task_ = styled.li`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  border-radius: 8px;
  padding: 10px 15px 10px 10px;
  background-color: var(--color-bg-dark3);

  .containner-task {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 10px;
  }

  .container-btn {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 15px;

    transition: opacity 0.4s ease 0s;

    opacity: 0%;
    visibility: hidden ;
  }

  &:hover .container-btn {
    opacity: 100%;
    visibility: visible;
  }
`

export const TaskCheck = styled.input.attrs({ type: 'checkbox' })
  (({ checked }) => css`
    appearance: none;
    cursor: pointer;
    display: inline-block;
    position: relative;
    transform-origin: center center;

    width: 25px;
    height: 25px;

    border: 2px solid var(--color-accent);
    border-radius: 50%;
    background-color: ${!checked ? "transparent" : "var(--color-accent)"};
    transition: 
      background-color 150ms ease 200ms, 
      transform 350ms cubic-bezier(0.78, -1.22, 0.17, 1.89) 0s;
    
      
    :checked { transform: scale(1.1) }

    :before {
      content: "";
      width: ${!checked ? "0px" : "5px"};
      height: 2px;
      border-radius: 2px;
      background: ${!checked ? "var(--color-accent)" : "#ffffff"};
      position: absolute;
      transform: rotate(45deg);
      top: 11px;
      left: 7px;
      transition: ${!checked 
        ? "width 50ms ease 50ms"
        : "width 150ms ease 100ms"};
      transform-origin: 0% 0%;
    }

    :after {
      content: "";
      width: ${!checked ? "0px" : "10px"};
      height: 2px;
      border-radius: 2px;
      background: ${!checked ? "var(--color-accent)" : "#ffffff"};
      position: absolute;
      transform: rotate(305deg);
      top: 15px;
      left: 8px;
      transition: ${!checked 
        ? "width 50ms ease 0ms"
        : "width 150ms ease 100ms"};
      transform-origin: 0% 0%;
    }
 
    :hover {
      :before {
        width: 5px;
        transition: width 150ms ease 0s;
      }

      :after {
        width: 10px;
        transition: width 150ms ease 100ms;
      }
    }
`)
  
export const TaskName = styled.span`
  position: relative;
  max-width: 415px;
  text-align: start;
  overflow: hidden;
  cursor: default;
  transition: all 0.3s ease 0s;
`

export const DeleteBtn = styled.span`
  cursor: pointer;
  color: var(--color-gray);
  transition: all 0.3s ease 0s;

  font-family: "Material Symbols Rounded";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
          font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
  
  :hover {
    color: #cb8696;
    text-shadow: 
      rgb(240 15 67) 0px 0px 15px,
      rgb(240 15 67 / 42%) 0px 0px 15px
    ;
  }

  @font-face {
    font-family: "Material Symbols Rounded";
    font-style: normal;
    font-weight: 400;
    src:  url(https://fonts.gstatic.com/s/materialsymbolsrounded/v60/syl0-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190FjpZIvDmUSVOK7BDJ_vb9vUSzq3wzLK-P0J-V_Zs-QtQth3-jOc7TOVpeRL2w5rwZu2rIelXxc.woff2)
          format("woff2")
    ;
  }
`
