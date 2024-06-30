import { ReactNode } from 'react';
import { ActionsButtonsWrapper } from './ActionsButtons.styles';

type ActionButtonsProps = {
  children: ReactNode;
};

export const ActionsButtons = ({ children }: ActionButtonsProps) => {
  return <ActionsButtonsWrapper>{children}</ActionsButtonsWrapper>;
};
