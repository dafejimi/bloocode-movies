import React from "react";

// Define the sizes object with possible keys
const sizes = {
  small: "text-sm",
  medium: "text-md",
  large: "text-lg",
} as const;

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "medium",  // Provide a default size
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={` ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
