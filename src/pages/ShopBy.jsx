import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "../styles/shopBy.css";


/* =========================================================
   FILTER GROUPS
========================================================= */

const FILTER_GROUPS = [

  {
    id: "gender",
    number: "01",
    label: "Gender",
    description: "Discover pieces made for every expression.",
    options: [
      "Women",
      "Men",
      "Unisex",
    ],
  },

  {
    id: "category",
    number: "02",
    label: "Jewellery Category",
    description: "Find the silhouette that speaks to you.",
    options: [
      "Rings",
      "Earrings",
      "Necklaces",
      "Bracelets",
      "Pendants",
      "Bangles",
    ],
  },

  {
    id: "collection",
    number: "03",
    label: "Jewellery Collection",
    description: "Explore different expressions of our jewellery.",
    options: [
      "Signature",
      "Modern",
      "Heirloom",
      "Minimal",
      "Statement",
    ],
  },

  {
    id: "occasion",
    number: "04",
    label: "Occasion",
    description: "Find something for the moments that matter.",
    options: [
      "Everyday",
      "Wedding",
      "Party",
      "Gifting",
      "Celebration",
    ],
  },

  {
    id: "offers",
    number: "05",
    label: "Offers",
    description: "A little more reason to choose something beautiful.",
    options: [
      "Featured Offers",
      "Special Savings",
      "Limited Pieces",
    ],
  },

];


/* =========================================================
   PRODUCTS
========================================================= */

const PRODUCTS = [

  {
    id: 1,
    name: "Elan Ring",
    category: "Rings",
    gender: "Women",
    collection: "Signature",
    occasion: "Everyday",
    offer: "Featured Offers",
    price: "₹18,500",
    image: "/src/assets/products/elan-ring.jpg.png",
  },

  {
    id: 2,
    name: "Rose Halo Earrings",
    category: "Earrings",
    gender: "Women",
    collection: "Modern",
    occasion: "Party",
    offer: "Special Savings",
    price: "₹24,900",
    image: "/src/assets/products/rose-halo-earrings.jpg.png",
  },

  {
    id: 3,
    name: "Solenne Necklace",
    category: "Necklaces",
    gender: "Women",
    collection: "Heirloom",
    occasion: "Wedding",
    offer: "Limited Pieces",
    price: "₹42,000",
    image: "/src/assets/products/solenne-necklace.jpg.png",
  },

  {
    id: 4,
    name: "Celeste Pendant",
    category: "Pendants",
    gender: "Unisex",
    collection: "Minimal",
    occasion: "Everyday",
    offer: "Featured Offers",
    price: "₹16,800",
    image: "/src/assets/products/celeste-pendant.jpg.png",
  },

  {
    id: 5,
    name: "Aurelia Tennis Bracelet",
    category: "Bracelets",
    gender: "Women",
    collection: "Signature",
    occasion: "Celebration",
    offer: "Special Savings",
    price: "₹36,500",
    image: "/src/assets/products/Aurelia Tennis Bracelet.png",
  },

  {
    id: 6,
    name: "Noir Band",
    category: "Rings",
    gender: "Men",
    collection: "Modern",
    occasion: "Everyday",
    offer: "Limited Pieces",
    price: "₹21,000",
    image: "/src/assets/products/noir-band.png",
  },

];


/* =========================================================
   SHOP BY PAGE
========================================================= */

function ShopBy() {

  const [
    searchParams,
    setSearchParams,
  ] = useSearchParams();


  /* =========================================================
     SELECTED FILTERS
     
     The URL is the source of truth.
     
     Example:
     /shop-by?gender=Women
     
     gives:
     selectedFilters.gender === "Women"
  ========================================================= */

  const selectedFilters = {

    gender:
      searchParams.get("gender") || null,

    category:
      searchParams.get("category") || null,

    collection:
      searchParams.get("collection") || null,

    occasion:
      searchParams.get("occasion") || null,

    offers:
      searchParams.get("offers") || null,

  };


  /* =========================================================
     ACTIVE ACCORDION GROUP
  ========================================================= */

  const [
    activeGroup,
    setActiveGroup,
  ] = useState(null);


  /* =========================================================
     RESET SCROLL
     
     IMPORTANT:
     This effect ONLY controls the browser scroll.
     It does not call setState.
  ========================================================= */

  useEffect(() => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

  }, [searchParams]);


  /* =========================================================
     FILTER GROUP CLICK
  ========================================================= */

  const handleGroupClick = (id) => {

    setActiveGroup(
      activeGroup === id
        ? null
        : id
    );

  };


  /* =========================================================
     FILTER OPTION CLICK
  ========================================================= */

  const handleOptionClick = (
    groupId,
    option
  ) => {

    const params =
      new URLSearchParams(
        searchParams
      );


    const currentValue =
      params.get(groupId);


    /*
      Clicking the currently selected
      option removes the filter.
    */

    if (currentValue === option) {

      params.delete(groupId);

    } else {

      /*
        Otherwise select the new option.
      */

      params.set(
        groupId,
        option
      );

    }


    setSearchParams(params);

  };


  /* =========================================================
     CLEAR FILTERS
  ========================================================= */

  const clearFilters = () => {

    setSearchParams({});

  };


  /* =========================================================
     ACTIVE FILTER COUNT
  ========================================================= */

  const activeFilterCount =
    Object.values(
      selectedFilters
    ).filter(Boolean).length;


  /* =========================================================
     FILTER PRODUCTS
  ========================================================= */

  const filteredProducts =
    PRODUCTS.filter(
      (product) => {

        return Object.entries(
          selectedFilters
        ).every(
          ([key, value]) => {

            if (!value) {
              return true;
            }


            /*
              "offers" in the filter system
              corresponds to "offer" in product data.
            */

            const productKey =
              key === "offers"
                ? "offer"
                : key;


            return (
              product[productKey] ===
              value
            );

          }
        );

      }
    );


  /* =========================================================
     PAGE
  ========================================================= */

  return (

    <main className="shopby-page">


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="shopby-intro">


        <div className="shopby-intro-number">

          05 / DISCOVER

        </div>


        <div className="shopby-intro-content">


          <p className="shopby-eyebrow">

            SHOP BY

          </p>


          <h1>

            Find the piece

            <br />

            that feels like <em>you.</em>

          </h1>


          <p className="shopby-intro-text">

            Jewellery has a language of its own.
            Explore by expression, occasion, collection
            or simply follow what catches your eye.

          </p>


        </div>


        <div className="shopby-scroll-note">

          <span>
            SCROLL TO EXPLORE
          </span>

          <span className="shopby-scroll-line"></span>

        </div>


      </section>


      {/* =====================================================
          DISCOVERY FILTERS
      ===================================================== */}

      <section className="shopby-discovery">


        <div className="shopby-section-heading">


          <div>

            <span className="small-label">

              DISCOVER YOUR STYLE

            </span>


            <h2>

              What are you

              <br />

              looking for?

            </h2>

          </div>


          <div className="filter-status">


            <span>

              {activeFilterCount === 0

                ? "No filters selected"

                : `${activeFilterCount} filter${
                    activeFilterCount > 1
                      ? "s"
                      : ""
                  } selected`

              }

            </span>


            {activeFilterCount > 0 && (

              <button
                onClick={clearFilters}
              >

                Clear all

              </button>

            )}


          </div>


        </div>


        {/* =================================================
            FILTER LIST
        ================================================= */}

        <div className="shopby-filter-list">


          {FILTER_GROUPS.map(
            (group) => {

              const isActive =
                activeGroup ===
                group.id;


              const selected =
                selectedFilters[
                  group.id
                ];


              return (

                <div

                  className={`shopby-filter-group ${
                    isActive
                      ? "is-open"
                      : ""
                  } ${
                    selected
                      ? "has-selection"
                      : ""
                  }`}

                  key={group.id}

                >


                  {/* =========================================
                      FILTER HEADER
                  ========================================= */}

                  <button

                    className="shopby-filter-header"

                    onClick={() =>
                      handleGroupClick(
                        group.id
                      )
                    }

                  >


                    <div className="filter-number">

                      {group.number}

                    </div>


                    <div className="filter-main">


                      <h3>

                        {group.label}

                      </h3>


                      <p>

                        {group.description}

                      </p>


                    </div>


                    <div className="filter-current">


                      {selected && (

                        <span>

                          {selected}

                        </span>

                      )}


                    </div>


                    <div className="filter-arrow">

                      {isActive
                        ? "−"
                        : "+"}

                    </div>


                  </button>


                  {/* =========================================
                      FILTER OPTIONS
                  ========================================= */}

                  <div className="shopby-filter-options">


                    <div className="filter-options-inner">


                      {group.options.map(
                        (option) => (

                          <button

                            key={option}

                            className={
                              selected ===
                              option
                                ? "selected"
                                : ""
                            }

                            onClick={() =>
                              handleOptionClick(
                                group.id,
                                option
                              )
                            }

                          >


                            <span className="option-dot"></span>


                            {option}


                          </button>

                        )
                      )}


                    </div>


                  </div>


                </div>

              );

            }
          )}


        </div>


      </section>


      {/* =====================================================
          RESULTS
      ===================================================== */}

      <section className="shopby-results">


        <div className="results-header">


          <div>


            <span className="small-label">

              YOUR SELECTION

            </span>


            <h2>

              Pieces to explore

            </h2>


          </div>


          <span className="results-count">

            {filteredProducts.length} pieces

          </span>


        </div>


        {/* =================================================
            PRODUCTS
        ================================================= */}

        {filteredProducts.length > 0 ? (

          <div className="shopby-product-grid">


            {filteredProducts.map(
              (product, index) => (

                <article

                  className={`shopby-product-card card-${
                    index + 1
                  }`}

                  key={product.id}

                >


                  <div className="product-image-wrap">


                    <img

                      src={product.image}

                      alt={product.name}

                    />


                    <button
                      className="product-heart"
                      aria-label={`Add ${product.name} to favourites`}
                    >

                      ♡

                    </button>


                    <span className="product-index">

                      0{index + 1}

                    </span>


                  </div>


                  <div className="product-info">


                    <div>


                      <span className="product-category">

                        {product.category}

                      </span>


                      <h3>

                        {product.name}

                      </h3>


                    </div>


                    <span className="product-price">

                      {product.price}

                    </span>


                  </div>


                </article>

              )
            )}


          </div>

        ) : (


          /* ===============================================
             NO RESULTS
          =============================================== */

          <div className="no-results">


            <span>

              Nothing here yet.

            </span>


            <h3>

              Try another combination.

            </h3>


            <button
              onClick={clearFilters}
            >

              Reset discovery

            </button>


          </div>

        )}


      </section>


      {/* =====================================================
          CLOSING
      ===================================================== */}

      <section className="shopby-closing">


        <div className="closing-large-word">

          YOURS

        </div>


        <div className="closing-content">


          <span className="small-label">

            SOMETHING PERSONAL

          </span>


          <h2>

            The right piece

            <br />

            is waiting.

          </h2>


          <p>

            Keep exploring until something
            feels unmistakably yours.

          </p>


        </div>


      </section>


    </main>

  );

}


export default ShopBy;