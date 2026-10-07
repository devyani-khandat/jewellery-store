import { useNavigate } from "react-router-dom";
import "../styles/gifting.css";

import heroImage from "../assets/products/Jewellery Category.png";
import roseHalo from "../assets/products/rose-halo-earrings.jpg.png";
import solenne from "../assets/products/solenne-necklace.jpg.png";
import aureliaTennis from "../assets/products/Aurelia Tennis Bracelet.png";
import celeste from "../assets/products/celeste-pendant.jpg.png";
import elanRing from "../assets/products/elan-ring.jpg.png";
import noirBand from "../assets/products/noir-band.png";

const GIFTS = [
  {
    name: "Rose Halo Earrings",
    category: "FOR HER",
    price: "₹24,900",
    image: roseHalo,
  },
  {
    name: "Solenne Necklace",
    category: "FOR SOMEONE SPECIAL",
    price: "₹42,000",
    image: solenne,
  },
  {
    name: "Aurelia Tennis Bracelet",
    category: "FOR THE ONE WHO HAS EVERYTHING",
    price: "₹36,500",
    image: aureliaTennis,
  },
  {
    name: "Celeste Pendant",
    category: "JUST BECAUSE",
    price: "₹16,800",
    image: celeste,
  },
];

function Gifting() {
  const navigate = useNavigate();

  return (
    <main className="gifting-page">

      {/* HERO */}
      <section className="gift-hero">
        <div className="gift-hero-image">
          <img src={heroImage} alt="Jewellery gifting collection" />
        </div>

        <div className="gift-hero-content">
          <p>MADE TO BE GIVEN</p>

          <h1>
            Gifts
            <br />
            <em>with meaning.</em>
          </h1>

          <span>
            Thoughtful pieces for the people,
            <br />
            moments and milestones that matter.
          </span>
        </div>

        <div className="gift-hero-bottom">
          <span>THE GIFT EDIT</span>
          <div></div>
          <span>01 — 04</span>
        </div>
      </section>


      {/* INTRO */}
      <section className="gift-intro">

        <div className="gift-intro-label">
          <span>THE ART OF GIVING</span>
        </div>

        <div className="gift-intro-content">
          <p>WHEN WORDS AREN'T ENOUGH</p>

          <h2>
            Give them
            <br />
            <em>something lasting.</em>
          </h2>

          <p className="gift-intro-description">
            Jewellery has a way of holding onto moments.
            Choose a piece that says what you may not
            always know how to put into words.
          </p>
        </div>

      </section>


      {/* GIFT CATEGORIES */}
      <section className="gift-categories">

        <div className="gift-section-heading">
          <p>01 / FIND THE RIGHT GIFT</p>
          <h2>For every kind of love.</h2>
        </div>

        <div className="gift-category-grid">

          <button className="gift-category">
            <span>01</span>
            <h3>For Her</h3>
            <p>Delicate pieces with a little more meaning.</p>
            <strong>EXPLORE →</strong>
          </button>

          <button className="gift-category">
            <span>02</span>
            <h3>For Him</h3>
            <p>Quiet, refined pieces made to be remembered.</p>
            <strong>EXPLORE →</strong>
          </button>

          <button className="gift-category">
            <span>03</span>
            <h3>Someone Special</h3>
            <p>For the person who deserves something extraordinary.</p>
            <strong>EXPLORE →</strong>
          </button>

          <button className="gift-category">
            <span>04</span>
            <h3>Just Because</h3>
            <p>Because the best surprises don't need a reason.</p>
            <strong>EXPLORE →</strong>
          </button>

        </div>

      </section>


      {/* GIFT EDIT */}
      <section className="gift-edit">

        <div className="gift-edit-heading">
          <div>
            <p>02 / THE GIFT EDIT</p>
            <h2>Chosen with intention.</h2>
          </div>

          <span>
            PIECES WORTH GIVING
          </span>
        </div>

        <div className="gift-product-grid">

          {GIFTS.map((gift, index) => (
            <article className="gift-product" key={gift.name}>

              <div className="gift-product-image">
                <img src={gift.image} alt={gift.name} />

                <span>0{index + 1}</span>
              </div>

              <div className="gift-product-info">
                <div>
                  <p>{gift.category}</p>
                  <h3>{gift.name}</h3>
                </div>

                <strong>{gift.price}</strong>
              </div>

            </article>
          ))}

        </div>

      </section>


      {/* OCCASIONS */}
      <section className="gift-occasions">

        <div className="gift-occasion-image">
          <img src={elanRing} alt="Elan Ring" />
        </div>

        <div className="gift-occasion-content">

          <p>03 / BY THE MOMENT</p>

          <h2>
            For every
            <br />
            <em>occasion.</em>
          </h2>

          <div className="gift-occasion-list">

            <div>
              <span>01</span>
              <h3>Birthdays</h3>
              <p>A little sparkle for their special day.</p>
            </div>

            <div>
              <span>02</span>
              <h3>Anniversaries</h3>
              <p>Celebrate the story you've built together.</p>
            </div>

            <div>
              <span>03</span>
              <h3>Milestones</h3>
              <p>For beginnings, achievements and everything ahead.</p>
            </div>

            <div>
              <span>04</span>
              <h3>Just Because</h3>
              <p>No occasion needed. That's the occasion.</p>
            </div>

          </div>

        </div>

      </section>


      {/* GIFTING STORY */}
      <section className="gift-story">

        <div className="gift-story-content">

          <p>THE LITTLE DETAILS</p>

          <h2>
            It's not just
            <br />
            <em>what you give.</em>
          </h2>

          <p>
            It's the thought behind it. The moment they
            open the box. The smile that follows. The memory
            that stays long after.
          </p>

          <button onClick={() => navigate("/shop-by")}>
            EXPLORE THE COLLECTION
            <span>→</span>
          </button>

        </div>

        <div className="gift-story-image">
          <img src={noirBand} alt="Noir Band" />
        </div>

      </section>


      {/* FINAL */}
      <section className="gift-final">

        <p>SOME GIFTS ARE OPENED.</p>

        <h2>
          Some are
          <br />
          <em>remembered.</em>
        </h2>

        <button onClick={() => navigate("/shop-by")}>
          FIND THE PERFECT GIFT
          <span>→</span>
        </button>

      </section>

    </main>
  );
}

export default Gifting;