
import './Output.scss'
import { ReactComponent as CopyIcon } from '../../assets/copy-icon.svg';
import Button from '../UI/Button'
import { useRef, useState } from 'react';
const Output = (): JSX.Element => {
  const outputRef = useRef<HTMLInputElement>(null)
  const [isCopied, setIsCopied] = useState(false)
  const handleClick = ():void =>{
    const newOutput = outputRef.current!.value;
    console.log(newOutput)
    navigator.clipboard.writeText(newOutput);
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }
  return (
    <div className="container output">
      <input 
        className="text-field" 
        type="text" 
        placeholder='eheoibn%en' 
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