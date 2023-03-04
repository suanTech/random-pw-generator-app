
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

