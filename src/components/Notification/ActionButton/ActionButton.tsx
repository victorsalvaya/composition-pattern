import { ReactNode, ButtonHTMLAttributes } from 'react';

import React from 'react';
import { Button } from './ActionButton.styles';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const ActionButton = ({ children, ...rest }: ActionButtonProps) => {
  return <Button {...rest}>{children}</Button>;
};
