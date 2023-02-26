
import { Checkbox } from '../Checkbox/Checkbox'
import './CustomizeForm.scss'
import {v4 as id} from 'uuid'
import { Label } from '../../interfaces'

const labels:Label[] = [
  {
    label: 'Uppercase',
    checked: false
  },
  {
    label: 'Lowercase',
    checked: false
  },
  {
    label: 'Numbers',
    checked: false
  },
  {
    label: 'Symbols',
    checked: false
  },
  {
    label: 'Custom Letters',
    checked: false
  }

]
export const CustomizeForm = (): JSX.Element => {
  return (
    <div className="container main">
      <form>
        <h2>Include</h2>
        {
          labels.map(label => (
            <Checkbox key={id()} label={label.label} checked={label.checked}/>
          ))
        }
      </form>
    </div>
  )
}
