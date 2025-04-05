"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import styles from "./Canvas3d.module.scss";

export const Canvas3d = () => {
  const splineRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const wrapperRef = React.useRef(null);

  const onLoad = React.useCallback((spline) => {
    splineRef.current = spline.findObjectByName("keybord");

    gsap.set(splineRef.current.scale, { x: 1, y: 1, z: 1 });
    gsap.set(splineRef.current.position, { x: 540, y: 300 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      })
      .to(splineRef.current.position, { x: -500, y: -200 }, 0)
      .to(splineRef.current.scale, { x: 1.3, y: 1.3, z: 1.3 }, 0);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#interactive",
          start: "top center",
          end: "bottom bottom",
          scrub: true,
        },
      })
      .to(splineRef.current.position, { x: 0, y: 200 }, 0)
      .to(splineRef.current.scale, { x: 1, y: 1, z: 1 }, 0);

    ScrollTrigger.create({
      trigger: "#interactive",
      start: "bottom bottom",
      end: "max",
      onEnter: () => {
        gsap.set(containerRef.current, {
          position: "absolute",
          bottom: 0,
        });
        gsap.set(wrapperRef.current, {
          pointerEvents: "auto",
        });
      },
      onLeaveBack: () => {
        gsap.set(containerRef.current, { position: "fixed", bottom: "auto" });
        gsap.set(wrapperRef.current, {
          pointerEvents: "none",
        });
      },
    });
  }, []);

  React.useEffect(() => {
    gsap.from(containerRef.current, {
      duration: 3,
      delay: 1,
      opacity: 0,
      stagger: 1,
      ease: "power2.out",
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.globalTimeline.clear();
    };
  }, []);
  return (
    <div className={styles.canvas_container} ref={containerRef}>
      <div className={styles.spline_wrapper} ref={wrapperRef}>
        <Spline
          scene="https://prod.spline.design/4CFojCpEjPZbuogV/scene.splinecode"
          onError={(error) => console.error("Spline Error:", error)}
          onLoad={onLoad}
        />
      </div>
    </div>
  );
};
