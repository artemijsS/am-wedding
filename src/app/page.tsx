import React from "react";
import { Info, InfoSecond, Invite, TextFirst, TextSecond, Timer } from "@/components";

export default function Home() {
  return (
      <>
          <Invite />
          <Timer />
          <Info />
          <TextFirst />
          <InfoSecond />
          <TextSecond />
      </>
  );
}
