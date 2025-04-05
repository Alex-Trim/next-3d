import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <span>ctrl</span>+<span>v</span>
      </div>
      <nav className={styles.header__navigation}>
        <ul className={`list-reset  ${styles.header__list}`}>
          <li className={styles.header__item}>
            <Link href="#about">
              <div className={styles.header__item_wraper}>
                <span>about</span>
                <span>about</span>
              </div>
            </Link>
          </li>
          <li className={styles.header__item}>
            <Link href="#gallery">
              <div className={styles.header__item_wraper}>
                <span>gallery</span>
                <span>gallery</span>
              </div>
            </Link>
          </li>
          <li className={styles.header__item}>
            <Link href="#contact">
              <div className={styles.header__item_wraper}>
                <span>contact</span>
                <span>contact</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`${styles.header__leng} ${styles.header__item}`}>
        <div className={styles.header__item_wraper}>
          <span>EN</span>
          <span>EN</span>
        </div>
      </div>
    </header>
  );
};
