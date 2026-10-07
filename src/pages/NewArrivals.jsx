import { useNavigate } from "react-router-dom";
import "../styles/newArrivals.css";

import heroImage from "../assets/products/hero.png";
import aureliaBracelet from "../assets/products/Aurelia Tennis Bracelet.png";
import aureliaBraceletAlt from "../assets/products/aurelia-bracelet.jpg.png";
import celestePendant from "../assets/products/celeste-pendant.jpg.png";
import elanRing from "../assets/products/elan-ring.jpg.png";
import roseHaloEarrings from "../assets/products/rose-halo-earrings.jpg.png";
import solenneNecklace from "../assets/products/solenne-necklace.jpg.png";
import jewelleryCategory from "../assets/products/Jewellery Category.png";

const NEW_ARRIVALS = [
  {
    name: "Elan Ring",
    category: "RINGS",
    price: "₹18,500",
    image: elanRing,
  },
  {
    name: "Rose Halo Earrings",
    category: "EARRINGS",
    price: "₹24,900",
    image: roseHaloEarrings,
  },
  {
    name: "Solenne Necklace",
    category: "NECKLACES",
    price: "₹42,000",
    image: solenneNecklace,
  },
  {
    name: "Celeste Pendant",
    category: "PENDANTS",
    price: "₹16,800",
    image: celestePendant,
  },
  {
    name: "Aurelia Tennis Bracelet",
    category: "BRACELETS",
    price: "₹36,500",
    image: aureliaBracelet,
  },
  {
    name: "Aurelia Bracelet",
    category: "BRACELETS",
    price: "₹31,800",
    image: aureliaBraceletAlt,
  },
];

export default function NewArrivals() {
  const navigate = useNavigate();

  return (
    <main className="new-arrivals-page">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="na-hero">

        <div className="na-hero-content">
          <span className="na-eyebrow">THE NEW COLLECTION</span>

          <h1>
            New
            <br />
            Arrivals<span>.</span>
          </h1>

          <p>
            A considered collection of new silhouettes,
            refined details and pieces designed to become
            part of your everyday story.
          </p>

          <button
            className="na-primary-button"
            onClick={() => navigate("/shop-by")}
          >
            EXPLORE THE COLLECTION
            <span>→</span>
          </button>
        </div>

        <div className="na-hero-image">
          <img src={heroImage} alt="New jewellery collection" />
        </div>

        <div className="na-hero-number">01 / 04</div>

      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="na-introduction">

        <div className="na-intro-label">
          <span>01</span>
          <span>NEW TO THE MAISON</span>
        </div>

        <div className="na-intro-copy">
          <h2>
            Pieces with
            <br />
            a new point of view.
          </h2>

          <p>
            Discover the latest additions to our jewellery
            collection. Designed with a balance of sculptural
            form and timeless elegance, each piece is made
            to be worn, layered and remembered.
          </p>
        </div>

      </section>


      {/* =====================================================
          PRODUCT COLLECTION
      ====================================================== */}
      <section className="na-collection">

        <div className="na-section-heading">
          <div>
            <span className="na-eyebrow">JUST ARRIVED</span>
            <h2>The latest pieces</h2>
          </div>

          <button
            className="na-text-button"
            onClick={() => navigate("/shop-by")}
          >
            VIEW ALL
            <span>→</span>
          </button>
        </div>


        <div className="na-product-grid">

          {NEW_ARRIVALS.map((product, index) => (
            <article
              className={`na-product-card ${
                index === 2 || index === 5
                  ? "na-product-card-featured"
                  : ""
              }`}
              key={product.name}
            >

              <div className="na-product-image">
                <img
                  src={product.image}
                  alt={product.name}
                />

                <button
                  className="na-product-view"
                  onClick={() => navigate("/shop-by")}
                >
                  VIEW PIECE
                  <span>→</span>
                </button>
              </div>

              <div className="na-product-info">

                <div>
                  <span className="na-product-category">
                    {product.category}
                  </span>

                  <h3>{product.name}</h3>
                </div>

                <span className="na-product-price">
                  {product.price}
                </span>

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* =====================================================
          EDITORIAL FEATURE
      ====================================================== */}
      <section className="na-editorial">

        <div className="na-editorial-image">
          <img
            src={jewelleryCategory}
            alt="Jewellery collection"
          />
        </div>

        <div className="na-editorial-content">

          <span className="na-eyebrow">THE NEW MOOD</span>

          <h2>
            Designed to
            <br />
            stay with you.
          </h2>

          <p>
            From delicate everyday pieces to silhouettes
            that make an entrance, the new collection
            explores jewellery through a softer, more
            considered lens.
          </p>

          <div className="na-editorial-line"></div>

          <span className="na-editorial-caption">
            NEW SEASON / 2026
          </span>

        </div>

      </section>


      {/* =====================================================
          FINAL STATEMENT
      ====================================================== */}
      <section className="na-final">

        <div className="na-final-small">
          NEW / 2026
        </div>

        <h2>
          Find something
          <br />
          <em>new to love.</em>
        </h2>

        <button
          className="na-final-button"
          onClick={() => navigate("/shop-by")}
        >
          SHOP THE COLLECTION
          <span>→</span>
        </button>

      </section>

    </main>
  );
}