import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { AllWorks, DifferentWorks, Footer, Founder, Header, Member, Story, Vision } from "./components";

const App = () => {
  const cursorRef = useRef();

  const { contextSafe } = useGSAP();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      smooth: true,
      
    });

    const handleMouseMove = contextSafe((e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    });

    window.addEventListener("mousemove", handleMouseMove);

    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;

    gsap.set(cursorRef.current, { x: initialX, y: initialY });

    const navLinks = document.querySelectorAll('nav>#navlinks>li, #diffworks>h3, #works>div, #story, #members, #founders', );

    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, {
        backgroundColor: "rgb(253 224 71)",
        width: 45,
        height: 45,
        duration: 0.3,
        filter: "blur(4px)",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, {
        backgroundColor: "rgb(253 224 71)",
        width: 16,
        height: 16,
        borderColor: "rgb(253 224 71)",
        duration: 0.3,
        filter: "",
      });

    };

    navLinks.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      navLinks.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
      scroll.destroy();
    };
  }, [cursorRef, contextSafe]);

  return (
    <>
      <div
        ref={cursorRef}
        className="w-4 h-4 fixed bg-yellow-300 border border-yellow-400 rounded-full flex items-center justify-center z-40"
      ></div>

      <main >
        <Header/>
        <DifferentWorks/>
        <AllWorks/>
        <Vision/>
        <Member/>
        <Founder/>
        <Story/>
        <Footer/>
      </main>
    </>
  );
};

export default App;
