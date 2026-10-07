import { useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import "../styles/shopByDropdown.css";
import "../styles/siteHeader.css";


function SiteHeader() {

  const location = useLocation();
  const navigate = useNavigate();

  const [shopByOpen, setShopByOpen] = useState(false);


  /* =========================================
     ACTIVE PAGE
  ========================================= */

  const isActive = (path) => {

    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };


  /* =========================================
     SHOP BY NAVIGATION
  ========================================= */

  const goToShopBy = (
    filterKey = null,
    value = null
  ) => {

    setShopByOpen(false);

    if (filterKey && value) {

      navigate(
        `/shop-by?${filterKey}=${encodeURIComponent(value)}`
      );

      return;
    }

    navigate("/shop-by");
  };


  /* =========================================
     NEW ARRIVALS
  ========================================= */

  const goToNewArrivals = () => {

    setShopByOpen(false);

    navigate("/new-arrivals");
  };


  return (
    <>

      {/* =====================================================
          ANNOUNCEMENT BAR
      ====================================================== */}

      <div className="announcement-bar">

        <div className="announcement-track">

          {/* FIRST TICKER GROUP */}

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


          {/* DUPLICATE GROUP FOR SEAMLESS LOOP */}

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


      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="site-header">

        <div className="header-main">


          {/* SEARCH */}

          <button className="search-button">

            <span className="search-icon">
              ⌕
            </span>

            <span>
              Search Jewels
            </span>

          </button>


          {/* BRAND */}

          <div className="brand">

            <div className="brand-name">

              <span>
                ✧
              </span>

              <strong>
                MAISON
              </strong>

              <span>
                ✧
              </span>

            </div>

            <p>
              JEWELLERY HOUSE
            </p>

          </div>


          {/* HEADER ACTIONS */}

          <div className="header-actions">


            {/* FAVOURITES */}

            <button
              className="icon-button"
              title="Favourites"
            >

              ♡

              <span className="badge">
                0
              </span>

            </button>


            {/* CART */}

            <button
              className="icon-button"
              title="Shopping Bag"
            >

              ♧

              <span className="badge cart-badge">
                0
              </span>

            </button>


            {/* SIGN IN */}

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


        {/* =================================================
            NAVIGATION
        ================================================== */}

        <nav className="main-navigation">


          {/* HOME */}

          <button
            className={
              isActive("/")
                ? "site-nav-active"
                : ""
            }
            onClick={() => {

              setShopByOpen(false);

              navigate("/");

            }}
          >
            Home
          </button>


          {/* =================================================
              SHOP BY
          ================================================= */}

          <div
            className={`shopby-nav-wrap ${
              shopByOpen
                ? "is-open"
                : ""
            }`}
            onMouseEnter={() =>
              setShopByOpen(true)
            }
            onMouseLeave={() =>
              setShopByOpen(false)
            }
          >

            <button
              className={`shopby-nav-trigger ${
                isActive("/shop-by")
                  ? "site-nav-active"
                  : ""
              }`}
              onClick={() =>
                navigate("/shop-by")
              }
              aria-expanded={shopByOpen}
              aria-haspopup="true"
            >

              Shop By

              <span className="shopby-nav-chevron">
                ⌄
              </span>

            </button>


            {shopByOpen && (

              <div className="shopby-mega-menu">


                {/* INTRO */}

                <div className="shopby-mega-intro">

                  <span>
                    DISCOVER YOUR STYLE
                  </span>

                  <h3>
                    Shop by
                    <br />
                    <em>
                      what speaks to you.
                    </em>
                  </h3>

                  <button
                    onClick={() =>
                      goToShopBy()
                    }
                  >
                    Explore all Shop By
                    <span>
                      →
                    </span>
                  </button>

                </div>


                {/* COLUMNS */}

                <div className="shopby-mega-columns">


                  {/* GENDER */}

                  <div className="shopby-mega-column">

                    <span className="shopby-mega-label">
                      01 · GENDER
                    </span>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "gender",
                          "Women"
                        )
                      }
                    >
                      Women
                    </button>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "gender",
                          "Men"
                        )
                      }
                    >
                      Men
                    </button>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "gender",
                          "Unisex"
                        )
                      }
                    >
                      Unisex
                    </button>

                  </div>


                  {/* JEWELLERY CATEGORY */}

                  <div className="shopby-mega-column">

                    <span className="shopby-mega-label">
                      02 · JEWELLERY CATEGORY
                    </span>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "category",
                          "Rings"
                        )
                      }
                    >
                      Rings
                    </button>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "category",
                          "Earrings"
                        )
                      }
                    >
                      Earrings
                    </button>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "category",
                          "Necklaces"
                        )
                      }
                    >
                      Necklaces
                    </button>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "category",
                          "Bracelets"
                        )
                      }
                    >
                      Bracelets
                    </button>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "category",
                          "Pendants"
                        )
                      }
                    >
                      Pendants
                    </button>

                  </div>


                  {/* COLLECTION */}

                  <div className="shopby-mega-column">

                    <span className="shopby-mega-label">
                      03 · JEWELLERY COLLECTION
                    </span>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "collection",
                          "Signature"
                        )
                      }
                    >
                      Signature
                    </button>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "collection",
                          "Modern"
                        )
                      }
                    >
                      Modern
                    </button>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "collection",
                          "Heirloom"
                        )
                      }
                    >
                      Heirloom
                    </button>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "collection",
                          "Minimal"
                        )
                      }
                    >
                      Minimal
                    </button>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "collection",
                          "Statement"
                        )
                      }
                    >
                      Statement
                    </button>

                  </div>


                  {/* OCCASION */}

                  <div className="shopby-mega-column">

                    <span className="shopby-mega-label">
                      04 · OCCASION
                    </span>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "occasion",
                          "Everyday"
                        )
                      }
                    >
                      Everyday
                    </button>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "occasion",
                          "Wedding"
                        )
                      }
                    >
                      Wedding
                    </button>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "occasion",
                          "Party"
                        )
                      }
                    >
                      Party
                    </button>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "occasion",
                          "Gifting"
                        )
                      }
                    >
                      Gifting
                    </button>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "occasion",
                          "Celebration"
                        )
                      }
                    >
                      Celebration
                    </button>

                  </div>


                  {/* OFFERS */}

                  <div className="shopby-mega-column shopby-mega-offers">

                    <span className="shopby-mega-label">
                      05 · OFFERS
                    </span>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "offers",
                          "Featured Offers"
                        )
                      }
                    >
                      Featured Offers
                    </button>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "offers",
                          "Special Savings"
                        )
                      }
                    >
                      Special Savings
                    </button>

                    <button
                      onClick={() =>
                        goToShopBy(
                          "offers",
                          "Limited Pieces"
                        )
                      }
                    >
                      Limited Pieces
                    </button>

                  </div>

                </div>

              </div>

            )}

          </div>


          {/* NEW ARRIVALS */}

          <button
            className={
              isActive("/new-arrivals")
                ? "site-nav-active"
                : ""
            }
            onClick={goToNewArrivals}
          >
            New Arrivals
          </button>


          {/* BEST SELLERS */}

          <button
            className={
              isActive("/best-sellers")
                ? "site-nav-active"
                : ""
            }
            onClick={() =>
              navigate("/best-sellers")
            }
          >
            Best Sellers
          </button>


          {/* GIFTING */}

          <button
            className={
              isActive("/gifting")
                ? "site-nav-active"
                : ""
            }
            onClick={() =>
              navigate("/gifting")
            }
          >
            Gifting
          </button>


          {/* POP */}

          <button
            className={`pop-link ${
              isActive("/pop")
                ? "site-nav-active"
                : ""
            }`}
            onClick={() =>
              navigate("/pop")
            }
          >
            ✦ POP
          </button>


          {/* PERSONAL FAVOURITES */}

          <button
            className={
              isActive("/personal-favourites")
                ? "site-nav-active"
                : ""
            }
            onClick={() =>
              navigate("/personal-favourites")
            }
          >
            Personal Favourites
          </button>


          {/* ABOUT */}

          <button
            className={
              isActive("/about")
                ? "site-nav-active"
                : ""
            }
            onClick={() =>
              navigate("/about")
            }
          >
            About Us
          </button>

        </nav>

      </header>

    </>
  );
}


export default SiteHeader;