import type { ReactNode, ReactElement } from 'react';

type CardProps = {
  children: ReactNode;
  title?: string;
};

export default function Card({ children }: CardProps): ReactElement {
  return (
    <article className="card-glass p-4 card-hover transition-all duration-300">
      {children}
    </article>
  );
}
