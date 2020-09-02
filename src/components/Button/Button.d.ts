import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariants = 'secondary' | 'transparent';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: ButtonVariants;
  type?: string;
};
