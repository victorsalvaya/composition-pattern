import React from 'react';
import { ContentWrapper } from './Content.styles';

type ContentProps = {
  children: string;
};

export const Content = ({ children }: ContentProps) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};
