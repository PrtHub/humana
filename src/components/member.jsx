import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Member = () => {
  const sectionRef = useRef();
  const imagesRef = useRef();
  const [showImages, setShowImages] = useState(false);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
      },
    });

    timeline.from(".line5", {
      x: "-100%",
      duration: 1,
    });

    timeline.from(
      "h4",
      {
        y: 50,
        duration: 0.5,
        opacity: 0,
        stagger: 0.1,
      },
      "-=1"
    );

    timeline.from(".text", {
      y: 50,
      duration: 0.5,
      opacity: 0,
      ease: "back",
      letterSpacing: "0.1em",
    });

    timeline.from(".line6", {
      x: "-100%",
      duration: 1,
    });
  });

  const { contextSafe } = useGSAP();

  const handleToggleImages = contextSafe(() => {
    if (showImages) {
      gsap.to(imagesRef.current, {
        y: 50,
        duration: 0.5,
        opacity: 0,
        ease: "back.out",
        onComplete: () => setShowImages(false),
      });
    } else {
      setShowImages(true);
      gsap.fromTo(
        imagesRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          duration: 0.5,
          opacity: 1,
          ease: "back.out",
        }
      );
    }
  }, [showImages]);

  const handleMouseOver = contextSafe(() => {
    if (!showImages) {
      gsap.fromTo(
        imagesRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          duration: 0.5,
          opacity: 1,
          ease: "back.out",
        }
      );
    }
  }, [showImages]);

  const handleMouseLeave = contextSafe(() => {
    if (!showImages) {
      gsap.to(imagesRef.current, {
        y: 50,
        duration: 0.5,
        opacity: 0,
        ease: "back.out",
      });
    }
  }, [showImages]);

  return (
    <section
      ref={sectionRef}
      className="w-full h-full pt-20 flex flex-col gap-5"
    >
      <div className="line5 w-full h-[0.5px] bg-[#6e695c] inline-block"></div>
      <section
        className="w-full h-full flex flex-col gap-10 text-white px-2 cursor-pointer"
        id="members"
      >
        <article
          onClick={handleToggleImages}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          className="w-full flex items-start justify-between gap-10 font-normal text-xl"
        >
          <h4 className="whitespace-nowrap">Tzol’Skin</h4>
          <h4 className="whitespace-nowrap">Yasmina Harrison</h4>
          <h4 className="whitespace-nowrap">Founder & CEO</h4>
          <span className="max-w-xl text-white text">
            Publications on Vogue, Vanity Fair and Condé Nast - “(...) I have
            been contacted by major publications such as Vogue and Vanity Fair
            because of my aesthetic, brand presentation, imagery, and brand
            story. I could have not done it alone.”
          </span>
        </article>
        <div
          ref={imagesRef}
          className={`w-full flex items-center gap-5`}
          style={{ display: showImages ? 'flex' : 'none' }}
        >
          <figure className="w-[50%] h-[400px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1718503746396-2e9e30e802d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full rounded-md"
            />
          </figure>
          <figure className="w-[50%] h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1720265312567-001d6c3f1384?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDd8fHxlbnwwfHx8fHw%3D"
              alt=""
              className="w-full h-full rounded-md"
            />
          </figure>
        </div>
      </section>
      <div className="line6 w-full h-[0.5px] bg-[#6e695c] inline-block mt-16"></div>
    </section>
  );
};

export default Member;
