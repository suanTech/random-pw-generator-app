
import './Output.scss'
import { ReactComponent as CopyIcon } from '../../assets/copy-icon.svg';
import Button from '../UI/Button'
import { useEffect, useRef, useState } from 'react';
const Output = (): JSX.Element => {
  const outputRef = useRef<HTMLInputElement>(null)
  const [isCopied, setIsCopied] = useState(false)
  const handleClick = (e:React.MouseEvent):void =>{
    e.preventDefault();
    const newOutput = outputRef.current!.placeholder;
    console.log(newOutput)
    navigator.clipboard.writeText(newOutput);
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2500)
  }
  return (
    <div className="container output">
      <input 
        className="text-field" 
        type="text" 
        placeholder='eheoibn%en' 
        readOnly
        ref={outputRef}/>
      <Button 
        className="copyButton"
        onClick={handleClick}
      >
        <p className={`copyMessage ${isCopied ? 'show' : ''}`}>copied!</p>
        <CopyIcon className='copyIcon' />
        </Button>
    </div>
  )
}

export { Output }