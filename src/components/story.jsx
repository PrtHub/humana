import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import {useRef } from "react";

gsap.registerPlugin(SplitText);

const Story = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const title = "We belive in a better world."

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%",
        end: "top 10%",
      },
    });

    tl.from("#line4", {
      x: "-100%",
      duration: 1,
    });

    tl.from("#story button", {
      y: 50,
      duration: 0.5,
      opacity: 0,
      ease: "power1.out",
    });

    const splitTitle = new SplitText(titleRef.current, { type: "chars" });
    const chars = splitTitle.chars;
    tl.from(chars, {
      x: 30,
      duration: 0.2,
      opacity: 0,
      stagger: 0.05,
      ease: "power1.out",
    });

    tl.from("#image", {
      x: 100,
      duration: 0.5,
      opacity: 0,
      stagger: 0.2,
    });
  });

  useGSAP(() => {
    gsap.to('#images-container', {
        overflowX: "scroll" ,
        ease: 'back',
        scrollBehavior: 'smooth'
    })
  })

  return (
    <section
      ref={sectionRef}
      className="w-full h-full py-20 flex flex-col gap-10 text-white"
    >
      <div
        id="line4"
        className="w-full h-[0.5px] bg-[#6e695c] inline-block"
      ></div>
      <section id="story" className="w-full space-y-5">
        <button className="px-8 py-1 rounded-full text-[#898373] border border-[#898373] text-lg ">
          Our Story &#8599;
        </button>
        <h1 ref={titleRef} className="w-full text-[84px] font-medium text-white">{title}</h1>
        <div id="images-container"
         className="w-full flex items-center gap-5 snap-x snap-mandatory hide-scrollbar"
         >
          <div id="image" className="w-[400px] h-[350px]  flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1717076525469-1bb36da6a23e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div id="image" className="w-[400px] h-[350px]  flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1720409945965-e9797fa27172?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div id="image" className="w-[400px] h-[350px]  flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1720409964755-54a8a86feafd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div id="image" className="w-[400px] h-[350px]  flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1720409922280-59ffe0d11d07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div id="image" className="w-[400px] h-[350px]  flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1720409905324-787331acadad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Story;
