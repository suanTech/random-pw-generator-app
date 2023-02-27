import { useState } from "react";

type Value = {
  // length: number,
  uppercase: boolean,
  lowercase: boolean,
  number: boolean,
  symbol: boolean
}
type ReturnValue = [
  Value,
  (e: React.ChangeEvent<HTMLInputElement>) => void
]

export function useValue(initialValues: Value):ReturnValue {
  const [values, setValues] = useState(initialValues)
  return [
    // values,
    // (e) => {
    //   console.log(e.target.type);
    //   setValues({
    //     ...values,
    //   [e.target.name]:
    //   e.target.type === 'checkbox' ? e.target.checked :
    //   parseInt(e.target.value)
    //   })
    //   console.log(e.target.value)
    // }
    values,
    (e) => {
      console.log(e.target.type);
      setValues({
        ...values,
      [e.target.name]: e.target.checked 
      })
      console.log(e.target.value)
    }
  ]
}