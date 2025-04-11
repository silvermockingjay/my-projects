import type { ButtonProps } from "./interfaces";

export const Button = ({type = 'button', text = '', onClick, className = ''}: ButtonProps) => {
  const btn = document.createElement('button');
  btn.className = className;
  btn.type = type;
  btn.textContent = text;
  btn.addEventListener('click', function(event) {
    event.preventDefault();
    onClick();
  });
  return btn;
}
