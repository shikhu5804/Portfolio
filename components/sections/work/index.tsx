"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { SectionHeader } from "@/components/common";
import { selected_works, socials } from "@/constant";
import { WorkCard } from "./_components/WorkCard";

export const WorkSection = () => {
  const githubUrl =
    socials.find((s) => s.name === "GitHub")?.url ||
    "https://github.com/shikhu5804";

  return (
    <section
      id="work"
      className="relative w-full select-none px-6 py-28 md:px-12 lg:px-20"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeader number="05" title="Work" align="right" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {selected_works.map((project, index) => (
            <WorkCard
              key={project.name}
              index={index}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              links={project.links}
            />
          ))}
        </div>

        {/* View More Projects Button -> Opens GitHub */}
        <div className="mt-14 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-accent/40 bg-accent/10 px-8 py-4 font-mono text-sm font-semibold text-accent shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground hover:shadow-accent/20"
          >
            <FaGithub className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            <span>View More Projects on GitHub</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
