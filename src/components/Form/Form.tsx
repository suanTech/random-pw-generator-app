import { useValue } from "../../hooks/useValue";
import { Output } from "../Output/Output";
import { v4 as id } from 'uuid'
import './Form.scss'
import Slider from "../UI/Slider";
import { useState } from "react";

export const Form = () => {
  const [values, setValues] = useValue({
    // length: 4,
    uppercase: false,
    lowercase: true,
    number: true,
    symbol: false
  })
  const [lengthValue, setLengthValue] = useState<number>(4)
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setLengthValue(parseInt(e.target.value));
  }
  return (
    <form>
      <Output />
      <div className="container main">
        <div className='optionsContainer'>
          <h2>Include</h2>
          {/* {
            Object.entries(values).map(([key, value]) => {
              if(typeof value === 'boolean')
              return (
              <div className='item-wrapper' key={id()}>
                <label>
                  <input type="checkbox" name={key} checked={value} onChange={setValues} />
                  <h3>{key.slice(0, 1).toUpperCase() + key.slice(1)}</h3>
                </label>
              </div>
              )
              })
          } */}
          {
            Object.entries(values).map(([key, value]) => (
              <div className='item-wrapper' key={id()}>
                <label>
                  <input type="checkbox" name={key} checked={value} onChange={setValues} />
                  <h3>{key.slice(0, 1).toUpperCase() + key.slice(1)}</h3>
                </label>
              </div>
            ))
          }
        </div>
        <div className='sliderContainer'>
          <h2>Length</h2>
          {/* <input type='range' step={1} min={5} max={16} value={lengthValue} className='slider' onChange={handleChange} /> */}
          {/* <Slider min={3} max={15} value={values.length} onChange={() => console.log(values.length)} /> */}
          <Slider min={3} max={15} value={lengthValue} onChange={handleChange} />
        </div>
        <button></button>
      </div>
    </form>
  )
}
