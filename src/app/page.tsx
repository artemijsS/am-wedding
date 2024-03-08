import React from "react";
import { FirstImage, Invite, MainBlock, Schedule, Timer } from "@/components";

export default function Home() {
  return (
      <>
          <Invite />
          <Timer />
          <FirstImage />
          <MainBlock />
          <Schedule />
      </>
  );
}
