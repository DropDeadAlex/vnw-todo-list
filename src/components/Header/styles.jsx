import styled, { css } from 'styled-components';

const Header = styled.header(
  ({ bgColor }) => css`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    color: rgb(204, 204, 204);
    padding-bottom: 20px;
    background-color: rgb(1, 1, 1);
  `
)

const Title = styled.h1`
`

export { Header as Header_, Title }