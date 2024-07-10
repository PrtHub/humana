import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Founder = () => {
  const sectionRef = useRef();
  const imagesRef = useRef();
  const [showImages, setShowImages] = useState(false);

  useGSAP(() => {
    const tls = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
      },
    });

    tls.from(
      "h5",
      {
        y: 50,
        duration: 0.5,
        opacity: 0,
        stagger: 0.1,
      },
    );

    tls.from("#founders>article>span", {
      y: 50,
      duration: 0.5,
      opacity: 0,
      ease: "back",
      letterSpacing: "0.1em",
    });

    tls.from(".line7", {
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
      className="w-full h-full pb-20 mt-5 flex flex-col gap-5"
    >
      <section
        className="w-full h-full flex flex-col gap-10 text-white px-2 cursor-pointer"
        id="founders"
      >
        <article
          onClick={handleToggleImages}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          className="w-full flex items-start justify-between gap-10 font-normal text-xl"
        >
          <h5 className="whitespace-nowrap">Swiss Escape</h5>
          <h5 className="whitespace-nowrap">Hazique Memon</h5>
          <h5 className="whitespace-nowrap">Co-Founder</h5>
          <span className="max-w-xl text-white">
            Publications on Forbes, partnerships with world organizations, and
            opening of other branches - Their creativity is unique and they look
            at things from a whole new perspective. The result they provided us
            with was beyond our expectation.
          </span>
        </article>
        <div
          ref={imagesRef}
          className={`w-full flex items-center gap-5`}
          style={{ display: showImages ? "flex" : "none" }}
        >
          <figure className="w-[50%] h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1720456705365-01330c08fbf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              loading="lazy"
              className="w-full h-full object-cover rounded-md"
            />
          </figure>
          <figure className="w-[50%] h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1720247521734-1c655133c281?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              loading="lazy"
              className="w-full h-full object-cover rounded-md"
            />
          </figure>
        </div>
      </section>
      <div className="line7 w-full h-[0.5px] bg-[#6e695c] inline-block mt-16"></div>
    </section>
  );
};

export default Founder;
