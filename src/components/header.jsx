import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { getCurrentTime } from "../utils/format-time";
import { getCurrentDate } from "../utils/format-date";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef();

  const [currentDateTime, setCurrentDateTime] = useState({
    time: getCurrentTime(),
    date: getCurrentDate(),
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime({
        time: getCurrentTime(),
        date: getCurrentDate(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from("#svg", {
        y: 100,
        duration: 0.6,
        opacity: 0,
        delay: 0.5,
        rotate: 2,
        ease: 'back'
      });

      tl.from("article p", {
        y: 50,
        duration: 0.3,
        opacity: 0,
        stagger: 0.1,
        letterSpacing: "0.1em",
      });
    },
    { scope: headerRef.current}
  );

  const { contextSafe } = useGSAP();
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    { text: "Purpose", hoverText: "Mission" },
    { text: "Work", hoverText: "Projects" },
    { text: "About", hoverText: "Info" },
    { text: "Blog", hoverText: "Posts" },
    { text: "Shop", hoverText: "Store" },
    { text: "Contact", hoverText: "Talk" },
  ];

  const handleMouseEnter = contextSafe((index) => {
    setHoveredLink(index);

    gsap.to(`.navlink-${index}`, { duration: 0.4, yPercent: -50, opacity: 0, ease: "power2.in" });
    gsap.set(`.navlink-${index}`, { yPercent: 50,  opacity: 0, });
    gsap.to(`.navlink-${index}`, { duration: 0.4, yPercent: 0,  opacity: 1, });
  });

  const handleMouseLeave = contextSafe((index) => {
    setHoveredLink(null);
    gsap.to(`.navlink-${index}`, { duration: 0.4, yPercent: 50,  opacity: 0, ease: "power2.in" });
    gsap.set(`.navlink-${index}`, { yPercent: -50,  opacity: 0, });
    gsap.to(`.navlink-${index}`, { duration: 0.4, yPercent: 0,  opacity: 1, });
  });

  useGSAP(() => {
    gsap.from("nav li", {
      y: -20,
      opacity: 0,
      duration: 0.4,
      delay: 0.6,
      stagger: 0.1,
      zIndex: 50,
      backgroundColor: 'black'
    });
  });

  useGSAP(() => {
    gsap.set("nav span", { opacity: 0 });

    const showAnim = gsap
      .from("nav", { y: -60, opacity: 1, paused: true, duration: 0.4, backgroundColor: "black" })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  });

  return (
    <section className="w-full h-full flex flex-col items-center justify-center text-white">
      <nav className="w-full bg-black flex fixed -top-3 items-center justify-between gap-x-10 text-xl pr-10 overflow-hidden z-30">
        <span id="title" className="flex flex-col">
          <h1 id="humana" className="text-4xl font-normal overflow-hidden">
            Humana
          </h1>
          <h1 id="studio" className="text-4xl font-normal overflow-hidden">
            Studio
          </h1>
        </span>
        <div id="navlinks" className="w-full flex items-center justify-end gap-10 text-xl">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`inline-block cursor-pointer w-20 h-fit whitespace-nowrap navlink-${index}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {hoveredLink === index ? link.hoverText : link.text}
            </li>
          ))}
        </div>
      </nav>
      <header
        ref={headerRef}
        className="w-full flex flex-col items-start justify-start gap-10 px-1 z-20"
      >
        <div className="w-screen h-[384px] overflow-hidden">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1889 384"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
            data-v-661b3f1c=""
            id="svg"
          >
            <path
              d="M257.538 0.076895V165.403H35.5438V0.076895H0.710879V377H35.5438V198.156H257.538V377H292.371V0.076895H257.538ZM548.886 377H581.12V97.297H548.886V254.825C548.886 314.093 511.454 354.645 467.263 354.645C412.674 354.645 400.197 319.292 400.197 266.782V97.297H367.963V275.621C367.963 344.767 394.478 383.759 458.945 383.759C507.295 383.759 534.849 358.284 548.886 331.769V377ZM691.309 221.552C691.309 162.284 725.102 121.732 770.853 121.732C824.921 121.732 835.839 157.085 835.839 209.594V377H868.073V221.552C868.073 162.284 901.866 121.732 947.616 121.732C1001.69 121.732 1012.6 157.085 1012.6 209.594V377H1044.84V200.756C1044.84 131.61 1019.88 92.618 955.935 92.618C910.184 92.618 882.63 112.894 861.314 148.247C849.356 112.374 824.402 92.618 779.171 92.618C729.261 92.618 705.346 118.093 691.309 144.607V97.297H659.075V377H691.309V221.552ZM1128.53 306.814C1128.53 263.663 1177.4 248.066 1291.25 235.589V249.106C1291.25 328.13 1244.46 355.164 1192.47 355.164C1155.04 355.164 1128.53 336.448 1128.53 306.814ZM1291.77 377H1324.53C1322.97 346.326 1321.41 319.292 1321.41 287.578C1321.41 265.223 1321.93 240.268 1321.93 201.276C1321.93 118.093 1278.78 91.0583 1213.79 91.0583C1149.84 91.0583 1107.21 126.931 1099.41 182.56H1133.21C1135.81 145.647 1163.88 119.652 1211.71 119.652C1251.74 119.652 1289.69 133.17 1289.69 197.117V206.995C1155.04 221.032 1092.65 243.387 1092.65 307.334C1092.65 353.605 1132.69 383.759 1185.2 383.759C1237.19 383.759 1272.02 364.003 1290.21 334.369L1291.77 377ZM1421.9 97.297H1389.67V377H1421.9V221.552C1421.9 162.284 1458.29 121.732 1506.64 121.732C1562.79 121.732 1576.83 157.085 1576.83 209.594V377H1609.06V200.756C1609.06 131.61 1581.51 92.618 1514.96 92.618C1462.45 92.618 1435.94 118.093 1421.9 144.607V97.297ZM1692.59 306.814C1692.59 263.663 1741.46 248.066 1855.32 235.589V249.106C1855.32 328.13 1808.53 355.164 1756.54 355.164C1719.11 355.164 1692.59 336.448 1692.59 306.814ZM1855.84 377H1888.59C1887.03 346.326 1885.47 319.292 1885.47 287.578C1885.47 265.223 1885.99 240.268 1885.99 201.276C1885.99 118.093 1842.84 91.0583 1777.85 91.0583C1713.91 91.0583 1671.28 126.931 1663.48 182.56H1697.27C1699.87 145.647 1727.94 119.652 1775.77 119.652C1815.81 119.652 1853.76 133.17 1853.76 197.117V206.995C1719.11 221.032 1656.72 243.387 1656.72 307.334C1656.72 353.605 1696.75 383.759 1749.26 383.759C1801.25 383.759 1836.08 364.003 1854.28 334.369L1855.84 377Z"
              data-v-661b3f1c=""
            ></path>
          </svg>
        </div>
        <article className="w-full h-fit flex items-start justify-between">
          <p className="text-xl">
            Kolkata, India <br />
            Local Time → {currentDateTime.time}
          </p>
          <p className="text-xl">
            Monday <br />
            {currentDateTime.date}
          </p>

          <p className="max-w-2xl text-4xl leading-normal">
            We design disruptive brands for organizations that aspire to have a
            positive social and environmental impact.
          </p>
        </article>
      </header>
    </section>
  );
};

export default Header;
