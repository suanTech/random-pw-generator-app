import './Button.scss'
import { type Button } from '../../interfaces';

const Button = (props: Button): JSX.Element => {
  return <button className={props.className} onClick={props.onClick}>{props.children}</button>
}

export default Button;