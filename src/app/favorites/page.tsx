import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Official Movie Lists - Marvel, Star Wars, and More | TheTVDB",
  description:
    "Discover official movie lists including the Marvel Cinematic Universe, Star Wars Franchise, and more. Create your own list and engage with the TheTVDB community.",
  // ogTitle: '...'
};

export default function WdefaultTwoPage() {
  return <Page />;
}
