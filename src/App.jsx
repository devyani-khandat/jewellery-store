import "./App.css";
import { useState } from "react";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./styles/shopByDropdown.css";
import ShopBy from "./pages/ShopBy";
import SiteHeader from "./components/SiteHeader";
import NewArrivals from "./pages/NewArrivals";
import BestSellers from "./pages/BestSellers";
import Gifting from "./pages/Gifting";
import POP from "./pages/POP";
import PersonalFavourites from "./pages/PersonalFavourites";
import About from "./pages/About";
import SiteFooter from "./components/SiteFooter";

import {
  Heart,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

/* =========================================
   DEMO NEW ARRIVALS
========================================= */

const NEW_ARRIVALS = [
  {
    id: 1,
    name: "Celeste Pendant",
    material: "18K Rose Gold · Moissanite",
    price: "₹24,900",
    image: "/src/assets/products/celeste-pendant.jpg.png",
    featured: true,
  },
  {
    id: 2,
    name: "Élan Ring",
    material: "18K Rose Gold · Diamond",
    price: "₹18,500",
    image: "/src/assets/products/elan-ring.jpg.png",
  },
  {
    id: 3,
    name: "Rosé Halo Earrings",
    material: "18K Rose Gold · Moissanite",
    price: "₹22,900",
    image: "/src/assets/products/rose-halo-earrings.jpg.png",
  },
  {
    id: 4,
    name: "Aurelia Tennis Bracelet",
    material: "18K Rose Gold · Diamond",
    price: "₹36,500",
    image: "/src/assets/products/Aurelia Tennis Bracelet.png",
  },
  {
    id: 5,
    name: "Solenne Necklace",
    material: "18K Rose Gold · Diamond",
    price: "₹28,900",
    image: "/src/assets/products/solenne-necklace.jpg.png",
  },
];


/* =========================================
   REUSABLE PRODUCT CARD
========================================= */

function ArrivalCard({ product }) {
  return (
    <article className="arrival-card">

      <div className="arrival-image-wrap">

        <img
          src={product.image}
          alt={product.name}
          className="arrival-image"
        />

        <button
          className="arrival-favourite"
          aria-label={`Add ${product.name} to favourites`}
        >
          <Heart
            size={17}
            strokeWidth={1.5}
          />
        </button>

      </div>


      <div className="arrival-info">

        <div>
          <h3>{product.name}</h3>

          <p>{product.material}</p>
        </div>

        <strong>{product.price}</strong>

      </div>

    </article>
  );
}


/* =========================================
   MAIN APP
========================================= */

function HomePage() {
  const navigate = useNavigate();
  const [shopByOpen, setShopByOpen] = useState(false);

  const goToShopBy = (filterKey = null, value = null) => {
    setShopByOpen(false);

    if (filterKey && value) {
      navigate(`/shop-by?${filterKey}=${encodeURIComponent(value)}`);
      return;
    }

    navigate("/shop-by");
  };

  return (
    <div className="app">


      {/* =========================================
          MOVING OFFER TICKER
      ========================================= */}

      <div className="announcement-bar">

        <div className="announcement-track">


          {/* First ticker group */}

          <div className="announcement-group">

            <span>
              Complimentary Luxury Packaging on Every Order
            </span>

            <span className="announcement-separator">
              ✦
            </span>


            <span>
              Discover the New Jewellery Edit
            </span>

            <span className="announcement-separator">
              ✦
            </span>


            <span>
              Free Shipping on Orders Above ₹5,000
            </span>

            <span className="announcement-separator">
              ✦
            </span>


            <span>
              10% Off Your First Jewellery Purchase
            </span>

            <span className="announcement-separator">
              ✦
            </span>


            <span>
              Personalised Gifting Available
            </span>

            <span className="announcement-separator">
              ✦
            </span>


            <span>
              Explore Our POP Savings Plan
            </span>

            <span className="announcement-separator">
              ✦
            </span>

          </div>


          {/* Duplicate group for seamless looping */}

          <div
            className="announcement-group"
            aria-hidden="true"
          >

            <span>
              Complimentary Luxury Packaging on Every Order
            </span>

            <span className="announcement-separator">
              ✦
            </span>


            <span>
              Discover the New Jewellery Edit
            </span>

            <span className="announcement-separator">
              ✦
            </span>


            <span>
              Free Shipping on Orders Above ₹5,000
            </span>

            <span className="announcement-separator">
              ✦
            </span>


            <span>
              10% Off Your First Jewellery Purchase
            </span>

            <span className="announcement-separator">
              ✦
            </span>


            <span>
              Personalised Gifting Available
            </span>

            <span className="announcement-separator">
              ✦
            </span>


            <span>
              Explore Our POP Savings Plan
            </span>

            <span className="announcement-separator">
              ✦
            </span>

          </div>

        </div>

      </div>



      {/* =========================================
          HEADER
      ========================================= */}

      <header className="site-header">

        <div className="header-main">


          {/* Search */}

          <button className="search-button">

            <span className="search-icon">
              ⌕
            </span>

            <span>
              Search Jewels
            </span>

          </button>



          {/* Brand */}

          <div className="brand">

            <div className="brand-name">

              <span>✧</span>

              <strong>
                MAISON
              </strong>

              <span>✧</span>

            </div>


            <p>
              JEWELLERY HOUSE
            </p>

          </div>



          {/* Header actions */}

          <div className="header-actions">


            {/* Favourites */}

            <button
              className="icon-button"
              title="Favourites"
            >

              ♡

              <span className="badge">
                0
              </span>

            </button>



            {/* Cart */}

            <button
              className="icon-button"
              title="Shopping Bag"
            >

              ♧

              <span className="badge cart-badge">
                0
              </span>

            </button>



            {/* Sign in */}

            <button className="account-button">

              <span>
                ♙
              </span>

              <span>
                Sign In
              </span>

            </button>

          </div>

        </div>



        {/* Navigation */}

        <nav className="main-navigation">

          <button onClick={() => navigate("/")}>
            Home
          </button>

          <div
            className={`shopby-nav-wrap ${shopByOpen ? "is-open" : ""}`}
            onMouseLeave={() => setShopByOpen(false)}
          >

            <button
              className="shopby-nav-trigger"
              onClick={() => setShopByOpen((open) => !open)}
              aria-expanded={shopByOpen}
              aria-haspopup="true"
            >
              Shop By
              <span className="shopby-nav-chevron">⌄</span>
            </button>

            {shopByOpen && (
              <div className="shopby-mega-menu">

                <div className="shopby-mega-intro">
                  <span>DISCOVER YOUR STYLE</span>
                  <h3>Shop by<br /><em>what speaks to you.</em></h3>
                  <button onClick={() => goToShopBy()}>
                    Explore all Shop By <span>→</span>
                  </button>
                </div>

                <div className="shopby-mega-columns">

                  <div className="shopby-mega-column">
                    <span className="shopby-mega-label">01 · GENDER</span>
                    <button onClick={() => goToShopBy("gender", "Women")}>Women</button>
                    <button onClick={() => goToShopBy("gender", "Men")}>Men</button>
                    <button onClick={() => goToShopBy("gender", "Unisex")}>Unisex</button>
                  </div>

                  <div className="shopby-mega-column">
                    <span className="shopby-mega-label">02 · JEWELLERY CATEGORY</span>
                    <button onClick={() => goToShopBy("category", "Rings")}>Rings</button>
                    <button onClick={() => goToShopBy("category", "Earrings")}>Earrings</button>
                    <button onClick={() => goToShopBy("category", "Necklaces")}>Necklaces</button>
                    <button onClick={() => goToShopBy("category", "Bracelets")}>Bracelets</button>
                    <button onClick={() => goToShopBy("category", "Pendants")}>Pendants</button>
                  </div>

                  <div className="shopby-mega-column">
                    <span className="shopby-mega-label">03 · JEWELLERY COLLECTION</span>
                    <button onClick={() => goToShopBy("collection", "Signature")}>Signature</button>
                    <button onClick={() => goToShopBy("collection", "Modern")}>Modern</button>
                    <button onClick={() => goToShopBy("collection", "Heirloom")}>Heirloom</button>
                    <button onClick={() => goToShopBy("collection", "Minimal")}>Minimal</button>
                    <button onClick={() => goToShopBy("collection", "Statement")}>Statement</button>
                  </div>

                  <div className="shopby-mega-column">
                    <span className="shopby-mega-label">04 · OCCASION</span>
                    <button onClick={() => goToShopBy("occasion", "Everyday")}>Everyday</button>
                    <button onClick={() => goToShopBy("occasion", "Wedding")}>Wedding</button>
                    <button onClick={() => goToShopBy("occasion", "Party")}>Party</button>
                    <button onClick={() => goToShopBy("occasion", "Gifting")}>Gifting</button>
                    <button onClick={() => goToShopBy("occasion", "Celebration")}>Celebration</button>
                  </div>

                  <div className="shopby-mega-column shopby-mega-offers">
                    <span className="shopby-mega-label">05 · OFFERS</span>
                    <button onClick={() => goToShopBy("offers", "Featured Offers")}>Featured Offers</button>
                    <button onClick={() => goToShopBy("offers", "Special Savings")}>Special Savings</button>
                    <button onClick={() => goToShopBy("offers", "Limited Pieces")}>Limited Pieces</button>
                  </div>

                </div>
              </div>
            )}
          </div>

         <button
  onClick={() => navigate("/new-arrivals")}
>
  New Arrivals
</button>

          <button
            onClick={() => navigate("/best-sellers")}
          >
            Best Sellers
          </button>

          <button
            onClick={() => navigate("/gifting")}
          >
            Gifting
          </button>

          <button
            className="pop-link"
            onClick={() => navigate("/pop")}
          >
            ✦ POP
          </button>

          <button
            onClick={() => navigate("/personal-favourites")}
          >
            Personal Favourites
          </button>

          <button
            onClick={() => navigate("/about-us")}
          >
            About Us
          </button>

        </nav>

      </header>



      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <main>


        {/* =========================================
            HERO SECTION
        ========================================= */}

        <section className="hero-section">


          {/* Decorative background circles */}

          <div className="hero-orbit hero-orbit-one"></div>

          <div className="hero-orbit hero-orbit-two"></div>

          <div className="hero-orbit hero-orbit-three"></div>



          <div className="hero-content">


            {/* LEFT SIDE — HERO TEXT */}

            <div className="hero-copy">

              <span className="hero-eyebrow">
                THE ART OF ADORNMENT
              </span>


              <h1>

                Jewellery that

                <br />

                <em>
                  becomes your story.
                </em>

              </h1>


              <p>
                Discover timeless pieces designed to celebrate
                the moments you never want to forget.
              </p>



              {/* Hero buttons */}

              <div className="hero-actions">


                <button className="hero-primary">

                  Explore Collection

                  <span>
                    →
                  </span>

                </button>


                <button className="hero-secondary">

                  Discover New Arrivals

                </button>

              </div>

            </div>



            {/* RIGHT SIDE — HERO VISUAL */}

            <div className="hero-visual">


              <div className="hero-image-frame">

                <div className="jewel-glow"></div>

                <div className="jewel-halo"></div>



                {/* CSS jewellery illustration */}

                <div className="jewel-necklace">

                  <div className="necklace-chain"></div>


                  <div className="necklace-pendant">

                    <div className="pendant-inner"></div>

                  </div>

                </div>



                {/* Decorative sparkles */}

                <div className="floating-sparkle sparkle-one">
                  ✦
                </div>

                <div className="floating-sparkle sparkle-two">
                  ✧
                </div>

                <div className="floating-sparkle sparkle-three">
                  ·
                </div>

              </div>



              {/* Floating product information */}

              <div className="hero-product-card">

                <span>
                  FEATURED PIECE
                </span>


                <h3>
                  The Celeste Pendant
                </h3>


                <p>
                  18K Rose Gold · Moissanite
                </p>


                <div className="product-card-bottom">

                  <strong>
                    ₹24,900
                  </strong>


                  <button>
                    View Piece →
                  </button>

                </div>

              </div>

            </div>

          </div>



          {/* Scroll cue */}

          <div className="hero-scroll-cue">

            <span>
              SCROLL TO DISCOVER
            </span>

            <div className="scroll-line"></div>

          </div>

        </section>



        {/* =========================================
            BRAND INTRODUCTION
        ========================================= */}

        <section className="brand-introduction">


          <div className="brand-intro-glow"></div>


          <div className="brand-intro-content">


            {/* Left editorial statement */}

            <div className="brand-intro-statement">

              <span className="section-eyebrow light">
                MORE THAN JEWELLERY
              </span>


              <h2>

                Not just something

                <br />

                <em>
                  you wear.
                </em>

              </h2>


              <div className="intro-line"></div>


              <p className="intro-highlight">
                Something you keep.
              </p>

            </div>



            {/* Right story */}

            <div className="brand-intro-story">

              <div className="story-number">
                01
              </div>


              <p>
                Jewellery has a way of becoming part of us.
                A gift that carries a memory. A piece worn
                on a day that changed everything. A quiet
                reminder of someone, somewhere, or something
                worth holding close.
              </p>


              <p>
                Our collection is created around those moments —
                thoughtfully chosen pieces designed to live
                beyond a single occasion.
              </p>


              <button className="story-button">

                Discover Our Story

                <span>
                  →
                </span>

              </button>

            </div>

          </div>



          {/* Bottom detail */}

          <div className="brand-intro-bottom">

            <span>
              CRAFTED FOR YOUR MOMENTS
            </span>


            <div className="intro-bottom-line"></div>


            <span>
              MADE TO BE REMEMBERED
            </span>

          </div>

        </section>



        {/* =========================================
            NEW ARRIVALS
        ========================================= */}

        <section className="new-arrivals">


          {/* Heading */}

          <div className="arrivals-heading">


            <div className="arrivals-heading-line">

              <span></span>

              <Sparkles
                size={14}
                strokeWidth={1.2}
              />

              <span></span>

            </div>


            <span className="arrivals-eyebrow">
              THE NEW EDIT
            </span>


            <h2>
              New Arrivals
            </h2>


            <p>
              Pieces just waiting to be discovered.
            </p>

          </div>



          {/* View all */}

          <button className="arrivals-view-all">

            View All New Arrivals

            <ArrowRight
              size={16}
              strokeWidth={1.4}
            />

          </button>



          {/* Product showcase */}

          <div className="arrivals-showcase">


            {/* =====================================
                FEATURED PRODUCT
            ===================================== */}

            <article className="arrival-featured">


              <div className="featured-image-wrap">


                <img
                  src={NEW_ARRIVALS[0].image}
                  alt={NEW_ARRIVALS[0].name}
                />


                {/* Featured product information */}

                <div className="featured-overlay">

                  <span>
                    FEATURED PIECE
                  </span>


                  <div className="featured-line"></div>


                  <h3>
                    {NEW_ARRIVALS[0].name}
                  </h3>


                  <p>
                    {NEW_ARRIVALS[0].material}
                  </p>


                  <strong>
                    {NEW_ARRIVALS[0].price}
                  </strong>


                  <button className="featured-button">

                    View Piece

                    <ArrowRight
                      size={15}
                    />

                  </button>

                </div>


                {/* Favourite */}

                <button
                  className="featured-heart"
                  aria-label="Add featured piece to favourites"
                >

                  <Heart
                    size={18}
                    strokeWidth={1.5}
                  />

                </button>

              </div>



              <div className="featured-bottom">

                <span>
                  A MODERN HEIRLOOM
                </span>


                <span>
                  01 / 05
                </span>

              </div>

            </article>



            {/* =====================================
                SECONDARY PRODUCTS
            ===================================== */}

            <div className="arrival-grid">

              {NEW_ARRIVALS
                .slice(1)
                .map((product) => (

                  <ArrivalCard
                    key={product.id}
                    product={product}
                  />

                ))}

            </div>

          </div>



          {/* Bottom navigation */}

          <div className="arrivals-footer">


            <button
              className="arrival-arrow"
              aria-label="Previous products"
            >

              <ArrowLeft
                size={16}
                strokeWidth={1.4}
              />

            </button>


            <div className="arrival-dots">

              <span className="active"></span>

              <span></span>

              <span></span>

              <span></span>

            </div>


            <button
              className="arrival-arrow"
              aria-label="Next products"
            >

              <ArrowRight
                size={16}
                strokeWidth={1.4}
              />

            </button>

          </div>

        </section>

        {/* =========================================================
    BEST SELLERS — EDITORIAL DARK SECTION
========================================================= */}

<section className="best-sellers-section">

  {/* Decorative background */}
  <div className="best-sellers-orb orb-one"></div>
  <div className="best-sellers-orb orb-two"></div>

  <div className="best-sellers-inner">

    {/* HEADER */}
    <div className="best-sellers-heading">

      <span className="best-sellers-eyebrow">
        MOST LOVED
      </span>

      <div className="best-sellers-title-row">

        <span className="best-sellers-line"></span>

        <h2>
          Best Sellers
        </h2>

        <span className="best-sellers-line"></span>

      </div>

      <p>
        The pieces that have become part of
        someone's story.
      </p>

    </div>


    {/* PRODUCT GRID */}
    <div className="best-sellers-grid">

      {/* PRODUCT 01 */}
      <article className="best-seller-card">

        <div className="best-seller-image-wrap">

          <img
            src="/src/assets/products/elan-ring.jpg.png"
            alt="Élan Ring"
          />

          <button
            className="best-seller-heart"
            aria-label="Add Élan Ring to favourites"
          >
            ♡
          </button>

          <span className="best-seller-number">
            01
          </span>

        </div>

        <div className="best-seller-info">

          <div>
            <span className="best-seller-category">
              SIGNATURE RING
            </span>

            <h3>
              Élan Ring
            </h3>

            <p>
              18K Rose Gold · Diamond
            </p>
          </div>

          <span className="best-seller-price">
            ₹18,500
          </span>

        </div>

        <button className="best-seller-view">
          VIEW PIECE
          <span>→</span>
        </button>

      </article>


      {/* PRODUCT 02 */}
      <article className="best-seller-card">

        <div className="best-seller-image-wrap">

          <img
            src="/src/assets/products/rose-halo-earrings.jpg.png"
            alt="Rosé Halo Earrings"
          />

          <button
            className="best-seller-heart"
            aria-label="Add Rosé Halo Earrings to favourites"
          >
            ♡
          </button>

          <span className="best-seller-number">
            02
          </span>

        </div>

        <div className="best-seller-info">

          <div>
            <span className="best-seller-category">
              EVERYDAY RADIANCE
            </span>

            <h3>
              Rosé Halo Earrings
            </h3>

            <p>
              18K Rose Gold · Moissanite
            </p>
          </div>

          <span className="best-seller-price">
            ₹22,900
          </span>

        </div>

        <button className="best-seller-view">
          VIEW PIECE
          <span>→</span>
        </button>

      </article>


      {/* PRODUCT 03 */}
      <article className="best-seller-card">

        <div className="best-seller-image-wrap">

          <img
            src="/src/assets/products/aurelia-bracelet.jpg.png"
            alt="Aurelia Bracelet"
          />

          <button
            className="best-seller-heart"
            aria-label="Add Aurelia Bracelet to favourites"
          >
            ♡
          </button>

          <span className="best-seller-number">
            03
          </span>

        </div>

        <div className="best-seller-info">

          <div>
            <span className="best-seller-category">
              MODERN CLASSIC
            </span>

            <h3>
              Aurelia Bracelet
            </h3>

            <p>
              18K Rose Gold · Diamond
            </p>
          </div>

          <span className="best-seller-price">
            ₹36,500
          </span>

        </div>

        <button className="best-seller-view">
          VIEW PIECE
          <span>→</span>
        </button>

      </article>

    </div>


    {/* BOTTOM AREA */}
    <div className="best-sellers-bottom">

      <div className="best-sellers-bottom-copy">

        <span>
          CURATED FOR YOU
        </span>

        <p>
          From everyday elegance to unforgettable
          occasions, discover the pieces our clients
          return to again and again.
        </p>

      </div>

      <button className="best-sellers-main-button">
        VIEW ALL BEST SELLERS
        <span>→</span>
      </button>

    </div>

  </div>

</section>

{/* =========================================================
    SHOP BY — HOMEPAGE DISCOVERY
========================================================= */}

<section className="shop-by-home">

  <div className="shop-by-home-inner">

    {/* HEADER */}

    <div className="shop-by-home-heading">

      <span className="shop-by-eyebrow">
        DISCOVER YOUR STYLE
      </span>

      <h2>
        Shop by
        <em>what speaks to you.</em>
      </h2>

      <p>
        Explore jewellery chosen around
        your style, your moments and your story.
      </p>

    </div>


    {/* CATEGORY LAYOUT */}

    <div className="shop-by-home-grid">


      {/* =====================================
          GENDER
      ===================================== */}

      <button
        className="shop-by-tile shop-by-gender"
        onClick={() => navigate("/shop-by")}
      >

        <img
          src="/src/assets/products/rose-halo-earrings.jpg.png"
          alt="Shop jewellery by gender"
        />

        <div className="shop-by-overlay" />

        <div className="shop-by-tile-content">

          <span>
            01
          </span>

          <div>

            <small>
              SHOP BY
            </small>

            <h3>
              Gender
            </h3>

            <p>
              Women · Men · Unisex
            </p>

          </div>

          <div className="shop-by-arrow">
            →
          </div>

        </div>

      </button>


      {/* =====================================
          CATEGORY
      ===================================== */}

      <button
        className="shop-by-tile shop-by-category"
        onClick={() => navigate("/shop-by")}
      >

        <img
  src="/src/assets/products/Jewellery Category.png"
  alt="Jewellery categories"
/>

        <div className="shop-by-overlay" />

        <div className="shop-by-tile-content">

          <span>
            02
          </span>

          <div>

            <small>
              EXPLORE
            </small>

            <h3>
              Jewellery Category
            </h3>

            <p>
              Rings · Earrings · Necklaces
            </p>

          </div>

          <div className="shop-by-arrow">
            →
          </div>

        </div>

      </button>


      {/* =====================================
          COLLECTION
      ===================================== */}

      <button
        className="shop-by-tile shop-by-collection"
        onClick={() => navigate("/shop-by")}
      >

        <img
          src="/src/assets/products/celeste-pendant.jpg.png"
          alt="Jewellery collections"
        />

        <div className="shop-by-overlay" />

        <div className="shop-by-tile-content">

          <span>
            03
          </span>

          <div>

            <small>
              CURATED EDITS
            </small>

            <h3>
              Collections
            </h3>

            <p>
              Signature · Modern · Heirloom
            </p>

          </div>

          <div className="shop-by-arrow">
            →
          </div>

        </div>

      </button>


      {/* =====================================
          OCCASION
      ===================================== */}

      <button
        className="shop-by-tile shop-by-occasion"
        onClick={() => navigate("/shop-by")}
      >

        <img
          src="/src/assets/products/solenne-necklace.jpg.png"
          alt="Jewellery for every occasion"
        />

        <div className="shop-by-overlay" />

        <div className="shop-by-tile-content">

          <span>
            04
          </span>

          <div>

            <small>
              MADE FOR
            </small>

            <h3>
              Occasion
            </h3>

            <p>
              Everyday · Wedding · Gifting
            </p>

          </div>

          <div className="shop-by-arrow">
            →
          </div>

        </div>

      </button>


      {/* =====================================
          OFFERS
      ===================================== */}

      <button
        className="shop-by-tile shop-by-offers"
        onClick={() => navigate("/shop-by")}
      >

        <div className="offers-tile-pattern">

          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>

        </div>


        <div className="shop-by-offers-content">

          <span className="offers-number">
            05
          </span>

          <small>
            SOMETHING SPECIAL
          </small>

          <h3>
            Offers
          </h3>

          <p>
            Discover our latest
            jewellery savings.
          </p>

          <div className="offers-button">
            EXPLORE OFFERS
            <span>→</span>
          </div>

        </div>

      </button>


    </div>


    {/* BOTTOM NOTE */}

    <div className="shop-by-home-footer">

      <span>
        YOUR STYLE
      </span>

      <div />

      <p>
        There is a piece for every version of you.
      </p>

    </div>

  </div>

</section>

{/* =========================================================
    GIFTING SECTION
========================================================= */}

<section className="gifting-home">

  <div className="gifting-home-inner">

    {/* LEFT — TEXT */}

    <div className="gifting-copy">

      <span className="gifting-eyebrow">
        THE ART OF GIVING
      </span>

      <h2>
        Something
        <em>worth remembering.</em>
      </h2>

      <p className="gifting-intro">
        For birthdays. For milestones.
        For the people who make ordinary
        moments feel extraordinary.
      </p>

      <p className="gifting-small-copy">
        Thoughtfully chosen jewellery,
        made to become part of someone’s story.
      </p>

      <button className="gifting-button">
        EXPLORE GIFTS
        <span>→</span>
      </button>

    </div>


    {/* RIGHT — IMAGE */}

    <div className="gifting-visual">

      <div className="gifting-image-frame">

        <img
          src="/src/assets/products/celeste-pendant.jpg.png"
          alt="Jewellery gifting"
        />

        <div className="gifting-image-overlay" />

        <div className="gifting-image-caption">
          <span>
            A GIFT TO KEEP
          </span>

          <strong>
            For every beautiful reason.
          </strong>
        </div>

      </div>


      {/* Decorative circle */}

      <div className="gifting-circle">
        <span>✦</span>
      </div>


      {/* Small floating note */}

      <div className="gifting-note">

        <span>
          01
        </span>

        <p>
          Chosen<br />
          with meaning.
        </p>

      </div>

    </div>

  </div>


  {/* Bottom editorial line */}

  <div className="gifting-footer">

    <span>
      GIFTING EDIT
    </span>

    <div></div>

    <p>
      Give something they will remember.
    </p>

  </div>

</section>

{/* =========================================================
    PERSONAL FAVOURITES SECTION
========================================================= */}

<section className="personal-favourites-home">

  <div className="personal-favourites-inner">

    {/* HEADER */}

    <div className="personal-favourites-heading">

      <span className="personal-favourites-eyebrow">
        YOUR PERSONAL EDIT
      </span>

      <h2>
        Pieces worth
        <em>keeping close.</em>
      </h2>

      <p>
        Save the pieces that catch your eye
        and create a collection that feels entirely yours.
      </p>

    </div>


    {/* PRODUCT ROW */}

    <div className="favourites-products">


      {/* PRODUCT 01 */}

      <article className="favourite-card">

        <div className="favourite-image">

          <img
            src="/src/assets/products/elan-ring.jpg.png"
            alt="Élan Ring"
          />

          <button
            className="favourite-heart"
            aria-label="Add Élan Ring to favourites"
          >
            ♡
          </button>

          <span className="favourite-number">
            01
          </span>

        </div>

        <div className="favourite-info">

          <div>

            <h3>
              Élan Ring
            </h3>

            <p>
              18K Rose Gold · Diamond
            </p>

          </div>

          <strong>
            ₹18,500
          </strong>

        </div>

      </article>


      {/* PRODUCT 02 */}

      <article className="favourite-card favourite-card-featured">

        <div className="favourite-image">

          <img
            src="/src/assets/products/rose-halo-earrings.jpg.png"
            alt="Rosé Halo Earrings"
          />

          <button
            className="favourite-heart"
            aria-label="Add Rosé Halo Earrings to favourites"
          >
            ♡
          </button>

          <span className="favourite-number">
            02
          </span>

        </div>

        <div className="favourite-info">

          <div>

            <h3>
              Rosé Halo Earrings
            </h3>

            <p>
              18K Rose Gold · Moissanite
            </p>

          </div>

          <strong>
            ₹22,900
          </strong>

        </div>

      </article>


      {/* PRODUCT 03 */}

      <article className="favourite-card">

        <div className="favourite-image">

          <img
            src="/src/assets/products/solenne-necklace.jpg.png"
            alt="Solenne Necklace"
          />

          <button
            className="favourite-heart"
            aria-label="Add Solenne Necklace to favourites"
          >
            ♡
          </button>

          <span className="favourite-number">
            03
          </span>

        </div>

        <div className="favourite-info">

          <div>

            <h3>
              Solenne Necklace
            </h3>

            <p>
              18K Rose Gold · Diamond
            </p>

          </div>

          <strong>
            ₹28,900
          </strong>

        </div>

      </article>


    </div>


    {/* BOTTOM CTA */}

    <div className="favourites-cta">

      <div className="favourites-cta-line" />

      <button>
        VIEW YOUR FAVOURITES
        <span>→</span>
      </button>

      <div className="favourites-cta-line" />

    </div>


  </div>

</section>

{/* =========================================================
    POP — PLAN OF PURCHASE
========================================================= */}

<section className="pop-home">

  <div className="pop-home-inner">

    {/* TOP INTRO */}

    <div className="pop-intro">

      <span className="pop-eyebrow">
        A LITTLE SOMETHING TO LOOK FORWARD TO
      </span>

      <h2>
        Plan for
        <em>something beautiful.</em>
      </h2>

      <p>
        Make your dream jewellery easier to bring home.
        Save a little each month and build towards
        something worth keeping.
      </p>

    </div>


    {/* MAIN POP LAYOUT */}

    <div className="pop-feature">


      {/* IMAGE SIDE */}

      <div className="pop-visual">

        <img
          src="/src/assets/products/celeste-pendant.jpg.png"
          alt="Celeste Pendant"
        />

        <div className="pop-visual-overlay" />

        <div className="pop-visual-content">

          <span>
            PLAN YOUR PIECE
          </span>

          <h3>
            Something
            <br />
            worth waiting for.
          </h3>

          <div className="pop-visual-line" />

          <p>
            Save towards the jewellery
            you've been dreaming about.
          </p>

        </div>

        <div className="pop-visual-number">
          01 / POP
        </div>

      </div>


      {/* INFORMATION SIDE */}

      <div className="pop-information">

        <div className="pop-information-top">

          <span className="pop-mini-label">
            THE POP PLAN
          </span>

          <div className="pop-big-word">
            POP
          </div>

          <h3>
            Your jewellery,
            <em>planned.</em>
          </h3>

          <p className="pop-description">
            A simple way to save towards a piece
            you love. Choose your plan, contribute
            regularly and redeem your accumulated
            value towards your jewellery.
          </p>

        </div>


        {/* STEPS */}

        <div className="pop-steps">


          <div className="pop-step">

            <span className="pop-step-number">
              01
            </span>

            <div>

              <h4>
                Enrol
              </h4>

              <p>
                Choose a plan that works for you.
              </p>

            </div>

          </div>


          <div className="pop-step">

            <span className="pop-step-number">
              02
            </span>

            <div>

              <h4>
                Save
              </h4>

              <p>
                Build your jewellery fund month by month.
              </p>

            </div>

          </div>


          <div className="pop-step">

            <span className="pop-step-number">
              03
            </span>

            <div>

              <h4>
                Redeem
              </h4>

              <p>
                Use your accumulated value towards your piece.
              </p>

            </div>

          </div>


        </div>


        {/* CTA */}

        <button className="pop-main-button">
          EXPLORE THE POP PLAN
          <span>→</span>
        </button>


      </div>

    </div>


    {/* BOTTOM BENEFITS */}

    <div className="pop-benefits">

      <div className="pop-benefit">

        <span>01</span>

        <div>
          <strong>
            MONTHLY SAVINGS
          </strong>

          <p>
            Build towards your jewellery over time.
          </p>
        </div>

      </div>


      <div className="pop-benefit-divider" />


      <div className="pop-benefit">

        <span>02</span>

        <div>
          <strong>
            FLEXIBLE PLANS
          </strong>

          <p>
            Choose a contribution that suits you.
          </p>
        </div>

      </div>


      <div className="pop-benefit-divider" />


      <div className="pop-benefit">

        <span>03</span>

        <div>
          <strong>
            JEWELLERY REDEMPTION
          </strong>

          <p>
            Turn your savings into something beautiful.
          </p>
        </div>

      </div>

    </div>


    {/* BOTTOM EDITORIAL LINE */}

    <div className="pop-bottom-line">

      <span>
        PLAN YOUR PIECE
      </span>

      <div />

      <em>
        A little every month. Something beautiful at the end.
      </em>

    </div>

  </div>

</section>

{/* =========================================================
    ABOUT US — HOMEPAGE
========================================================= */}

<section className="about-home">

  <div className="about-home-inner">

    {/* TOP LABEL */}

    <div className="about-home-top">

      <span>
        THE HOUSE BEHIND THE PIECES
      </span>

      <div />

      <span>
        EST. WITH INTENTION
      </span>

    </div>


    {/* MAIN CONTENT */}

    <div className="about-home-content">


      {/* LEFT TEXT */}

      <div className="about-home-copy">

        <span className="about-home-eyebrow">
          MORE THAN JEWELLERY
        </span>

        <h2>
          Made to become
          <em>part of your story.</em>
        </h2>

        <p className="about-home-intro">
          Jewellery has always been more than something
          we wear. It becomes part of the moments we
          remember, the people we celebrate and the
          stories we carry with us.
        </p>


        <div className="about-home-pillars">

          <div className="about-home-pillar">

            <span>
              01
            </span>

            <div>

              <h3>
                Craft
              </h3>

              <p>
                Thoughtfully designed pieces
                made to be treasured.
              </p>

            </div>

          </div>


          <div className="about-home-pillar">

            <span>
              02
            </span>

            <div>

              <h3>
                Intention
              </h3>

              <p>
                Jewellery created around
                life's meaningful moments.
              </p>

            </div>

          </div>

        </div>


        <button className="about-home-button">
          DISCOVER OUR STORY
          <span>→</span>
        </button>

      </div>


      {/* RIGHT IMAGE */}

      <div className="about-home-visual">

        <img
          src="/src/assets/products/rose-halo-earrings.jpg.png"
          alt="Rose Halo Earrings"
        />

        <div className="about-home-image-overlay" />


        <div className="about-home-image-label">

          <span>
            A PIECE TO REMEMBER
          </span>

          <strong>
            Jewellery that
            <em>stays with you.</em>
          </strong>

        </div>


        <div className="about-home-image-number">
          02 / 02
        </div>

      </div>

    </div>


    {/* BOTTOM EDITORIAL LINE */}

    <div className="about-home-bottom">

      <span>
        OUR PHILOSOPHY
      </span>

      <div />

      <em>
        Designed for the moments that matter.
      </em>

    </div>

  </div>

</section>

{/* =========================================================
    CONTACT / CONNECT SECTION
    ========================================================= */}

<section className="contact-section">

  {/* TOP EDITORIAL LINE */}
  <div className="contact-top-line">

    <span>
      THE HOUSE BEHIND THE PIECES
    </span>

    <div className="contact-top-divider"></div>

    <span>
      COME A LITTLE CLOSER
    </span>

  </div>


  {/* MAIN CONTENT */}
  <div className="contact-content">

    {/* ================= LEFT CONTENT ================= */}

    <div className="contact-copy">

      <p className="contact-eyebrow">
        LET'S CONNECT
      </p>

      <h2>
        Come a little
        <span>closer.</span>
      </h2>

      <p className="contact-description">
        Whether you're looking for something unforgettable,
        choosing a gift, or simply want to know more about
        our pieces — we'd love to hear from you.
      </p>

      <p className="contact-small-text">
        Thoughtfully chosen jewellery deserves a thoughtful
        conversation.
      </p>

      <button className="contact-button">
        <span>GET IN TOUCH</span>
        <strong>→</strong>
      </button>

    </div>


    {/* ================= RIGHT IMAGE ================= */}

    <div className="contact-visual">

      <div className="contact-image-wrap">

        <img
          src="/src/assets/products/hero.png"
          alt="Maison jewellery"
        />

        <div className="contact-image-overlay"></div>

        <div className="contact-image-caption">

          <span>
            A PIECE TO REMEMBER
          </span>

          <strong>
            Made for your
            <em>moments.</em>
          </strong>

        </div>

      </div>


      {/* FLOATING CARD */}

      <div className="contact-floating-card">

        <span>
          01
        </span>

        <p>
          Chosen<br />
          with meaning.
        </p>

      </div>

    </div>

  </div>

</section>


      </main>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOMEPAGE */}

        <Route
          path="/"
          element={<HomePage />}
        />


        {/* SHOP BY PAGE */}

        <Route
          path="/shop-by"
          element={
            <>
              <SiteHeader />
              <ShopBy />
            </>
          }
        />

        {/* NEW ARRIVALS PAGE */}

        <Route
          path="/new-arrivals"
          element={
            <>
              <SiteHeader />
              <NewArrivals />
            </>
          }
        />

        {/* BEST SELLERS PAGE */}

        <Route
          path="/best-sellers"
          element={
            <>
              <SiteHeader />
              <BestSellers />
            </>
          }
        />

        <Route
  path="/gifting"
  element={
    <>
      <SiteHeader />
      <Gifting />
    </>
  }
/>

<Route
  path="/pop"
  element={
    <>
      <SiteHeader />
      <POP />
    </>
  }
/>

<Route
  path="/personal-favourites"
  element={
    <>
      <SiteHeader />
      <PersonalFavourites />
    </>
  }
/>

<Route
  path="/about"
  element={
    <>
      <SiteHeader />
      <About />
    </>
  }
/>


      </Routes>

      <SiteFooter />

    </BrowserRouter>
  );
}






export default App;