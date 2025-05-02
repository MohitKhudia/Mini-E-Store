import Feature from "@/Component/HomeCom/Feature";
import HeroSection from "@/Component/HomeCom/HeroSection";
import RecentlyAdded from "@/Component/HomeCom/RecentlyAdded";
import React from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <RecentlyAdded/>
      <Feature/>
    </>
  );
}