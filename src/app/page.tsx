import React from "react";
import { DisclaimerBlock, FirstImage, Invite, MainBlock, Schedule, Timer } from "@/components";

export default function Home() {
  return (
      <>
          <Invite />
          <Timer />
          <FirstImage />
          <MainBlock />
          <Schedule />
          <DisclaimerBlock />
      </>
  );
}
