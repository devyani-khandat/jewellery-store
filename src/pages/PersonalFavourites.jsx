import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/personalFavourites.css";

import elanRing from "../assets/products/elan-ring.jpg.png";
import roseHalo from "../assets/products/rose-halo-earrings.jpg.png";
import solenne from "../assets/products/solenne-necklace.jpg.png";
import celeste from "../assets/products/celeste-pendant.jpg.png";
import aureliaTennis from "../assets/products/Aurelia Tennis Bracelet.png";
import aureliaBracelet from "../assets/products/aurelia-bracelet.jpg.png";

const FAVOURITES = [
  {
    id: 1,
    name: "Elan Ring",
    category: "RINGS",
    price: "₹18,500",
    image: elanRing,
  },
  {
    id: 2,
    name: "Rose Halo Earrings",
    category: "EARRINGS",
    price: "₹24,900",
    image: roseHalo,
  },
  {
    id: 3,
    name: "Solenne Necklace",
    category: "NECKLACES",
    price: "₹42,000",
    image: solenne,
  },
  {
    id: 4,
    name: "Celeste Pendant",
    category: "PENDANTS",
    price: "₹16,800",
    image: celeste,
  },
  {
    id: 5,
    name: "Aurelia Tennis Bracelet",
    category: "BRACELETS",
    price: "₹36,500",
    image: aureliaTennis,
  },
  {
    id: 6,
    name: "Aurelia Bracelet",
    category: "BRACELETS",
    price: "₹31,800",
    image: aureliaBracelet,
  },
];

function PersonalFavourites() {
  const navigate = useNavigate();

  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (id) => {
    setFavourites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const favouriteProducts = FAVOURITES.filter((product) =>
    favourites.includes(product.id)
  );

  return (
    <main className="personal-favourites-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="pf-hero">

        <div className="pf-hero-top">
          <span>THE PERSONAL EDIT</span>
          <span>01 / 05</span>
        </div>

        <div className="pf-hero-content">

          <div className="pf-hero-copy">

            <div className="pf-hero-small">
              YOUR JEWELLERY.
              <br />
              YOUR EDIT.
            </div>

            <h1>
              Personal
              <br />
              <em>Favourites.</em>
            </h1>

            <p>
              Keep the pieces that caught your eye close.
              Build a collection that feels entirely your own.
            </p>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("pf-edit")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              EXPLORE YOUR EDIT
              <span>↓</span>
            </button>

          </div>

          {/* EDITORIAL JEWELLERY COLLAGE */}

          <div className="pf-hero-art">

            <div className="pf-art-orbit pf-art-orbit-one"></div>
            <div className="pf-art-orbit pf-art-orbit-two"></div>

            <div className="pf-art-card pf-art-card-one">
              <img
                src={elanRing}
                alt="Elan Ring"
              />
            </div>

            <div className="pf-art-card pf-art-card-two">
              <img
                src={roseHalo}
                alt="Rose Halo Earrings"
              />
            </div>

            <div className="pf-art-card pf-art-card-three">
              <img
                src={solenne}
                alt="Solenne Necklace"
              />
            </div>

            <div className="pf-art-heart">♡</div>

            <span className="pf-art-number">01</span>

            <span className="pf-art-label">
              PIECES WORTH
              <br />
              KEEPING CLOSE
            </span>

          </div>

        </div>

        <div className="pf-hero-bottom">
          <span>KEEP WHAT SPEAKS TO YOU</span>

          <div></div>

          <span>SCROLL TO EXPLORE</span>
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="pf-intro">

        <div className="pf-section-label">
          <span>02</span>
          <p>YOUR EDIT</p>
        </div>

        <div className="pf-intro-content">

          {/* VISUAL SIDE */}

          <div className="pf-intro-visual">

            <div className="pf-intro-orbit"></div>

            <div className="pf-intro-orbit pf-intro-orbit-inner"></div>

            <div className="pf-intro-heart">
              ♡
            </div>

            <div className="pf-mini-product pf-mini-one">
              <img
                src={celeste}
                alt="Celeste Pendant"
              />
            </div>

            <div className="pf-mini-product pf-mini-two">
              <img
                src={aureliaBracelet}
                alt="Aurelia Bracelet"
              />
            </div>

            <div className="pf-mini-product pf-mini-three">
              <img
                src={aureliaTennis}
                alt="Aurelia Tennis Bracelet"
              />
            </div>

            <div className="pf-intro-connector"></div>

            <span className="pf-intro-visual-label">
              CURATED
              <br />
              BY YOU
            </span>

          </div>


          {/* TEXT SIDE */}

          <div className="pf-intro-copy-wrap">

            <p className="pf-overline">
              PERSONAL, BY DESIGN
            </p>

            <h2>
              Some pieces
              <br />
              simply stay
              <br />
              <em>with you.</em>
            </h2>

            <p className="pf-intro-copy">
              Your favourites are the pieces you want
              to remember, revisit and come back to.
              Save the ones that feel like you and
              create your own jewellery edit.
            </p>

            <div className="pf-intro-signature">
              <span>YOUR TASTE</span>
              <div></div>
              <strong>CURATED BY YOU</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAVOURITE COLLECTION
      ===================================================== */}

      <section className="pf-collection" id="pf-edit">

        <div className="pf-collection-header">

          <div>
            <p>03 / THE COLLECTION</p>

            <h2>
              The ones
              <br />
              <em>you keep.</em>
            </h2>
          </div>

          <div className="pf-count">

            <span>
              YOUR EDIT
            </span>

            <strong>
              {String(favourites.length).padStart(2, "0")}
            </strong>

            <small>
              SAVED
            </small>

          </div>

        </div>


        <div className="pf-product-grid">

          {FAVOURITES.map((product, index) => {

            const isFavourite = favourites.includes(product.id);

            return (
              <article
                className={`pf-product ${
                  index === 2 || index === 5
                    ? "pf-product-featured"
                    : ""
                }`}
                key={product.id}
              >

                <div className="pf-product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <button
                    type="button"
                    className={`pf-heart ${
                      isFavourite ? "is-active" : ""
                    }`}
                    onClick={() =>
                      toggleFavourite(product.id)
                    }
                    aria-label={
                      isFavourite
                        ? `Remove ${product.name} from favourites`
                        : `Add ${product.name} to favourites`
                    }
                  >
                    {isFavourite ? "♥" : "♡"}
                  </button>

                  <span className="pf-product-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                <div className="pf-product-info">

                  <div>
                    <span>{product.category}</span>
                    <h3>{product.name}</h3>
                  </div>

                  <strong>{product.price}</strong>

                </div>

              </article>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          PERSONAL EDIT
      ===================================================== */}

      {/* =====================================================
    PERSONAL EDIT
===================================================== */}

<section className="pf-personal-edit">

  <div className="pf-personal-ring pf-ring-one"></div>
  <div className="pf-personal-ring pf-ring-two"></div>
  <div className="pf-personal-ring pf-ring-three"></div>

  <div className="pf-personal-content">

    <p>04 / YOUR PERSONAL EDIT</p>

    {favourites.length > 0 ? (
      <>
        <h2>
          Your pieces,
          <br />
          <em>kept close.</em>
        </h2>

        <p className="pf-personal-description">
          A collection shaped entirely by you.
          The pieces you loved enough to keep.
        </p>

        <div className="pf-saved-preview">

          {favouriteProducts.slice(0, 4).map((product, index) => (
            <div
              className="pf-saved-item"
              key={product.id}
            >
              <div className="pf-saved-image">
                <img
                  src={product.image}
                  alt={product.name}
                />

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="pf-saved-item-info">
                <span>{product.category}</span>
                <strong>{product.name}</strong>
              </div>
            </div>
          ))}

        </div>
      </>
    ) : (
      <>
        <h2>
          Nothing saved
          <br />
          <em>just yet.</em>
        </h2>

        <p className="pf-personal-description">
          Start exploring and keep the pieces
          that feel unmistakably yours.
        </p>
      </>
    )}

    <button
      type="button"
      onClick={() =>
        document
          .getElementById("pf-edit")
          ?.scrollIntoView({ behavior: "smooth" })
      }
    >
      {favourites.length
        ? "KEEP EXPLORING"
        : "FIND YOUR FAVOURITES"}

      <span>↗</span>
    </button>

  </div>

</section>

      {/* =====================================================
    FINAL CTA
===================================================== */}

<section className="pf-final">

  <div className="pf-final-orbit pf-final-orbit-one"></div>
  <div className="pf-final-orbit pf-final-orbit-two"></div>

  <div className="pf-final-top">
    <span>YOUR NEXT FAVOURITE</span>
    <span>PERSONAL FAVOURITES</span>
  </div>

  <div className="pf-final-content">

    <p>THE COLLECTION CONTINUES</p>

    <h2>
      Some pieces
      <br />
      catch your eye.
      <br />
      Some stay
      <br />
      <em>on your mind.</em>
    </h2>

    <div className="pf-final-divider">
      <span></span>
      <i>♡</i>
      <span></span>
    </div>

    <button
      type="button"
      onClick={() => navigate("/shop-by")}
    >
      EXPLORE THE COLLECTION
      <span>→</span>
    </button>

  </div>

  <div className="pf-final-bottom">
    <span>KEEP LOOKING</span>
    <span>FIND WHAT FEELS LIKE YOU</span>
  </div>

</section>

    </main>
  );
}

export default PersonalFavourites;