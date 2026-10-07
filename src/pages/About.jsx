import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/about.css";

function About() {
  const navigate = useNavigate();
  const [activeSignature, setActiveSignature] = useState(0);

  const signatures = [
    {
      number: "01",
      title: "Quiet Luxury",
      text: "We believe luxury does not need to announce itself. It lives in proportion, detail, restraint and the feeling a piece leaves behind.",
    },
    {
      number: "02",
      title: "Made to Stay",
      text: "Our pieces are designed beyond the moment — jewellery to become part of your everyday rituals, celebrations and stories.",
    },
    {
      number: "03",
      title: "Personal by Nature",
      text: "The most beautiful piece is the one that feels like yours. Every collection leaves room for individuality, expression and memory.",
    },
    {
      number: "04",
      title: "Detail, Always",
      text: "From silhouette to finishing touches, every element is considered. Because the smallest details often create the strongest impression.",
    },
  ];

  return (
    <main className="about-page">

      {/* =========================
          01 — THE MAISON
      ========================== */}
      <section className="about-hero">

        <div className="about-hero-top">
          <span>01 / THE MAISON</span>
          <span>EST. WITH INTENTION</span>
        </div>

        <div className="about-hero-content">

          <div className="about-hero-copy">
            <p className="about-eyebrow">
              JEWELLERY, WITH A POINT OF VIEW
            </p>

            <h1>
              More than
              <br />
              <em>something beautiful.</em>
            </h1>

            <p className="about-hero-description">
              We create jewellery for the moments that become memories —
              thoughtfully designed pieces made to feel personal, effortless
              and unmistakably yours.
            </p>

            <button
              className="about-scroll-button"
              onClick={() =>
                document
                  .getElementById("about-philosophy")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              DISCOVER OUR STORY
              <span>↓</span>
            </button>
          </div>

          <div className="about-hero-art">

            <div className="about-orbit orbit-large"></div>
            <div className="about-orbit orbit-small"></div>

            <div className="about-orbit-dot dot-one"></div>
            <div className="about-orbit-dot dot-two"></div>

            <div className="about-hero-jewel">
              <div className="jewel-inner">
                <span>✦</span>
              </div>
            </div>

            <div className="about-hero-number">
              01
            </div>

            <div className="about-hero-label">
              THE ART OF<br />
              PERSONAL LUXURY
            </div>

          </div>

        </div>

        <div className="about-hero-bottom">
          <span>CRAFTED WITH INTENTION</span>
          <span>SCROLL TO EXPLORE</span>
        </div>

      </section>


      {/* =========================
          02 — MORE THAN ORNAMENT
      ========================== */}
      <section
        className="about-philosophy"
        id="about-philosophy"
      >

        <div className="about-philosophy-left">
          <p className="about-section-number">
            02 / MORE THAN ORNAMENT
          </p>

          <div className="about-philosophy-mark">
            <span>✦</span>
          </div>

          <p className="about-side-note">
            JEWELLERY SHOULD FEEL<br />
            LIKE A PART OF YOU.
          </p>
        </div>

        <div className="about-philosophy-content">

          <p className="about-eyebrow">
            OUR PHILOSOPHY
          </p>

          <h2>
            We don't believe
            <br />
            jewellery is simply
            <br />
            <em>something you wear.</em>
          </h2>

          <div className="about-philosophy-line"></div>

          <p>
            A piece can mark a beginning. A celebration. A quiet promise.
            A version of yourself you never want to forget.
          </p>

          <p>
            That is why we approach every design with intention — creating
            pieces that feel considered today, while leaving enough room for
            your own story to unfold around them.
          </p>

        </div>

      </section>


      {/* =========================
          03 — THE DETAILS
      ========================== */}
      <section className="about-details">

        <div className="about-details-heading">

          <div>
            <p className="about-section-number">
              03 / THE DETAILS
            </p>

            <h2>
              Beauty lives
              <br />
              in the <em>details.</em>
            </h2>
          </div>

          <p>
            From the first line of a silhouette to the final finishing
            touch, every detail has a reason to be there.
          </p>

        </div>

        <div className="about-detail-grid">

          <div className="about-detail-card detail-card-large">
            <div className="detail-card-art">
              <div className="detail-ring"></div>
            </div>

            <div className="detail-card-copy">
              <span>01</span>
              <h3>Form</h3>
              <p>
                Clean silhouettes and considered proportions designed to
                feel timeless rather than temporary.
              </p>
            </div>
          </div>


          <div className="about-detail-card detail-card-small blush-card">
            <div className="detail-symbol">
              ✦
            </div>

            <div className="detail-card-copy">
              <span>02</span>
              <h3>Balance</h3>
              <p>
                A quiet conversation between statement and restraint.
              </p>
            </div>
          </div>


          <div className="about-detail-card detail-card-small burgundy-card">
            <div className="detail-symbol">
              ◇
            </div>

            <div className="detail-card-copy">
              <span>03</span>
              <h3>Character</h3>
              <p>
                Details that give each piece its own unmistakable presence.
              </p>
            </div>
          </div>


          <div className="about-detail-card detail-card-wide">

            <div className="detail-wide-visual">
              <div className="wide-orbit"></div>
              <div className="wide-orbit-inner"></div>
              <span>✦</span>
            </div>

            <div className="detail-wide-copy">
              <span>04</span>
              <h3>Feeling</h3>
              <p>
                Because the most memorable jewellery is not only seen.
                It is felt.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          04 — OUR SIGNATURE
      ========================== */}
      <section className="about-signature">

        <div className="about-signature-header">

          <p className="about-section-number">
            04 / OUR SIGNATURE
          </p>

          <h2>
            What makes a piece
            <br />
            <em>feel like yours?</em>
          </h2>

          <p>
            Four ideas sit quietly behind everything we create.
          </p>

        </div>


        <div className="about-signature-layout">

          <div className="signature-list">

            {signatures.map((item, index) => (
              <button
                key={item.number}
                className={`signature-item ${
                  activeSignature === index
                    ? "signature-active"
                    : ""
                }`}
                onClick={() => setActiveSignature(index)}
              >
                <span>{item.number}</span>
                <strong>{item.title}</strong>
                <i>
                  {activeSignature === index ? "−" : "+"}
                </i>
              </button>
            ))}

          </div>


          <div className="signature-display">

            <div className="signature-display-orbit"></div>

            <div className="signature-display-center">
              <span>
                {signatures[activeSignature].number}
              </span>

              <div className="signature-star">
                ✦
              </div>

              <small>
                THE MAISON
              </small>
            </div>

            <div className="signature-display-copy">
              <p>
                {signatures[activeSignature].text}
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          05 — THE LASTING PIECE
      ========================== */}
      <section className="about-final">

        <div className="about-final-orbit final-orbit-one"></div>
        <div className="about-final-orbit final-orbit-two"></div>

        <div className="about-final-content">

          <p className="about-section-number">
            05 / THE LASTING PIECE
          </p>

          <span className="about-final-star">
            ✦
          </span>

          <h2>
            Some pieces
            <br />
            catch your eye.
            <br />
            <em>Some become yours.</em>
          </h2>

          <p>
            Explore the collection and find the piece
            that feels unmistakably personal.
          </p>

          <button
            onClick={() => navigate("/shop-by")}
          >
            EXPLORE THE COLLECTION
            <span>↗</span>
          </button>

        </div>

        <div className="about-final-footer">
          <span>CRAFTED WITH INTENTION</span>
          <span>THE COLLECTION CONTINUES</span>
        </div>

      </section>

    </main>
  );
}

export default About;