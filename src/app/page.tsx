"use client";

import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Certificates from "@/components/Certificates";
import GithubProjects from "@/components/GithubProjects";
import { useState } from "react";
import { Project, PROJECTS } from "@/constants/projects";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [cvOpen, setCvOpen] = useState(false);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <main className="w-full max-w-[100vw] min-h-screen bg-white dark:bg-[#0a0a0d] text-slate-900 dark:text-white transition-colors duration-300">
      <ProjectModal project={selectedProject} onClose={handleCloseProject} />

      {/* 3D Background Wrapper - Fixed behind everything */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
      </div>

      <div className="max-w-[100vw] mx-auto px-2 py-4 md:px-6 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-10 relative z-10">
          
          {/* Left Column: Sticky Sidebar — hidden when CV is open */}
          <div className={`lg:col-span-3 xl:col-span-3 relative z-30 transition-all duration-500 ${cvOpen ? "opacity-0 pointer-events-none -translate-x-8" : "opacity-100 translate-x-0"}`}>
              <div className="relative lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)]">
                <Sidebar />
              </div>
          </div>

          {/* Right Column: Scrollable Content */}
          <div className="lg:col-span-9 xl:col-span-9 flex flex-col gap-0 pb-20">
              <section id="home" className="flex flex-col justify-center pt-4 lg:pt-0">
                <Hero />
              </section>
              <Projects onProjectClick={handleOpenProject} />
              <section id="about">
                <About cvOpen={cvOpen} setCvOpen={setCvOpen} />
              </section>
              <Services />
              <section id="experience">
                <Experience />
              </section>
              <Certificates />
              <GithubProjects />
              <section id="contact">
                <Contact />
              </section>
          </div>
      </div>
    </main>
  );
}
