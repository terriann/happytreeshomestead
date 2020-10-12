import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <p className="text-center">
          &copy; 2018-{year} Happy Trees Homestead &middot; Hosted on{" "}
          <a
            href="https://github.com/terriann/happytreeshomestead"
            className="text-white"
          >
            github
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
