
export function getRandomChar(min: number, max: number):string {
  const range = max - min + 1;
  const randomIndex = Math.floor(Math.random() * range + min);
  return String.fromCharCode(randomIndex);
}

export function getRandomSymbol() {
  const symbols = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
  const randomIndex = Math.floor(Math.random() * symbols.length)
  return symbols[randomIndex];
}

// credit note: 
// source code reference : https://stackblitz.com/edit/react-password-generator-app?file=src%2Futils.js
