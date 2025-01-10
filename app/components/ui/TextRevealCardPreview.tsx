"use client";
import React, { JSX } from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";

export function TextRevealCardPreview(): JSX.Element {
  return (
    <div className="flex items-center justify-center h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Design evolves"
        revealText="Collaboration drives change"
      >
        <TextRevealCardTitle>
          Change starts with design.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Hover to see the power of collaboration in design.
        </TextRevealCardDescription>
        <TextRevealCardDescription>
          Together, we craft visuals that inspire and connect.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}

export { TextRevealCard };
