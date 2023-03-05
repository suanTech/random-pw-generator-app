import { createContext, ReactNode, useState } from "react";

interface Context {
  result: string,
  setResult: React.Dispatch<React.SetStateAction<string>>
  error: boolean,
  setError: React.Dispatch<React.SetStateAction<boolean>>
}

export const Appcontext = createContext<Context>({
  result: '',
  setResult: () => {},
  error: false,
  setError: () => {}
});
export const AppcontextProvider = ({children}: {children:ReactNode}) => {
  const [result, setResult] = useState('');
  const [error, setError] = useState(false);
  return(
    <Appcontext.Provider value={{
      result, setResult, error, setError
    }}>
      {children}
    </Appcontext.Provider>
  )
}