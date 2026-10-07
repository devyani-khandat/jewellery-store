import "../styles/siteFooter.css";

function SiteFooter() {
  return (
    <footer className="site-footer">

      <div className="site-footer-top-line"></div>

      <div className="site-footer-contact">

        {/* EMAIL */}
        <div className="site-footer-item">
          <span className="site-footer-number">01</span>

          <div>
            <p className="site-footer-label">EMAIL</p>
            <a href="mailto:hello@maisonjewellery.com">
              hello@maisonjewellery.com
            </a>
          </div>
        </div>


        {/* PHONE */}
        <div className="site-footer-item">
          <span className="site-footer-number">02</span>

          <div>
            <p className="site-footer-label">PHONE</p>
            <a href="tel:+910000000000">
              +91 00000 00000
            </a>
          </div>
        </div>


        {/* SOCIAL */}
        <div className="site-footer-item">
          <span className="site-footer-number">03</span>

          <div>
            <p className="site-footer-label">FOLLOW</p>

            <div className="site-footer-socials">
              <a href="#" aria-label="Instagram">
                Instagram
              </a>

              <span>·</span>

              <a href="#" aria-label="Pinterest">
                Pinterest
              </a>
            </div>
          </div>
        </div>

      </div>


      <div className="site-footer-bottom">

        <span className="site-footer-brand">
          MAISON JEWELLERY HOUSE
        </span>

        <div className="site-footer-rule"></div>

        <span className="site-footer-tagline">
          MADE TO BE REMEMBERED
        </span>

      </div>

    </footer>
  );
}

export default SiteFooter;