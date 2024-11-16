import React from "react"
import HeroSection from "@/components/hero_section/main"
import Navbar from "@/components/ui/navbar"
import AboutSection from "@/components/about_section/main";
import ProjectSection from "@/components/projects_section/main";
import SkillSection from "@/components/skill_section/main";
import Footer from "@/components/ui/footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <SkillSection />
            <Footer />
        </main>
    );
}
