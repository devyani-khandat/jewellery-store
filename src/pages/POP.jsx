import { useNavigate } from "react-router-dom";
import "../styles/pop.css";
import PopJourney from "../components/PopJourney";

function POP() {
  const navigate = useNavigate();

  return (
    <main className="pop-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="pop-new-hero">

        <div className="pop-hero-inner">

          <div className="pop-hero-top">
            <span>THE POP EXPERIENCE</span>
            <span>01 / 07</span>
          </div>

          <div className="pop-hero-main">

            <div className="pop-hero-word">
              POP
            </div>

            <div className="pop-hero-copy">

              <p className="pop-overline">
                PLAN. OWN. PURCHASE.
              </p>

              <h1>
                A more
                <br />
                <em>intentional</em>
                <br />
                way to buy.
              </h1>

              <p>
                POP gives you a simple way to plan towards
                the jewellery you want, one step at a time.
              </p>

              <button
                className="pop-primary-button"
                onClick={() =>
                  document
                    .getElementById("pop-how")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                HOW POP WORKS
                <span>↓</span>
              </button>

            </div>

          </div>

          <div className="pop-hero-bottom">

            <span> PURCHASE WITH PURPOSE </span>

            <div className="pop-line"></div>

            <span>SCROLL TO EXPLORE</span>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT IS POP
      ===================================================== */}

      <section className="pop-introduction">

        <div className="pop-section-index">
          <span>02</span>
          <p>THE IDEA</p>
        </div>

        <div className="pop-introduction-content">

          <p className="pop-small-heading">
            WHAT IS POP?
          </p>

          <h2>
            Your dream piece
            <br />
            shouldn't feel
            <br />
            <em>out of reach.</em>
          </h2>

          <div className="pop-introduction-bottom">

            <p>
              POP is designed around one simple idea:
              make planning your jewellery purchase feel
              considered, comfortable and rewarding.
            </p>

            <span>
              A LITTLE PLANNING.
              <br />
              SOMETHING BEAUTIFUL.
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          POP JOURNEY
      ===================================================== */}

    <PopJourney />


      {/* =====================================================
          WHY POP
      ===================================================== */}

      <section className="pop-why">

        <div className="pop-why-heading">

          <div className="pop-section-index pop-light-index">
            <span>04</span>
            <p>WHY POP</p>
          </div>

          <h2>
            Jewellery,
            <br />
            <em>on your terms.</em>
          </h2>

        </div>


        <div className="pop-why-grid">

          <article className="pop-why-card">

            <span>01</span>

            <div className="pop-card-icon">
              ◇
            </div>

            <h3>
              Plan ahead
            </h3>

            <p>
              Give yourself the space to choose
              the piece you really want.
            </p>

          </article>


          <article className="pop-why-card">

            <span>02</span>

            <div className="pop-card-icon">
              ○
            </div>

            <h3>
              Make it intentional
            </h3>

            <p>
              Turn an eventual purchase into
              something you can look forward to.
            </p>

          </article>


          <article className="pop-why-card">

            <span>03</span>

            <div className="pop-card-icon">
              ✦
            </div>

            <h3>
              Make the moment matter
            </h3>

            <p>
              When the time comes, your jewellery
              means more because you planned for it.
            </p>

          </article>

        </div>

      </section>

    {/* =====================================================
    POP PHILOSOPHY
===================================================== */}

<section className="pop-philosophy">

  <div className="pop-philosophy-orbit orbit-one"></div>
  <div className="pop-philosophy-orbit orbit-two"></div>
  <div className="pop-philosophy-orbit orbit-three"></div>

  <div className="pop-philosophy-content">

    <p className="pop-philosophy-label">
      THE IDEA IS SIMPLE.
    </p>

    <h2>
      Choose what
      <br />
      you <em>love.</em>
    </h2>

    <div className="pop-philosophy-line">
      <span></span>
    </div>

    <h2>
      Plan
      <br />
      <em>for it.</em>
    </h2>

    <div className="pop-philosophy-line">
      <span></span>
    </div>

    <h2>
      Make it
      <br />
      <em>yours.</em>
    </h2>

    <p className="pop-philosophy-caption">
      GOOD THINGS ARE WORTH
      <br />
      LOOKING FORWARD TO.
    </p>

  </div>

</section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="pop-final">

        <div className="pop-final-top">
          <span>06 / BEGIN</span>
          <span>POP — PURCHASE WITH PURPOSE</span>
        </div>

        <div className="pop-final-content">

          <p>
            YOUR NEXT PIECE
          </p>

          <h2>
            Start with a plan.
            <br />
            End with something
            <br />
            <em>beautiful.</em>
          </h2>

          <button
            onClick={() => navigate("/shop-by")}
            className="pop-final-button"
          >
            EXPLORE THE COLLECTION
            <span>→</span>
          </button>

        </div>

      </section>

    </main>
  );
}

export default POP;