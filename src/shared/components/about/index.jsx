"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/shared/utils/Split3.min";

import styles from "./About.module.scss";

export const About = () => {
  const ref = React.useRef(null);
  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const split = new SplitText("#about-description", {
      type: "lines",
      linesClass: "overflowHidden",
    });

    gsap.from([ref.current, ...split.lines], {
      duration: 0.8,
      yPercent: 130,
      opacity: 0,
      stagger: 0.3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });
  }, []);
  return (
    <section className={styles.about} id="about">
      <div className={styles.about__info}>
        <h2 className={styles.about__title} ref={ref}>
          Make your choice
        </h2>
        <p className={styles.about__description} id="about-description">
          Aliquid animi perspiciatis ducimus, ipsum minima sed. Earum amet
          reiciendis itaque est non. Ipsum tempora nam placeat ex laboriosam
          nisi impedit amet!
        </p>
      </div>
    </section>
  );
};
