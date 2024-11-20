import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "TV and Film Information - The Most Accurate Source | TheTVDB",
  description:
    "Explore the most accurate source for TV and film information. Join TheTVDB community, discover trending movies, featured lists, and more. Your ultimate guide to entertainment.",
  // ogTitle:'...'
};

export default function WdefaultPage() {
  return <Page />;
}
