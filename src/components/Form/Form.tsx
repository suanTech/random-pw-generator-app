import { useValue } from "../../hooks/useValue";
import { Output } from "../Output/Output";
import { v4 as id } from 'uuid'
import './Form.scss'
import Slider from "../UI/Slider";
import { ChangeEvent, useState } from "react";

export const Form = () => {
  const [values, setValues] = useValue({
    length: 5,
    uppercase: false,
    lowercase: true,
    number: true,
    symbol: false
  })
  const [currentIndex, setcurrentIndex] = useState<number>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setcurrentIndex(index);
    return setValues(e);
  }
  return (
    <form>
      <Output />
      <div className="container main">
        <h2>Include</h2>
        <div className='optionsContainer'>
          {
            Object.entries(values).map(([key, value], index) => {
              if (typeof value === 'boolean')
                return (
                  <div className='item-wrapper' key={id()}>
                    <label>
                      <input
                        type="checkbox"
                        name={key}
                        checked={value}
                        onChange={(e) => handleChange(e, index)} />
                      <h3 className={index === currentIndex ? 'current' : ''}>{key.slice(0, 1).toUpperCase() + key.slice(1)}</h3>
                    </label>
                  </div>
                )
            })
          }
        </div>
        <h2>Length: <span className="lengthValue">{values.length}</span></h2>
        <div className='sliderContainer'>
          <Slider
            min={5}
            max={15}
            name={'length'}
            type={'range'}
            value={values.length}
            onChange={setValues}
          />
        </div>
        <button className='createButton' type="submit" >Generate Password</button>
      </div>
    </form>
  )
}
