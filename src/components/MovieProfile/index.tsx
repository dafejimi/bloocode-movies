import { Text, Img } from "../index";
import React from "react";
import Link from "next/link";

interface Props {
  className?: string;
  mainImage?: string;
  franchiseTitle?: React.ReactNode;
  statOne?: React.ReactNode;
  statTwo?: React.ReactNode;
  authorName?: React.ReactNode;
  descriptionText?: React.ReactNode;
  id?: number;
}

export default function MovieProfile({
  mainImage,
  franchiseTitle,
  statOne,
  statTwo,
  authorName,
  descriptionText,
  id,
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col items-center gap-3.5 flex-1`}>
      <Link href={`/details/${id}`}>
        <Img
          src={mainImage}
          width={98}
          height={146}
          alt={`${franchiseTitle} Poster`}
          className="h-[146px] w-[98px] object-cover rounded hover:opacity-80 transition-opacity duration-300"
        />
      </Link>
      <div className="flex flex-1 flex-col items-center justify-center gap-2.5 px-3.5 sm:gap-2.5">
        <div className="self-stretch">
          <div>
            <div className="flex">
              <Link href={`/details/${id}`}>
                <Text 
                  size="text2xl" 
                  as="p" 
                  className="font-hairline text-[26px] text-green-300 hover:text-green-500 transition-colors duration-300 sm:text-[22px]"
                >
                  {franchiseTitle}
                </Text>
              </Link>
            </div>
            <div className="pt-3 relative mt-[-2px] flex flex-wrap items-center">
              <Img
                src="/images/star.svg"
                width={10}
                height={12}
                alt="Rating Icon"
                className="h-[12px] self-end"
              />
              <Text size="textxs" as="p" className="font-hairline text-[12.9px] text-gray-500">
                Rating: {statOne}
              </Text>
              <Img
                src="/images/votes.svg"
                width={12}
                height={12}
                alt="Votes Icon"
                className="ml-3.5 h-[12px] w-[12px] self-end"
              />
              <Text size="textxs" as="p" className="font-hairline text-[12.9px] text-gray-500">
                Votes: {statTwo}
              </Text>
              <Img
                src="/images/calendar.svg"
                width={8}
                height={12}
                alt="Year Icon"
                className="ml-3.5 h-[12px] self-end"
              />
              <Text size="textxs" as="p" className="font-hairline text-[12.9px] text-gray-500">
                Year: {authorName}
              </Text>
            </div>
          </div>
        </div>
        <Text as="p" className="font-hairline mb-1 text-[15px] leading-[22px] text-white-a700">
          {descriptionText}
        </Text>
      </div>
    </div>
  );
}