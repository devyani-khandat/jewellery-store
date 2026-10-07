import { useNavigate } from "react-router-dom";
import "../styles/bestSellers.css";

import heroImage from "../assets/products/hero.png";
import aureliaTennis from "../assets/products/Aurelia Tennis Bracelet.png";
import roseHalo from "../assets/products/rose-halo-earrings.jpg.png";
import solenne from "../assets/products/solenne-necklace.jpg.png";
import elanRing from "../assets/products/elan-ring.jpg.png";
import celeste from "../assets/products/celeste-pendant.jpg.png";
import noirBand from "../assets/products/noir-band.png";

const BEST_SELLERS = [
  {
    name: "Aurelia Tennis Bracelet",
    category: "BRACELETS",
    price: "₹36,500",
    image: aureliaTennis,
  },
  {
    name: "Rose Halo Earrings",
    category: "EARRINGS",
    price: "₹24,900",
    image: roseHalo,
  },
  {
    name: "Solenne Necklace",
    category: "NECKLACES",
    price: "₹42,000",
    image: solenne,
  },
  {
    name: "Elan Ring",
    category: "RINGS",
    price: "₹18,500",
    image: elanRing,
  },
];

function BestSellers() {
  const navigate = useNavigate();

  return (
    <main className="best-sellers-page">

      {/* HERO */}
      <section className="bs-hero">
        <div className="bs-hero-image">
          <img src={heroImage} alt="Luxury jewellery collection" />
        </div>

        <div className="bs-hero-overlay">
          <p className="bs-eyebrow">THE PIECES THEY CHOOSE</p>

          <h1>
            The
            <br />
            <em>Icons.</em>
          </h1>

          <p className="bs-hero-description">
            The jewellery our customers return to,
            gift often, and keep close.
          </p>
        </div>

        <div className="bs-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div className="bs-scroll-line"></div>
        </div>
      </section>


      {/* INTRO */}
      <section className="bs-introduction">
        <div className="bs-intro-small">
          MOST LOVED
        </div>

        <div className="bs-intro-content">
          <p className="bs-intro-label">
            THE MAISON EDIT
          </p>

          <h2>
            The pieces that
            <br />
            <em>never leave.</em>
          </h2>

          <p>
            From everyday signatures to unforgettable gifts,
            these are the pieces that have earned their place
            among our most-loved designs.
          </p>
        </div>
      </section>


      {/* MOST LOVED COLLECTION */}
      <section className="bs-collection">

        <div className="bs-section-heading">
          <div>
            <p>01 / MOST LOVED</p>
            <h2>Customer favourites</h2>
          </div>

          <span>
            THE ICONS OF THE MAISON
          </span>
        </div>


        <div className="bs-product-grid">

          {BEST_SELLERS.map((product, index) => (
            <article
              className={`bs-product-card bs-product-${index + 1}`}
              key={product.name}
            >
              <div className="bs-product-image">
                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="bs-product-number">
                  0{index + 1}
                </span>
              </div>

              <div className="bs-product-info">
                <div>
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>
                </div>

                <span>{product.price}</span>
              </div>
            </article>
          ))}

        </div>

      </section>


      {/* FEATURED PIECE */}
      <section className="bs-feature">

        <div className="bs-feature-image">
          <img
            src={celeste}
            alt="Celeste Pendant"
          />
        </div>

        <div className="bs-feature-content">

          <p className="bs-feature-label">
            THE SIGNATURE PIECE
          </p>

          <span className="bs-feature-number">
            02
          </span>

          <h2>
            Made to be
            <br />
            <em>remembered.</em>
          </h2>

          <p className="bs-feature-description">
            The Celeste Pendant balances quiet elegance
            with just enough presence to become part of
            your signature.
          </p>

          <div className="bs-feature-details">
            <div>
              <span>COLLECTION</span>
              <strong>CELESTE</strong>
            </div>

            <div>
              <span>PRICE</span>
              <strong>₹16,800</strong>
            </div>
          </div>

          <button
            className="bs-outline-button"
            onClick={() => navigate("/shop-by")}
          >
            EXPLORE THE COLLECTION
            <span>↗</span>
          </button>

        </div>

      </section>


      {/* WHY THEY RETURN */}
      <section className="bs-reasons">

        <div className="bs-reasons-heading">
          <p>WHY THEY RETURN</p>

          <h2>
            More than jewellery.
            <br />
            <em>A feeling.</em>
          </h2>
        </div>


        <div className="bs-reasons-grid">

          <div className="bs-reason">
            <span>01</span>

            <div>
              <h3>Designed to stay</h3>
              <p>
                Timeless silhouettes made to become
                part of your everyday story.
              </p>
            </div>
          </div>


          <div className="bs-reason">
            <span>02</span>

            <div>
              <h3>Easy to love</h3>
              <p>
                Refined enough for special moments,
                effortless enough for every day.
              </p>
            </div>
          </div>


          <div className="bs-reason">
            <span>03</span>

            <div>
              <h3>Made for gifting</h3>
              <p>
                Pieces chosen to mark birthdays,
                beginnings, milestones and everything
                in between.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* DARK EDITORIAL */}
      <section className="bs-dark-editorial">

        <div className="bs-dark-image">
          <img
            src={noirBand}
            alt="Noir Band"
          />
        </div>

        <div className="bs-dark-content">

          <p>THE QUIET ICON</p>

          <h2>
            Understated.
            <br />
            <em>Unforgettable.</em>
          </h2>

          <span>
            NOIR BAND
          </span>

          <button
            onClick={() => navigate("/shop-by")}
          >
            DISCOVER MORE
            <span>→</span>
          </button>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="bs-final">

        <p>SOME PIECES BECOME FAVOURITES.</p>

        <h2>
          Some become
          <br />
          <em>signatures.</em>
        </h2>

        <button
          onClick={() => navigate("/shop-by")}
        >
          EXPLORE BEST SELLERS
          <span>→</span>
        </button>

      </section>

    </main>
  );
}

export default BestSellers;