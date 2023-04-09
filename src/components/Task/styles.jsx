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
  background-color: var(--color-tl-dark3);

  & > .containner-task {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 10px;
  }

  & > .container-btn {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 15px;

    transition: opacity 0.4s ease 0s;

    opacity: 0%;
    visibility: hidden ;

    span {
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
      
      @font-face {
        font-family: "Material Symbols Rounded";
        font-style: normal;
        font-weight: 400;
        src:  url(https://fonts.gstatic.com/s/materialsymbolsrounded/v60/syl0-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190FjpZIvDmUSVOK7BDJ_vb9vUSzq3wzLK-P0J-V_Zs-QtQth3-jOc7TOVpeRL2w5rwZu2rIelXxc.woff2)
              format("woff2")
        ;
      }
    }
  }

  &:hover .container-btn {
    opacity: 100%;
    visibility: visible;
  }
`

export const TaskCheck = styled.input.attrs({ type: 'checkbox' })
  (({ checked, hover}) => css`
    appearance: none;
    cursor: pointer;
    display: inline-block;
    position: relative;
    transform-origin: center center;

    width: 25px;
    height: 25px;

    border: 2px solid var(--color-accent-pnk);
    border-radius: 50%;
    background-color: ${!checked ? "transparent" : "var(--color-accent-pnk)"};
    transition: 
      background-color 150ms ease 200ms, 
      transform 350ms cubic-bezier(0.78, -1.22, 0.25, 7.75) 0s
    ;
    
      
    :checked { transform: scale(1.1) }
    
    :before {
      content: "";
      width: ${(checked || hover) ? "5px" : "0px"};
      height: 2px;
      border-radius: 2px;
      background: ${checked ? "#fff" : "var(--color-accent-pnk)"};
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
      width: ${(checked || hover) ? "10px" : "0px"};
      height: 2px;
      border-radius: 2px;
      background: ${checked ? "#fff" : "var(--color-accent-pnk)"};
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
      :before { transition: width 150ms ease 0s; }

      :after { transition: width 150ms ease 100ms; }
    }
`)
  
export const TaskName = styled.span`
  position: relative;
  max-width: 415px;
  text-align: start;
  overflow: hidden;
  cursor: default;
  transition: all 0.3s ease 0s;

  :before, :after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    top: 50%;
    margin-top: -0.5px;
    background: var(--color-white);
  }

  :before { left: -2.5px }

  :after { 
    left: 2.5px;
    background: rgba(204, 204, 204, 0.8);
    transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
  }

  .checked & {
    color: rgba(204, 204, 204, 0.6);

    :before{
      width: 100%;
      transition: 
        width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) 0s
      ;
    }

    :after {
      background: transparent;
      width: 100%;
      transition: all 0s ease 0s;
    }
  }

`

const Btn = styled.span`
  cursor: pointer;
  color: var(--color-tl-gray);
  transition: all 0.3s ease 0s;
  
  :hover {
    opacity: 0.8;
  }
`

export const DeleteBtn = styled(Btn)`
  :hover {
    color: hsl(341, 40%, 61%);
    text-shadow:
      hsl(346deg 87% 56% / 70%) 0px 0px 18px,
      hsl(346deg 83% 57% / 90%) 0px 0px 15px
    ;
  }
`

export const EditBtn = styled(Btn)`
  :hover {
    color: hsl(177, 19%, 45%);
    text-shadow:
      hsl(184deg 88% 50% / 64%) 0px 0px 13px,
      hsl(184deg 88% 50% / 18%) 0px 0px 13px
    ;
  }
`