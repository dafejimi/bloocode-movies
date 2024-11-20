import { Text } from "../../components";
import React from "react";

export default function WelcomeSection() {
  return (
    <>
      {/* Welcome Section */}
      <div className="mt-7 flex flex-col items-center">
        <div className="container-xs flex flex-col items-start gap-2 px-3.5 md:px-5">
          <Text size="textxl" as="p" className="font-hairline text-[24px] text-white-a700 md:text-[22px]">
            Welcome...
          </Text>
          <Text size="textlg" as="p" className="font-hairline text-[18px] leading-[27px] text-white-a700">
            You&#39;ve found the most accurate source for TV and film. Our information comes from fans like you, so
            create a free account and help
            <br />
            your favorite shows and movies. Everything added is shared with many other sites, mobile apps, and devices.
          </Text>
        </div>
      </div>
    </>
  );
}
