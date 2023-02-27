import { InputHTMLAttributes, useState } from 'react';
import './Slider.scss'

interface SliderProps extends InputHTMLAttributes<HTMLInputElement>{
  min: number,
  max: number,
  value: number,
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const Slider = (props: SliderProps) => {
  return (
    <input type='range' step='1' min={props.min} max={props.max} value={props.value} className='slider' onChange={props.onChange} />
  )
}

export default Slider;