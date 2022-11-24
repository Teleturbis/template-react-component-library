import React from 'react';
import css from './button.module.scss';

export interface ButtonProps {
  label: string;
}

// const Button = (props: ButtonProps) => {
//   return <button>{props.label}</button>;
// };

// export default Button;

export default function Button(props: ButtonProps) {
  return <button className={css.button}>{props.label}</button>;
}
