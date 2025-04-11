"use client";
import {
  Header,
  About,
  Hero,
  Gallery,
  Footer,
  Interactive,
  Canvas3d,
} from "@/shared/components";
import React from "react";

export default function Home() {
  React.useEffect(() => {
    let locomotiveScroll;
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll = new LocomotiveScroll();
    })();

    return () => {
      locomotiveScroll?.destroy();
    };
  }, []);

  return (
    <>
      <main data-scroll-container>
        <Header />
        <div className="container">
          <div style={{ position: "relative" }}>
            <Canvas3d />
            <Hero />
            <About />
            <Interactive />
          </div>

          <Gallery />
        </div>
        <Footer />
      </main>
    </>
  );
}
