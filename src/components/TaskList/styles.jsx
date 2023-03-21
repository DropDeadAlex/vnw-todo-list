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

const ContainnerTask = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 10px;

  /* task checkbox */
  span:nth-child(1) {    
    display: inline-block;
    position: relative;
    background-color: transparent;
    width: 25px;
    height: 25px;
    transform-origin: center center;
    border: 2px solid rgb(127, 90, 240);
    border-radius: 50%;
    transition: background-color 150ms ease 200ms, transform 350ms cubic-bezier(0.78, -1.22, 0.17, 1.89) 0s;
    cursor: pointer;
    
    :before {
      content: "";
      width: 0px;
      height: 2px;
      border-radius: 2px;
      background: rgb(127, 90, 240);
      position: absolute;
      transform: rotate(45deg);
      top: 11px;
      left: 7px;
      transition: width 50ms ease 50ms;
      transform-origin: 0% 0%;
    }

    :after {
      content: "";
      width: 0px;
      height: 2px;
      border-radius: 2px;
      background: rgb(127, 90, 240);
      position: absolute;
      transform: rotate(305deg);
      top: 15px;
      left: 8px;
      transition: width 50ms ease 0s;
      transform-origin: 0% 0%;
    }
  }
  
  /* task checkbox="checked" */
  span.task-checked {
    background-color: rgb(127, 90, 240);
    transform: scale(1.1);

    :before {
      width: 5px;
      background: rgb(255, 255, 255);
      transition: width 150ms ease 100ms;
    }

    :after {
      width: 10px;
      background: rgb(255, 255, 255);
      transition: width 150ms ease 100ms;
    }
  }
  
  /* task name   */
  span:nth-child(2) {
    position: relative;
    max-width: 415px;
    text-align: start;
    overflow: hidden;
    cursor: default;
    transition: all 0.3s ease 0s;
  }
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
  transition: 400ms ease 0s;

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
  
  &:hover {
    color: rgb(240, 15, 67);
    text-shadow: 
      rgb(240 15 67) 0px 0px 15px,
      rgb(240 15 67) 0px 0px 15px,
      rgb(240 15 67) 0px 0px 15px
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

export { List, Task, ContainerBtn, ContainnerTask, DeleteBtn }
