import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const DifferentWorks = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%",
        end: "top 10%",
      },
    });

    tl.from("#line1", {
      x: "-100%",
      duration: 1,
    });

    tl.from(
      "article>h3",
      {
        y: -50,
        duration: 1,
        delay: 0.3,
        opacity: 0,
      },
      "-=1"
    );

    tl.from(
      "#diffworks>h3",
      {
        y: -50,
        duration: 1,
        delay: 0.3,
        opacity: 0,
        stagger: 0.1
      },
      "-=1"
    );
    
  });
  return (
    <section ref={sectionRef} className="w-full h-full py-40 z-20">
      <div
        id="line1"
        className="w-full h-[0.5px] bg-[#6e695c] inline-block"
      ></div>
      <article className="w-full flex items-start justify-between gap-24 text-white mt-10">
        <h3 className="w-fit whitespace-nowrap text-[#676357] text-xl overflow-hidden">
          Working worldwide for &rarr;
        </h3>
        <div id="diffworks" className="w-[70%] grid grid-cols-4 gap-5 text-[22px]">
          <h3>Arts & Culture</h3>
          <h3>Civic & Public</h3>
          <h3>Design & Architecture</h3>
          <h3>Fashion & Beauty</h3>
          <h3>Industrial & Agriculture</h3>
          <h3>Not-For-Profit</h3>
          <h3>Professional Services</h3>
        </div>
      </article>
    </section>
  );
};

export default DifferentWorks;
