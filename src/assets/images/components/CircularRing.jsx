

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function CircularRing({ size = 180, label = "RT" }) {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const logo = ".logo-wrap";
      const ring = ".logo-ring";
      const core = ".logo-core";
      const shine = ".logo-shine";
      const dots = ".logo-dot";

      // Base state
      gsap.set([ring, core, shine, dots], {
        transformOrigin: "50% 50%",
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        logo,
        { scale: 0.7, opacity: 0, rotate: -10, filter: "blur(10px)" },
        { scale: 1, opacity: 1, rotate: 0, filter: "blur(0px)", duration: 1.1 }
      )
        .from(
          ring,
          {
            scale: 0.5,
            opacity: 0,
            rotate: -180,
            duration: 1,
            ease: "expo.out",
          },
          0.08
        )
        .from(
          core,
          {
            scale: 0.85,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.8)",
          },
          0.18
        )

        .from(
          dots,
          {
            scale: 0,
            opacity: 0,
            stagger: 0.12,
            duration: 0.5,
            ease: "back.out(2)",
          },
          0.36
        );

      // Continuous motion
      gsap.to(ring, {
        rotate: 360,
        duration: 26,
        repeat: -1,
        ease: "none",
      });

      gsap.to(dots, {
        y: -8,
        x: "random(-6, 6, 2)",
        repeat: -1,
        yoyo: true,
        duration: "random(1.6, 2.6, 0.2)",
        ease: "sine.inOut",
        stagger: 0.18,
      });

      gsap.to(shine, {
        x: 240,
        repeat: -1,
        duration: 2.8,
        ease: "power2.inOut",
        delay: 0.8,
      });

      // Hover interaction
      const el = rootRef.current;
      const onEnter = () => {
        gsap.to(logo, {
          scale: 1.05,
          duration: 0.35,
          ease: "power2.out",
        });
        gsap.to(core, {
          scale: 1.03,
          duration: 0.35,
          ease: "power2.out",
        });

      };

      const onLeave = () => {
        gsap.to(logo, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(core, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });

      };

      el?.addEventListener("mouseenter", onEnter);
      el?.addEventListener("mouseleave", onLeave);

      return () => {
        el?.removeEventListener("mouseenter", onEnter);
        el?.removeEventListener("mouseleave", onLeave);
      };
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="absolute left-1/2 top-1/2 inline-flex select-none items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{ width: size, height: size }}
      aria-label="Animated logo"
      role="img"
    >
      <div className="logo-wrap relative h-full w-full">
        <svg
          viewBox="0 0 200 200"
          className="h-full w-full overflow-visible"
          fill="none"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="45%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>

            <radialGradient id="logoGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.35" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>

            <clipPath id="logoClip">
              <circle cx="100" cy="100" r="70" />
            </clipPath>
          </defs>

          {/* Outer ring */}
          <circle
            className="logo-ring"
            cx="100"
            cy="100"
            r="74"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            strokeDasharray="10 8"
            opacity="0.95"
          />

          {/* Soft glow */}
          <circle cx="100" cy="100" r="66" fill="url(#logoGlow)" opacity="0.55" />

          {/* Core disc */}
          <circle
            className="logo-core"
            cx="100"
            cy="100"
            r="56"
            fill="rgba(255,255,255,0.06)"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
          />

          {/* Animated highlight sweep */}
          <g clipPath="url(#logoClip)">
            <rect
              className="logo-shine"
              x="-120"
              y="0"
              width="60"
              height="200"
              fill="rgba(255,255,255,0.2)"
              transform="skewX(-20)"
            />
          </g>

          {/* Orbiting dots */}
          <circle className="logo-dot" cx="100" cy="24" r="4.2" fill="#38bdf8" />
          <circle className="logo-dot" cx="172" cy="100" r="3.8" fill="#6366f1" />
          <circle className="logo-dot" cx="100" cy="176" r="4.2" fill="#a855f7" />
          <circle className="logo-dot" cx="28" cy="100" r="3.8" fill="#38bdf8" />
        </svg>
      </div>
    </div>
  );
};
