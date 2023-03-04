import { InputHTMLAttributes } from 'react';
import './Slider.scss'

interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  min: number,
  max: number,
  value: number,
  type: string,
  name: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Slider = (props: SliderProps): JSX.Element => {
  const getBackgroundSize = () => {
    return { backgroundSize: `${((props.value-props.min) * 100) / (props.max-props.min)}% 100%` }
  }
  return (
    <input 
      name={props.name} 
      type={props.type} 
      step='1' 
      min={props.min} 
      max={props.max} 
      value={props.value} 
      className='slider' 
      style={getBackgroundSize()}
      onChange={props.onChange}/>
  )
}

export default Slider;