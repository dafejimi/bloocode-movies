import React from "react";

const shapes = {
  round: "rounded-tl-md rounded-bl-md",
  square: "rounded-[0px]"
} as const;

const variants = {
  fill: {
    green_300: "bg-green-300 text-gray-900_01",
    gray_900_01: "bg-gray-900_01 text-green-300"
  }
} as const;

const sizes = {
  xs: "h-[48px] px-4 text-[19px]"
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "gray_900_01",
  ...restProps
}) => {
  return (
    <button className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap text-[19px] font-hairline border border-solid ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${
        variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
