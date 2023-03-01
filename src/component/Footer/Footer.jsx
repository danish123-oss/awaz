function Footer() {
  return (
    <footer id="footer" class="site-footer">
      <div
        class="wp-block-group alignfull container-wrap has-background"
        style={{ backgroundColor: "#969ba00d" }}
      >
        <div class="wp-block-group__inner-container">
          <div
            style={{ height: 30 }}
            aria-hidden="true"
            class="wp-block-spacer"
          ></div>

          <p
            class="has-text-align-left no-margin has-text-color"
            style={{ color: "#888888", fontSize: 11 }}
          >
            @ Copyright 2023 Awaz. All Rights Reserved
          </p>

          <p style={{ fontSize: 11 }}>
            <a href="/" data-type="page" data-id="1168">
              Service Terms
            </a>{" "}
            •{" "}
            <a href="/" data-type="page" data-id="9">
              Music Policy
            </a>{" "}
            • <a href="/">Cookie Warnings</a> • <a href="/">Support</a> •{" "}
            <a href="mailto:hey@flatfull.com">Feedback</a>
          </p>

          <div
            style={{ height: 40 }}
            aria-hidden="true"
            class="wp-block-spacer"
          ></div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
