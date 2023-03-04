import { useValue } from "../../hooks/useValue";
import { Output } from "../output/Output";
import { v4 as id } from 'uuid'
import './Form.scss'
import Slider from "../UI/Slider";
import { useContext, useState } from "react";
import { getRandomChar, getRandomSymbol } from "../../utils/helper";
import { Appcontext} from "../../context/context";
import Button from "../UI/Button";

export const Form = () => {
  const { setResult } = useContext(Appcontext);
  const [values, setValues] = useValue({
    length: 7,
    uppercase: false,
    lowercase: true,
    number: true,
    symbol: false
  })
  const [currentIndex, setcurrentIndex] = useState<number>();
  const options = [
    {
      option: values.lowercase,
      getChar: () => getRandomChar(97, 122)
    },
    {
      option: values.uppercase,
      getChar: () => getRandomChar(65, 90)
    },
    {
      option: values.number,
      getChar: () => getRandomChar(48, 57)
    },
    {
      option: values.symbol,
      getChar: () => getRandomSymbol()
    }
  ]
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setcurrentIndex(index);
    return setValues(e);
  }
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let generatedPassword = '';
    const selectedOptions = options.filter(({ option }) => option)
    for (let i = 0; i < values.length; i++) {
      const randomIndex = Math.floor(Math.random() * selectedOptions.length);
      const randomLetter = selectedOptions[randomIndex]?.getChar()
      if (randomLetter) {
        generatedPassword += randomLetter;
      }
    }
    if (generatedPassword) {
      setResult(generatedPassword);
    }
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
                      <h3 className={index === currentIndex ? 'current' : ''}>
                        {key === 'uppercase' || key === 'lowercase' ?
                        key.slice(0, 1).toUpperCase() + key.slice(1) + ' Letter'
                        : key.slice(0, 1).toUpperCase() + key.slice(1)
                        }
                      </h3>
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
        <Button
          className='generateButton'
          type="submit"
          onClick={handleSubmit}
        >
          Generate Password
        </Button>
      </div>
    </form>
  )
}
