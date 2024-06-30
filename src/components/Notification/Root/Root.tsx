import { ReactNode } from 'react';
import { RootWrapper } from './Root.styles';

type RootProps = {
  children: ReactNode;
};

export const Root = ({ children }: RootProps) => {
  return <RootWrapper>{children}</RootWrapper>;
};
