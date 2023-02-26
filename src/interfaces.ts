
interface Label {
  label: string,
  checked: boolean
} 

interface Button {
  children?: React.ReactNode;
  className: string;
  onClick?: () => void;
}

export type {Label, Button}