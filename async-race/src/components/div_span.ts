import type { DivProps, SpanProps } from './interfaces';

export const divElem = ({ className, text }: DivProps): HTMLDivElement => {
  const elem = document.createElement('div');
  if (className) elem.className = className;
  if (text) elem.textContent = text;
  return elem;
};

export const spanElem = ({ className, text }: SpanProps): HTMLSpanElement => {
  const elem = document.createElement('span');
  if (className) elem.className = className;
  if (text) elem.textContent = text;
  return elem;
};
