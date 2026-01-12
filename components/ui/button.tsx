"use client";
import type { MouseEventHandler } from 'react';
import type { ReactElement } from 'react';

type ButtonProps = {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export default function Button({ label, onClick, className = '' }: ButtonProps): ReactElement {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn-gradient text-white rounded-xl px-6 py-3 font-medium transition-transform duration-300 transform hover:scale-105 active:scale-95 ${className}`}
    >
      {label}
    </button>
  );
}
