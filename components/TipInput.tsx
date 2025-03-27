import React from "react";
import { Input } from "./ui/input";

interface TipInputProps {
  icon: React.ReactNode;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TipInput({ icon, placeholder = "0", value, onChange }: TipInputProps) {
  return (
    <div className="relative mt-2">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        {icon}
      </div>

      <Input
        type="number"
        className="bg-gray-100 pl-10 pr-3 text-right text-xl text-gray-600 font-semibold w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TipInput;
