import type { ParagraphProps } from './interfaces';

export const pElem = ({ className, text }: ParagraphProps): HTMLParagraphElement => {
  const elem = document.createElement('p');
  if (className) elem.className = className;
  if (text) elem.textContent = text;
  return elem;
};
