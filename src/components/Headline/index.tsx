import React from 'react';

export interface ButtonProps {
  label: string;
}

export default function Headline(props: ButtonProps) {
  return <h1>{props.label}</h1>;
}
