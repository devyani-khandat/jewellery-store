import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../styles/popJourney.css";

const STEPS = [
  {
    number: "01",
    title: "CHOOSE",
    heading: (
      <>
        Find the piece
        <br />
        you love.
      </>
    ),
    description:
      "Start by discovering the jewellery you want to make yours.",
  },
  {
    number: "02",
    title: "PLAN",
    heading: (
      <>
        Create your
        <br />
        plan.
      </>
    ),
    description:
      "Decide how you want to work towards your chosen piece.",
  },
  {
    number: "03",
    title: "BUILD",
    heading: (
      <>
        Stay consistent.
        <br />
        Stay excited.
      </>
    ),
    description:
      "Watch your plan come together one step at a time.",
  },
  {
    number: "04",
    title: "OWN",
    heading: (
      <>
        Bring your
        <br />
        piece home.
      </>
    ),
    description:
      "The wait becomes worth it when the piece finally becomes yours.",
  },
];

function PopJourney() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 65%"],
  });

  /*
    The SVG path is 0 → 1 as the user scrolls
    through the section.
  */
  const pathLength = useTransform(
    scrollYProgress,
    [0.05, 0.85],
    [0, 1]
  );

  /*
    Small travelling point that follows the path.
  */
  const travelerX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  );

  return (
    <section
      ref={sectionRef}
      className="pop-animated-journey"
      id="pop-how"
    >

      {/* HEADER */}

      <div className="pop-journey-intro">

        <div className="pop-journey-intro-left">
          <span>03</span>
          <p>THE JOURNEY</p>
        </div>

        <div className="pop-journey-title">

          <p>HOW POP WORKS</p>

          <h2>
            From wanting it
            <br />
            to <em>owning it.</em>
          </h2>

          <span className="pop-journey-caption">
            ONE STEP AT A TIME
          </span>

        </div>

      </div>


      {/* ANIMATED JOURNEY */}

      <div className="pop-journey-stage">

        {/* SVG PATH */}

        <svg
          className="pop-journey-svg"
          viewBox="0 0 1200 620"
          preserveAspectRatio="none"
          aria-hidden="true"
        >

          {/* Very subtle background path */}

          <path
            className="pop-journey-path-base"
            d="
              M 110 120
              C 230 120, 270 120, 340 280
              C 400 420, 520 470, 600 315
              C 675 170, 770 135, 850 275
              C 925 405, 1000 475, 1090 430
            "
          />

          {/* Animated path */}

          <motion.path
            className="pop-journey-path-active"
            d="
              M 110 120
              C 230 120, 270 120, 340 280
              C 400 420, 520 470, 600 315
              C 675 170, 770 135, 850 275
              C 925 405, 1000 475, 1090 430
            "
            style={{
              pathLength,
            }}
          />

        </svg>


        {/* TRAVELLING DOT */}

        <motion.div
          className="pop-journey-traveller"
          style={{
            scale: travelerX,
            opacity: useTransform(
              scrollYProgress,
              [0.05, 0.15, 0.9, 1],
              [0, 1, 1, 0]
            ),
          }}
        />


        {/* STEP 01 */}

        <JourneyStep
          step={STEPS[0]}
          className="pop-step-position-1"
          progress={scrollYProgress}
          range={[0.08, 0.25]}
        />


        {/* STEP 02 */}

        <JourneyStep
          step={STEPS[1]}
          className="pop-step-position-2"
          progress={scrollYProgress}
          range={[0.28, 0.48]}
        />


        {/* STEP 03 */}

        <JourneyStep
          step={STEPS[2]}
          className="pop-step-position-3"
          progress={scrollYProgress}
          range={[0.5, 0.7]}
        />


        {/* STEP 04 */}

        <JourneyStep
          step={STEPS[3]}
          className="pop-step-position-4"
          progress={scrollYProgress}
          range={[0.72, 0.94]}
          final
        />

      </div>


      {/* BOTTOM STATEMENT */}

      <motion.div
        className="pop-journey-bottom"
        style={{
          opacity: useTransform(
            scrollYProgress,
            [0.72, 0.9],
            [0, 1]
          ),
          y: useTransform(
            scrollYProgress,
            [0.72, 0.9],
            [30, 0]
          ),
        }}
      >
        <span>THE POP JOURNEY</span>

        <p>
          A little planning can make the final
          moment feel even more special.
        </p>

        <span>04 / 04</span>
      </motion.div>

    </section>
  );
}


/* =========================================================
   INDIVIDUAL STEP
========================================================= */

function JourneyStep({
  step,
  className,
  progress,
  range,
  final = false,
}) {
  const [start] = range;

  const opacity = useTransform(
    progress,
    [start - 0.06, start, start + 0.06],
    [0.35, 1, 1]
  );

  const y = useTransform(
    progress,
    [start - 0.05, start],
    [18, 0]
  );

  const scale = useTransform(
    progress,
    [start - 0.04, start, start + 0.08],
    [0.88, 1, 1]
  );

  const ringScale = useTransform(
    progress,
    [start, start + 0.08],
    [0.65, 1.35]
  );

  const ringOpacity = useTransform(
    progress,
    [start, start + 0.08],
    [0.5, 0]
  );

  return (
    <motion.article
      className={`pop-journey-step-new ${className}`}
      style={{
        opacity,
        y,
      }}
    >

      <div className="pop-journey-point">

        <motion.div
          className="pop-journey-ring"
          style={{
            scale: ringScale,
            opacity: ringOpacity,
          }}
        />

        <motion.div
          className={`pop-journey-dot ${
            final ? "pop-journey-dot-final" : ""
          }`}
          style={{
            scale,
          }}
        >
          {final && <span>✦</span>}
        </motion.div>

      </div>


      <div className="pop-step-new-number">
        {step.number}
      </div>

      <div className="pop-step-new-title">
        {step.title}
      </div>

      <h3>
        {step.heading}
      </h3>

      <p>
        {step.description}
      </p>

    </motion.article>
  );
}

export default PopJourney;