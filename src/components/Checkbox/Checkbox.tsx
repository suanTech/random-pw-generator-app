import './Checkbox.scss'
import { type Label } from '../../interfaces'
import { useState } from 'react'


export const Checkbox = ({ label, checked }: Label): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false)
  const handleCheck = (): void => {
    setIsChecked(!isChecked)
    console.log("CHECKED!")
  }
  return (
    <div className='checkbox-wrapper'>
      <label>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleCheck} 
        />
        <p>{label}</p>
      </label>
    </div>
  )
}