"use client";
import type { ChangeEventHandler } from 'react';
import type { ReactElement } from 'react';

type InputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

export default function Input({ value, onChange, className = '' }: InputProps): ReactElement {
  return (
    <input
      value={value}
      onChange={onChange}
      className={`w-full rounded-xl border p-3 border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
    />
  );
}
