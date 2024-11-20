"use client";

import React from "react";
import Image from "next/image";

const BASE_URL = process.env.BASE_PATH || "/images/";

interface ImgProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  className?: string;
  src?: string;
  alt?: string;
  isStatic?: boolean;
  width?: number;
  height?: number;
}

const Img: React.FC<ImgProps> = ({
  className = "",
  src = "unavailable.jpg",
  alt = "Image",
  isStatic = false,
  width,
  height,
  ...restProps
}) => {
  const [imgSrc, setImgSrc] = React.useState<string>(src);

  React.useEffect(() => {
    setImgSrc(src);
  }, [src]);

  // Helper function to resolve image source
  const resolveImagePath = (path: string): string => {
    if (path.startsWith('http') || path.startsWith('data:')) {
      return path;
    }
    return `${BASE_URL}${path}`;
  };

  if (isStatic) {
    return (
      <img
        className={className}
        src={resolveImagePath(imgSrc)}
        alt={alt}
        width={width}
        height={height}
        {...restProps}
        onError={() => setImgSrc("unavailable.jpg")}
      />
    );
  }

  return (
    <Image
      className={className}
      src={resolveImagePath(imgSrc)}
      alt={alt}
      width={width || 0}
      height={height || 0}
      {...restProps}
      onError={() => setImgSrc("unavailable.jpg")}
    />
  );
};

export { Img };