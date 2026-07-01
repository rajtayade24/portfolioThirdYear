import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import useCardTilt from "@/hooks/useCardTilt";

import portfolioImage from "@/assets/images/projects/portfolio.png";
import ecommerceImage from "@/assets/images/projects/ecommerce.png";
import socialMediaImage from "@/assets/images/projects/socialmedia.png";
import tradeSutraImage from "@/assets/images/projects/tradesutra.png";
import musicPlayerImage from "@/assets/images/projects/spotify.png";
import appleImage from "@/assets/images/projects/apple.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A complete full-stack e-commerce application featuring JWT authentication, product catalog, category management, shopping cart, order management, admin dashboard, secure REST APIs, and responsive UI.",
    image: ecommerceImage,
    tech: ["React", "Spring Boot", "PostgreSQL", "JWT", "Tailwind CSS"],
    live: "https://ecommerce-backend-clean-18-lspu.onrender.com",
    code: "https://github.com/rajtayade24/ecommerce-backend-clean",
    featured: true,
  },
  {
    title: "Instagram Clone",
    description:
      "A scalable social media platform with authentication, image uploads, posts, likes, comments, follow system, profile management, and JWT-based security.",
    image: socialMediaImage,
    tech: ["React", "Spring Boot", "JWT", "PostgreSQL", "Cloudinary"],
    live: "https://your-live-demo-link.com",
    code: "https://github.com/rajtayade24/instagram-clone",
    featured: true,
  },
  {
    title: "TradeSutra",
    description:
      "A financial dashboard that visualizes stock market data with interactive charts, responsive design, and Flask-powered backend integration.",
    image: tradeSutraImage,
    tech: ["Flask", "JavaScript", "HTML", "CSS"],
    live: "https://stock-market-flask-18.onrender.com",
    code: "https://github.com/rajtayade24/financial-analyzing",
    featured: false,
  },
  {
    title: "Music Player",
    description:
      "A modern JavaScript music player with playlist management, song search, playback controls, volume adjustment, progress tracking, and responsive UI.",
    image: musicPlayerImage,
    tech: ["JavaScript", "HTML", "CSS"],
    live: "https://tunezo.netlify.app",
    code: "https://github.com/rajtayade24/tunezo-18",
    featured: false,
  },
  {
    title: "Apple Website Clone",
    description:
      "A pixel-perfect recreation of Apple's official website featuring modern layouts, responsive design, smooth animations, and interactive product sections.",
    image: appleImage,
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://a-p-p-l-e.netlify.app",
    code: "https://github.com/rajtayade24/apple-clone",
    featured: false,
  },
  {
    title: "Developer Portfolio",
    description:
      "A premium personal portfolio showcasing projects, skills, animations, glassmorphism UI, dark mode, and fully responsive design using React and Framer Motion.",
    image: portfolioImage,
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "https://portfolio-third-year.vercel.app",
    code: "https://github.com/rajtayade24/portfolioThirdYear",
    featured: false,
  },
];

function ProjectCard({ project, featured = false }) {
  const { ref, rotateX, rotateY, handleMove, handleLeave } = useCardTilt();

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      onPointerCancel={handleLeave}
      initial={{ opacity: 0, y: featured ? 50 : 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className="group relative"
    >
      <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.25 }}>
        <GlassCard className="h-full overflow-hidden p-0">
          <div className="relative overflow-hidden">
            <div
              className={`relative overflow-hidden ${featured ? "aspect-[16/10]" : "aspect-[4/3]"
                }`}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
                initial={false}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                draggable="false"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent dark:from-black/75 dark:via-black/25" />
            </div>

            {featured && (
              <div className="absolute left-0 top-0 flex w-full items-start justify-between p-5">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
                  Featured
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
                  ⭐
                </span>
              </div>
            )}

            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-7">
              <h3
                className={`font-semibold text-white ${featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                  }`}
              >
                {project.title}
              </h3>
              <p
                className={`mt-4 text-white/75 ${featured ? "max-w-2xl text-sm leading-7 sm:text-base" : "text-sm leading-7"
                  }`}
              >
                {project.description}
              </p>
            </div>
          </div>

          <div className="border-t border-[var(--border)] bg-[var(--card)] p-6 backdrop-blur-xl sm:p-7">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="rounded-full border border-[var(--border)] bg-[var(--card-strong)] px-3 py-1 text-xs font-medium text-[var(--fg)] backdrop-blur-md transition hover:bg-[var(--card)]"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <Button href={project.live} target="_blank" rel="noreferrer" size="sm">
                Live Demo <FiArrowUpRight />
              </Button>
              <Button
                href={project.code}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                size="sm"
              >
                Code <FiGithub />
              </Button>
            </motion.div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}

const Projects = () => {
  const sectionRef = useRef(null);

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-title .section-title", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-title",
          start: "top 80%",
        },
      });

      gsap.from(".projects-title .section-desc", {
        y: 18,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: ".projects-title",
          start: "top 80%",
        },
      });

      gsap.to(".projects-bg-orb", {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".projects-footer", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-footer",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-[var(--bg)] px-4 py-20 text-[var(--fg)] transition-colors duration-500 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="projects-bg-orb absolute left-[-10%] top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />
        <div className="projects-bg-orb absolute right-[-10%] top-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-300/10" />
        <div className="projects-bg-orb absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-400/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04),transparent_45%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="projects-title">
          <div className="section-title">
            <SectionTitle
              eyebrow="Projects"
              title="Selected work and"
              highlight="featured builds"
              description="A collection of full-stack and frontend projects that highlight clean architecture, modern design, and strong user experience."
            />
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <motion.div
          className="projects-footer mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 text-center shadow-[var(--shadow-soft)] backdrop-blur-xl lg:flex-row lg:text-left"
        >
          <div>
            <h3 className="text-xl font-semibold text-[var(--fg)]">
              Want to see more work?
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Explore my GitHub for more projects, experiments, and ongoing builds.
            </p>
          </div>

          <Button
            href="https://github.com/rajtayade24"
            target="_blank"
            rel="noreferrer"
            variant="secondary"
          >
            Visit GitHub <FiGithub />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;