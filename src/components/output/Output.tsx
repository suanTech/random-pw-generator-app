import { ReactComponent as CopyIcon } from '../../assets/copy-icon.svg';
import Button from '../UI/Button'
import { useContext, useState } from 'react';
import { Appcontext } from '../../context/context';

import './Output.scss'

export const Output = (): JSX.Element => {
  const {result, error, setError} = useContext(Appcontext);
  const [show, setShow] = useState(false);
  const handleClick  = (e:React.MouseEvent):void => {
    e.preventDefault();
    setShow(true);
    if(result) {
      setError(false);
      navigator.clipboard.writeText(result);
    } else {
      setError(true)
    }
    setTimeout(() => {
      setShow(false)
    }, 2500)
  }
  return (
    <div className="container output">
      <input 
        className="text-field" 
        type="text" 
        placeholder='R@aND0M p@$$W0Rd' 
        readOnly
        value={result}/>
      <Button 
        className="copyButton"
        onClick={handleClick}
        disabled={error}
      >
        <p className={`copyMessage ${show ? 'show' : ''}`}>{error ? '' : 'copied!'}</p>
        <CopyIcon className='copyIcon' />
        </Button>
    </div>
  )
}
