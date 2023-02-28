import { InputHTMLAttributes, useState } from 'react';
import './Slider.scss'

interface SliderProps extends InputHTMLAttributes<HTMLInputElement>{
  min: number,
  max: number,
  value: number,
  type: string,
  name: string
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const Slider = (props: SliderProps) => {
  return (
    <input name={props.name} type={props.type} step='1' min={props.min} max={props.max} value={props.value} className='slider' onChange={props.onChange} />
  )
}

export default Slider;