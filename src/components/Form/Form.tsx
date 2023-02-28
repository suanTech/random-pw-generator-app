import { useValue } from "../../hooks/useValue";
import { Output } from "../Output/Output";
import { v4 as id } from 'uuid'
import './Form.scss'
import Slider from "../UI/Slider";
import { useState } from "react";

export const Form = () => {
  const [values, setValues] = useValue({
    length: 4,
    uppercase: false,
    lowercase: true,
    number: true,
    symbol: false
  })
  return (
    <form>
      <Output />
      <div className="container main">
        <div className='optionsContainer'>
          <h2>Include</h2>
          {
            Object.entries(values).map(([key, value]) => {
              if (typeof value === 'boolean')
                return (
                  <div className='item-wrapper' key={id()}>
                    <label>
                      <input type="checkbox" name={key} checked={value} onChange={setValues} />
                      <h3>{key.slice(0, 1).toUpperCase() + key.slice(1)}</h3>
                    </label>
                  </div>
                )
            })
          }
        </div>
        <div className='sliderContainer'>
          <h2>Length</h2>
          <Slider min={3} max={15} name={'length'} type={'range'} value={values.length} onChange={setValues} />
        </div>
        <button></button>
      </div>
    </form>
  )
}
