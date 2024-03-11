import React from "react";
import { DisclaimerBlock, FirstImage, Invite, MainBlock, Schedule, Timer } from "@/components";

export default function Home() {

    const targetDate = new Date("2024-08-09T00:00:00");
    const currentDate = new Date();
    const timeDifferenceDef = targetDate.getTime() - currentDate.getTime();

    return (
        <>
            <Invite />
            <Timer defDif={timeDifferenceDef > 0 ? timeDifferenceDef : null} />
            <FirstImage />
            <MainBlock />
            <Schedule />
            <DisclaimerBlock />
        </>
    );
}
