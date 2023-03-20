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

export { List, Task, ContainerBtn, DeleteBtn }
