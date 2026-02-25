'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image"
import { HeroImg } from "@/shared/ui/hero-img";

const HeroInfo = () => {
  const animalsImgRef = useRef<HTMLImageElement>(null);
  const oldWomanImgRef = useRef<HTMLImageElement>(null);
  const oldManImgRef = useRef<HTMLImageElement>(null);


   useEffect(() => {
    gsap.fromTo(
      animalsImgRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
    );

    gsap.fromTo(
      oldWomanImgRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 2, ease: "power3.out", delay: 0.3 },
    )

     gsap.fromTo(
      oldManImgRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 2, ease: "power3.out", delay: 0.5 },
    )
  }, []);

  return (
    <section
     className='relative h-screen overflow-hidden'
     style={{
      backgroundImage: "url('/background-img1.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
     }}>
      <HeroImg 
          alt="old-woman"
          w={700}
          h={700}
          img_url="/old-woman.png"
          ref={oldWomanImgRef}
          className="absolute top-0 left-0 z-0 translate-y-1/4 translate-x-1/4"
        />
         <HeroImg
          alt="old-man"
          w={600}
          h={600}
          img_url="/old-man.png"
          ref={oldManImgRef}
          className="absolute top-0 left-1/4 translate-x-1/2 z-0"
        />
        <HeroImg
          alt="animals"
          w={600}
          h={600}
          img_url="/animals.png"
          ref={animalsImgRef}
          className="absolute top-0 left-1/2 -translate-x-1/4 translate-y-1/4 z-10"
        />
    </section>
  )
}

export default HeroInfo