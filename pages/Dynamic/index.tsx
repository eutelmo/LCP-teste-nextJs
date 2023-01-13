import { ReactNode } from 'react';

import { Container } from './styles';

interface DynamicProps {
  children: ReactNode;
}

export function Dynamic({ children }: DynamicProps) {
  return (
    <Container>
      <h1>Dynamic</h1>
      {children}
    </Container>
  );
}
