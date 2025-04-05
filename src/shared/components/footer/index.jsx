import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const footerRef = React.useRef(null);
  const countTitel = 12;
  React.useEffect(() => {
    ScrollTrigger.create({
      trigger: footerRef.current,
      start: "top center",
      end: `bottom bottom`,
      onUpdate: (self) => {
        const wraps = document.querySelectorAll(`.${styles.footer__wrapText}`);
        console.log(wraps);
        wraps.forEach((titl, index) => {
          const offset = gsap.utils.mapRange(
            0,
            1,
            60, // Начальная позиция
            60 * (1 - Math.pow(index / (countTitel - 1), 2)) // Конечная позиция с учетом индекса
          )(self.progress);

          gsap.to(titl, {
            bottom: `${offset}%`,
            duration: 0.1,
            overwrite: true,
          });
        });
      },
    });
  }, []);

  return (
    <footer className={styles.footer} ref={footerRef} id="contact">
      {Array.from({ length: countTitel }).map((_, i) => {
        return (
          <div key={i} className={styles.footer__wrapText}>
            <h2 className={styles.footer__title}>it's work</h2>
          </div>
        );
      })}
    </footer>
  );
};
