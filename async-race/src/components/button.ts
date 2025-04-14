import type { ButtonProps } from "./interfaces";

export const button = ({type = 'button', text = '', onClick, className = ''}: ButtonProps): HTMLButtonElement => {
  const btn: HTMLButtonElement = document.createElement('button');
  btn.className = className;
  btn.type = type;
  btn.textContent = text;
  if (onClick) {
    btn.addEventListener('click', function(event) {
      event.preventDefault();
      onClick();
    });
  }
  return btn;
}
