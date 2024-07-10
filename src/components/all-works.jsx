import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const allworks = [
  {
    image: "flower.auto",
    title: "James Flower",
  },
  {
    image: "room.auto",
    title: "Workroom",
  },
  {
    image: "hm.auto",
    title: "Herdede da Misericordia",
  },
  {
    image: "heeria.auto",
    title: "Heeria",
  },
  {
    image: "rocket.auto",
    title: "Rocket-Science",
  },
  {
    image: "city.auto",
    title: "City leaks",
  },
];

const AllWorks = () => {
  const sectionRef = useRef();
  const workRef = useRef();

  useGSAP(() => {
    const works = gsap.utils.toArray("#works div");

    gsap.to(works, {
      xPercent: -77 * (works.length - 2),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        start: "top 0%",
        end: "top -100%",
        // markers: true,
      },
    });
  });

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%",
        end: "top 10%",
      },
    });

    tl.from("#line2", {
        x: "-100%",
        duration: 1
    })

    tl.from("#works div", {
        x: 100,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2
    })
  });

  return (
    <section
      ref={sectionRef}
      className="w-full h-full text-white pb-20 flex flex-col gap-10 z-0"
    >
      <div
        id="line2"
        className="w-full h-[0.5px] bg-[#6e695c] inline-block"
      ></div>
      <section ref={workRef} id="works" className="flex gap-5">
        {allworks.map((work) => (
          <div
            key={work.title}
            className="w-[400px] h-[350px] flex-shrink-0 flex flex-col gap-2 items-start z-0"
          >
            <h2 className="text-xl">{work.title} &#8599;</h2>
            <img
              src={work.image}
              alt={work.title}
              loading="lazy"
              
              className="w-full h-full object-cover rounded-md z-0"
            />
          </div>
        ))}
      </section>
    </section>
  );
};

export default AllWorks;
