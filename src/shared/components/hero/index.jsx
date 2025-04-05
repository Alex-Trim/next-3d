"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/shared/utils/Split3.min";

import styles from "./Hero.module.scss";
export const Hero = () => {
  const ref = React.useRef(null);
  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const split = new SplitText("#hero-text", {
      type: "lines,chars",
      linesClass: "overflowHidden",
      charsClass: "char",
    });

    gsap.from(split.chars, {
      duration: 0.8,
      yPercent: 130,
      opacity: 0,
      stagger: {
        amount: 1,
        from: "random",
      },
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    const chars = document.querySelectorAll(".char");
    chars.forEach((char) => {
      char.addEventListener("mouseenter", () => {
        gsap.to(char, {
          duration: 0.12,
          y: "0.10em",

          ease: "power2.out",
        });
      });
      char.addEventListener("mouseleave", () => {
        gsap.to(char, {
          duration: 0.4,
          y: 0,

          ease: "bounce.out",
        });
      });
    });
  }, []);

  return (
    <section className={styles.hero} ref={ref} id="hero">
      <h1 className={styles.hero__title} id="hero-text">
        YOUR WORK. YOUR KEYBOARD
      </h1>
    </section>
  );
};
