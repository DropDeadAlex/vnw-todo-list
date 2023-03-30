import { Header_ } from './styles';

const Header = ({ children }) => {
  return (
    <Header_>
      <h1>{children}</h1>
    </Header_>
  )
}

export { Header };
