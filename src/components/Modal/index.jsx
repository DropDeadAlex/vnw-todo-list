import { Scrim } from './styles'

export const Modal = ({ children, isOpen }) => (
  !isOpen || <Scrim children={children} />
)
