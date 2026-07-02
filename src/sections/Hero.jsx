import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileAlt } from "react-icons/fa";

import Button from "@/components/Button";
import SocialLinks from "@/components/SocialLinks";
import GlassCard from "@/components/GlassCard";
import profileImage from "@/assets/images/profile.png";
import CircularRing from "@/components/CircularRing";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  { value: "9+", label: "Projects" },
  { value: "1+", label: "Years" },
  { value: "7+", label: "Tech" },
];

const isDesktop = window.matchMedia("(min-width:1024px)").matches;

const Hero = () => {
  const heroRef = useRef(null);

  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const ringRef = useRef(null);
  const shineRef = useRef(null);

  const move = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -12;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      transformPerspective: 1200,
      transformOrigin: "center",
      duration: 0.45,
      ease: "power3.out",
    });
  };

  const leave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  useGSAP(
    () => {
      gsap.set(cardRef.current, {
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      });

      gsap.set(imageRef.current, {
        rotateY: 60,
        rotateX: -25,
        scale: 1.35,
        opacity: 0,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-badge", {
        y: 18,
        autoAlpha: 0,
        duration: 0.55,
      })

        .from(
          ".hero-title-line",
          {
            y: 36,
            autoAlpha: 0,
            stagger: 0.12,
            duration: 0.7,
          },
          "-=0.15"
        )

        .from(
          ".hero-description",
          {
            y: 24,
            autoAlpha: 0,
            duration: 0.55,
          },
          "-=0.42"
        )

        .from(
          ".hero-actions",
          {
            y: 22,
            autoAlpha: 0,
            duration: 0.5,
          },
          "-=0.35"
        )

        .from(
          ".hero-social-block",
          {
            y: 18,
            autoAlpha: 0,
            duration: 0.5,
          },
          "-=0.3"
        )

        .to(
          imageRef.current,
          {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            duration: 1.25,
            ease: "expo.out",
          },
          "-=0.55"
        )

        .to(
          shineRef.current,
          {
            x: "220%",
            duration: 1.3,
            ease: "power2.inOut",
          },
          "-=1"
        )

        .from(
          ".hero-floating",
          {
            scale: 0.7,
            autoAlpha: 0,
            stagger: 0.12,
            duration: 0.55,
          },
          "-=0.9"
        )

        .from(
          ".hero-stats, .hero-work, .hero-focus",
          {
            y: 18,
            autoAlpha: 0,
            stagger: 0.12,
            duration: 0.5,
          },
          "-=0.45"
        )

        .from(
          ".hero-scroll",
          {
            y: 10,
            autoAlpha: 0,
            duration: 0.35,
          },
          "-=0.25"

        );

      // rotating ring
      gsap.to(ringRef.current, {
        rotate: 360,
        repeat: -1,
        duration: 28,
        ease: "none",
      });

      // breathing image
      gsap.to(imageRef.current, {
        scale: 1.03,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
      });

      gsap.to(".hero-orb", {
        yPercent: 10,
        xPercent: 5,
        rotate: 8,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".hero-image-card", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".hero-scroll", {
        y: 10,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 85%",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-floating", {
        y: -10,
        x: 8,
        rotate: 3,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.25,
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative overflow-hidden bg-[var(--bg)] px-4 pt-28 pb-16 text-[var(--fg)] transition-colors duration-500 sm:px-6 lg:px-8 lg:pt-36 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-orb hero-floating blue -left-24 -top-24" />
        <div className="hero-orb hero-floating cyan -right-24 top-20" />
        <div className="hero-orb hero-floating purple bottom-[-8rem] left-1/3" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04),transparent_45%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_45%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="max-w-2xl">
          <span className="hero-badge mb-5 inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-[var(--muted)] shadow-[var(--shadow-soft)] backdrop-blur-md">
            Java Full-Stack Developer
          </span>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[var(--fg)] sm:text-5xl lg:text-7xl">
            <span className="hero-title-line block">Building</span>
            <span className="hero-title-line block">
              <span className="gradient-text">premium digital</span>
            </span>
            <span className="hero-title-line block">experiences.</span>
          </h1>

          <p className="hero-description mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            I design and develop modern web applications with React, Spring Boot,
            REST APIs, and clean UI engineering. My focus is on performance,
            scalability, and polished user experiences.
          </p>

          <div className="hero-actions mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#projects" size="lg">
              View Projects
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Contact Me
            </Button>
            <Button
              href="https://drive.google.com/file/d/1nT52CdGVJjO-rwn5uM0IVomnJefQHCNe/view?usp=sharing"
              size="lg"
              variant="secondary"
              className="flex items-center gap-2"
              target="_blank"
            >
              <FaFileAlt />
              Resume
            </Button>
          </div>

          <div className="hero-social-block mt-10 flex flex-col gap-5">
            <div className="text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
              Find me on
            </div>

            <SocialLinks
              items={[
                {
                  name: "GitHub",
                  href: "https://github.com/rajtayade24",
                  icon: FaGithub,
                },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/raj-tayade-68a800328/",
                  icon: FaLinkedinIn,
                },
                {
                  name: "Email",
                  href: "mailto:rajtayade2492006@gmail.com",
                  icon: FaEnvelope,
                },
              ]}
            />
          </div>
        </div>

        {/* <div className="relative mx-auto w-full max-w-xl"> */}
        <div className="relative mx-auto w-full max-w-[340px] sm:max-w-xl">
          <div className="hero-floating absolute -left-6 top-10 hidden h-20 w-20 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow-soft)] backdrop-blur-xl lg:block">
            <div className="h-full w-full rounded-2xl bg-gradient-theme opacity-70" />
          </div>

          <div className="hero-floating absolute -right-2 bottom-16 hidden h-16 w-16 rounded-full border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-soft)] backdrop-blur-xl lg:block" />
          <GlassCard
            ref={cardRef}
             hover={false}
            className="hero-image-card relative"
            onMouseMove={move}
            onMouseLeave={leave}
          >
            <div className="flex flex-col items-center gap-8 p-2 sm:p-4">
              <div className="relative">
                <div
                  ref={ringRef}
                  className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 sm:h-[290px] sm:w-[290px]"
                >
                  <CircularRing size={290} label="RT" />
                </div>

                <div
                  className="relative z-10 h-48 w-48 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--card)] p-2 shadow-[var(--shadow-card)] sm:h-56 sm:w-56"
                >
                  <img
                    ref={imageRef}
                    src={profileImage}
                    alt="Raj Tayade"
className="h-full w-full rounded-full object-cover will-change-transform"                  />
                  <div
                    ref={shineRef}
                    className="absolute inset-0 bg-gradient-to-r
                     from-transparent
                     via-white/40
                     to-transparent
                     -translate-x-full
                     rotate-12"
                  />
                </div>
              </div>

              <div className="hero-stats w-full rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {stats.map((item) => (
                    <div key={item.label}>
                      <div className="text-2xl font-semibold text-[var(--fg)] sm:text-3xl">
                        {item.value}
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="grid w-full gap-4 sm:grid-cols-2"> */}
              <div className="grid w-full min-w-0 gap-4 sm:grid-cols-2">
                <div className="hero-work rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-[var(--shadow-soft)] backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                    Currently working on
                  </p>
                  <p className="mt-3 text-lg font-medium text-[var(--fg)]">
                    Full-stack systems with React + Spring Boot
                  </p>
                </div>

                <div className="hero-focus rounded-3xl border border-[var(--border)] bg-gradient-theme p-5 shadow-[var(--shadow-soft)] backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                    Focus
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">
                    Clean UI, scalable backend, great DX
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      <a
        href="#about"
        className="hero-scroll absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)] shadow-[var(--shadow-soft)] backdrop-blur-md lg:inline-flex"
      >
        Scroll Down
      </a>
    </section>
  );
};

export default Hero;


