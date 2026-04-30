import { Hero } from "../components/hero";
import {
  AboutSection,
  ApproachSection,
  CertificationsSection,
  ExperienceSection,
  ImpactSection,
  MoreWorkSection,
  ProjectsSection,
  SkillsSection,
  WhyMeSection
} from "../components/home-sections";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <MoreWorkSection />
      <AboutSection />
      <ExperienceSection />
      <ImpactSection />
      <ApproachSection />
      <SkillsSection />
      <CertificationsSection />
      <WhyMeSection />
    </main>
  );
}
