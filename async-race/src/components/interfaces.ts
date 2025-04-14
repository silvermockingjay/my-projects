interface Car {
  name: string,
  color: string,
  id: number,
}

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset',
  text?: string,
  onClick?: () => void,
  className?: string,
}

export interface InputProps {
  type: string,
  value?: string,
  id?: string,
  placeholder?: string,
  disabled?: boolean,
  className?: string,
}

export interface FormProps {
  formSubmitFun: (...args: string[]) => Promise<Car>,
  inputFields: HTMLInputElement[],
  formClass?: string,
  btnClass?: string,
  btnText: string,
}
