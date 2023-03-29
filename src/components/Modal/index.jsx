import { Scrim } from './styles'

export const Modal = ({ children, isOpen }) => {
  if (isOpen) 
    return <Scrim children={children} /> 
}
