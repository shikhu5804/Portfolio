"use client";

import { useState, useRef, useEffect } from "react";
import { profile } from "@/constant";
import { SectionHeader } from "@/components/common";

import { StatementCard, type SlideItem } from "./_components/StatementCard";
import { OriginCard } from "./_components/OriginCard";
import { EducationSlide } from "./_components/EducationSlide";
import { CodingStatsSlide } from "./_components/CodingStatsSlide";
import { QuoteSlide } from "./_components/QuoteSlide";

const DEFAULT_SLIDES: SlideItem[] = [
  profile.about[0],
  <EducationSlide key="edu" />,
  <CodingStatsSlide key="stats" />,
  <QuoteSlide key="quote" quote={profile.quote} />,
];

interface AboutSectionProps {
  slides?: SlideItem[];
  imageSrc?: string | string[];
}

export const AboutSection = ({
  slides = DEFAULT_SLIDES,
  imageSrc = "/images/mee.png",
}: AboutSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isManuallySelected, setIsManuallySelected] = useState(false);
  const totalItems = slides.length;

  const handleSelectIndex = (index: number) => {
    setActiveIndex(index);
    setIsManuallySelected(true);
  };

  // Subtle auto-rotate timer if not hovered and not manually selected by user
  useEffect(() => {
    if (isHovered || isManuallySelected) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, isManuallySelected, totalItems]);

  return (
    <div ref={containerRef} className="relative w-full">
      <section
        id="about"
        className="w-full select-none px-6 py-12 md:px-12 lg:px-20"
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mx-auto w-full max-w-5xl"
        >
          <SectionHeader number="02" title="About" align="left" />

          {/* Bento Grid — Statement & Origin */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 items-stretch">
            <StatementCard
              slides={slides}
              activeIndex={activeIndex}
              onSelectIndex={handleSelectIndex}
              index={0}
            />
            <OriginCard
              imageSrc={imageSrc}
              activeIndex={activeIndex}
              onSelectIndex={handleSelectIndex}
              index={1}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
