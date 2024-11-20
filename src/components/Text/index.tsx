import React from "react";

const sizes = {
  textxs: "text-[12px] font-hairline",
  texts: "text-[15px] font-hairline",
  textmd: "text-[16px] font-hairline",
  textlg: "text-[18px] font-hairline",
  textxl: "text-[24px] font-hairline md:text-[22px]",
  text2xl: "text-[26px] font-hairline md:text-[24px] sm:text-[22px]",
  text3xl: "text-[36px] font-hairline md:text-[34px] sm:text-[32px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "texts",
  ...restProps
}) => {
  const Component = as || "p";
  return (
    <Component className={`text-white-a700 font-notosans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
