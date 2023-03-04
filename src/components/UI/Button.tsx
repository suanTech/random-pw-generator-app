import './Button.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps): JSX.Element => {
  return <button className={props.className} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
}

export default Button;