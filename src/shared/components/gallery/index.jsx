"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Gallery.module.scss";

const imgUrl = [
  {
    titel: "Kubota",
    description: "manifacturing & industrial",
    url: "/image/Kubota-Homepage-1.webp",
  },
  {
    titel: "Spafax",
    description: "inflight & media",
    url: "/image/grd_nr_2.webp",
  },
  {
    titel: "Ether capital",
    description: "Fintech",
    url: "/image/home_eth.webp",
  },
];

export const Gallery = () => {
  const sectionRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const cardsRef = React.useRef([]);

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current;
    const totalDuration = cards.length * 100; // Общая продолжительность анимации
    let totalHeight = cards.reduce((acc, card) => acc + card.offsetHeight, 0);

    // Пин секции
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${totalDuration}%`,
      pin: true,
      scrub: 1,
      onRefresh: () => {
        totalHeight = cards.reduce((acc, card) => acc + card.offsetHeight, 0);
      },
      onUpdate: (self) => {
        gsap.set(containerRef.current, {
          height: cards.reduce((acc, card) => acc + card.offsetHeight, 0),
        });
      },
    });

    // Создаем timeline для последовательной анимации
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalDuration}%`,
        scrub: true,
        onUpdate: (self) => {
          gsap.set(containerRef.current, {
            height: cards.reduce((acc, card) => acc + card.offsetHeight, 0),
          });
        },
      },
    });

    // Анимация для каждой карточки
    cards.forEach((card, index) => {
      const wrap = card.querySelector(`.${styles.card__wrap}`);
      const startHeight = wrap.offsetHeight;
      const targetHeight = startHeight * 0.25;

      // Добавляем анимацию в timeline с смещением
      tl.to(
        wrap,
        {
          height: targetHeight,
          duration: 1,
          onUpdate: () => {
            ScrollTrigger.refresh();
          },
        },
        index * 1
      ); // Задержка между анимациями
    });

    // Обновление высоты контейнера
    gsap.set(containerRef.current, {
      height: () => cards.reduce((acc, card) => acc + card.offsetHeight, 0),
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className={styles.gallery} ref={sectionRef} id="gallery">
      <div ref={containerRef}>
        {imgUrl.map((obj, i) => (
          <article
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`${styles.gallery__item} ${styles.card}`}
          >
            <div className={styles.card__left}>
              <h3 className={styles.card__title}>{obj.titel}</h3>
              <p className={styles.card__description}>{obj.description}</p>
            </div>
            <div className={styles.card_right}>
              <div className={styles.card__wrap}>
                <Image
                  className={styles.card__img}
                  fill
                  src={obj.url}
                  alt="Image"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
