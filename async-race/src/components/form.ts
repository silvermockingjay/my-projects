import type { FormProps, InputProps } from "./interfaces"
import { Button } from "./button";

export const inputField = ({type, value, id, placeholder, disabled, className}: InputProps): HTMLInputElement => {
  const input: HTMLInputElement = document.createElement('input');
  input.type = type;
  if (placeholder) input.placeholder = placeholder;
  if (value) input.value = value;
  if (id) input.id = id; 
  if (disabled) input.disabled = disabled;
  if (className) input.className = className;
  return input;
}

export const form = ({formClass, formSubmitFun, inputFields, btnClass, btnText,}: FormProps): HTMLFormElement => {
  const formElem: HTMLFormElement = document.createElement('form');
  if (formClass) formElem.className = formClass;
  
  inputFields.forEach((input) => formElem.append(input));

  const btn = Button({type: 'submit', text: btnText});
  if (btnClass) btn.className = btnClass;
  formElem.append(btn);

  formElem.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputValues: string[] = inputFields.map((input) => input.value);
    formSubmitFun(...inputValues);
  })
  return formElem;
}
