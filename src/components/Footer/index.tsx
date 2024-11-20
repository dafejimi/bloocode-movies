import Link from "next/link";
import React from "react";
import { Img, Text } from "../index";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props} className={`${props.className} flex justify-center items-center py-5 bg-black-900`}>
      <div className="container-xs flex justify-center md:px-5">
        <div className="flex w-full flex-col gap-7">
          <div className="ml-3.5 flex items-start justify-between gap-5 md:ml-0 md:flex-col">
            {/* About Section */}
            <div className="flex w-1/3 flex-col items-start gap-1 md:w-full">
              <Text size="textlg" as="p" className="font-hairline text-[18px] uppercase text-white-a700">
                About
              </Text>
              <ul className="flex flex-col items-start gap-1">
                <li>
                  <Link href="#">
                    <Text as="p" className="font-hairline text-[15px] text-green-300">
                      About TheTVDB
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text as="p" className="font-hairline text-[15px] text-green-300">
                      Earn Points
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="Subscribe" target="_blank" rel="noreferrer">
                    <Text as="p" className="font-hairline text-[15px] text-green-300">
                      Subscribe
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="API" target="_blank" rel="noreferrer">
                    <Text as="p" className="font-hairline text-[15px] text-green-300">
                      API
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Discover Section */}
            <div className="flex w-1/3 flex-col items-start gap-1 md:w-full">
              <Text size="textlg" as="p" className="font-hairline text-[18px] uppercase text-white-a700">
                Discover
              </Text>
              <ul className="flex flex-col items-start gap-1">
                <li>
                  <Link href="#">
                    <Text as="p" className="font-hairline text-[15px] text-green-300">
                      On Today
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="Awards" target="_blank" rel="noreferrer">
                    <Text as="p" className="font-hairline text-[15px] text-green-300">
                      Awards
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="Companies" target="_blank" rel="noreferrer">
                    <Text as="p" className="font-hairline text-[15px] text-green-300">
                      Companies
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="Lists" target="_blank" rel="noreferrer">
                    <Text as="p" className="font-hairline text-[15px] text-green-300">
                      Lists
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="People" target="_blank" rel="noreferrer">
                    <Text as="p" className="font-hairline text-[15px] text-green-300">
                      People
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="Taxonomy" target="_blank" rel="noreferrer">
                    <Text as="p" className="font-hairline text-[15px] text-green-300">
                      Taxonomy
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="flex w-1/3 flex-col items-start gap-1 md:w-full">
              <Text size="textlg" as="p" className="font-hairline text-[18px] uppercase text-white-a700">
                Legal
              </Text>
              <ul className="flex flex-col items-start gap-1">
                <li>
                  <Link href="#">
                    <Text as="p" className="font-hairline text-[15px] text-green-300">
                      Terms of Service
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text as="p" className="font-hairline text-[15px] text-green-300">
                      Privacy Policy
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="DMCA" target="_blank" rel="noreferrer">
                    <Text as="p" className="font-hairline text-[15px] text-green-300">
                      DMCA
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="flex w-[24%] flex-col items-start justify-center gap-3 px-3.5 py-1.5 md:w-full">
            <Text size="textlg" as="p" className="font-hairline text-[18px] uppercase text-white-a700">
              Follow Us
            </Text>
            <div className="mb-1 flex">
              <Img src="img_facebook.svg" width={42} height={20} alt="Facebook Icon" className="h-[20px]" />
              <Img src="img_trash.svg" width={40} height={20} alt="Trash Icon" className="h-[20px]" />
            </div>
          </div>
        </div>

        {/* Footer Logo & Copyright */}
        <div className="flex items-center px-3.5 py-1.5 sm:flex-col">
          <Img
            src="img_footer_logo.svg"
            width={74}
            height={20}
            alt="Footer Logo"
            className="h-[20px] w-[74px] object-contain"
          />
          <Text as="p" className="font-hairline text-[15px] text-white-a700">
            © 2024 TheTVDB.com ®, A Whip Media Company. ALL RIGHTS RESERVED.
          </Text>
        </div>
      </div>
    </footer>
  );
}
