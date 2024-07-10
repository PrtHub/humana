import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Vision = () => {
  const sectionRef = useRef();
//   const buttonRef = useRef();

//   const { contextSafe } = useGSAP();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%",
        end: "top 10%",
      },
    });

    tl.from("#line3", {
      x: "-100%",
      duration: 1,
    });

    tl.from("#vision button", {
      y: 50,
      duration: 0.5,
      opacity: 0,
      ease: "power1.out",
    });

    tl.from("#vision>p", {
      y: 50,
      duration: 0.5,
      opacity: 0,
      stagger: 0.1,
      ease: "power1.out",
      letterSpacing: "0.1em",
    });
  }, { scope: sectionRef.current });

  return (
    <section
      ref={sectionRef}
      className="text-white w-full h-full flex flex-col gap-10 py-20 z-50"
    >
      <div
        id="line3"
        className="w-full h-[0.5px] bg-[#6e695c] inline-block"
      ></div>
      <section
        id="vision"
        className="flex w-full h-full flex-col gap-5 items-start justify-start px-2"
      >
       
          <button
            className="px-8 py-1 rounded-full text-[#898373] border border-[#898373] text-lg "
          >
            Our Vision &#8599;
          </button>
      
        <p className="text-[#F3F3F3] text-4xl leading-snug font-normal">
          We’ve worked extensively in terms of geography and sector, developing
          a variety of work — products, services, and experiences — that has
          taught us that a well-defined visual strategy is key to bring
          visibility, credibility, and funds to any organization. Starting in
          2021, we decided to plant a tree for each client that we work with.
        </p>
      </section>
    </section>
  );
};

export default Vision;
