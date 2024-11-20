"use client";

import React from "react";

const shapes = { 
  round: "rounded", 
} as const;

const variants = { 
  fill: { 
    blue_gray_900: "bg-blue_gray-900 shadow-bs text-gray-500_01", 
  }, 
} as const;

const sizes = { 
  xs: "h-[46px] px-[18px]", 
  sm: "h-[46px] px-[18px] text-[16px]", 
} as const;

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "prefix" | "size"> & Partial<{ 
  label: string; 
  prefix: React.ReactNode; 
  suffix: React.ReactNode; 
  shape: keyof typeof shapes; 
  variant: keyof typeof variants | null; 
  size: keyof typeof sizes; 
  color: string; 
}>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((
  { 
    className = "", 
    name = "", 
    placeholder = "", 
    type = "text", 
    label = "", 
    prefix, 
    suffix, 
    onChange, 
    shape, 
    variant = "fill", 
    size = "sm", 
    color = "blue_gray_900", 
    ...restProps 
  }, 
  ref
) => {
  return (
    <label 
      className={`${className} flex items-center justify-center cursor-text bg-blue_gray-900 shadow-bs flex-grow rounded  
        ${shape && shapes[shape]} 
        ${variant && (variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant])} 
        ${size && sizes[size]}`}
    >
      {!!label && label}
      {!!prefix && prefix}
      <input 
        ref={ref} 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        onChange={onChange} 
        {...restProps} 
      />
      {!!suffix && suffix}
    </label>
  );
});

export { Input };
