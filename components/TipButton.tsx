import React from 'react';
import { Button } from './ui/button';

interface TipButtonProps {
  perc: number;
  selected: boolean;
  onClick: () => void;
}

function TipButton({ perc, selected, onClick }: TipButtonProps) {
  return (
    <Button
      className={`w-full h-full font-bold text-xl cursor-pointer 
        ${selected ? 'bg-teal-500 text-teal-900' : 'bg-teal-900 hover:bg-teal-500 hover:text-teal-900'}`}
      onClick={onClick}
    >
      {perc}%
    </Button>
  );
}

export default TipButton;
