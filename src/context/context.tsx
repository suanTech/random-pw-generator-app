import { createContext, ReactNode, useState } from "react";

interface Result {
  result: string,
  setResult: React.Dispatch<React.SetStateAction<string>>
}

export const Appcontext = createContext<Result>({
  result: '',
  setResult: () => {}
});
export const AppcontextProvider = ({children}: {children:ReactNode}) => {
  const [result, setResult] = useState('');
  return(
    <Appcontext.Provider value={{
      result, setResult
    }}>
      {children}
    </Appcontext.Provider>
  )
}