import React from "react";
function Footer() {
  var year = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="foot">
        <div class="connect p-0">
          <div class="flex-center">
            <a href=""><i class="fa fa-github fa-4x icon-3d"></i></a>
            <a href=""><i class="fa fa-facebook fa-4x icon-3d"></i></a>
            <a href=""><i class="fa fa-instagram fa-4x icon-3d"></i></a>
            <a href=""><i class="fa fa-twitter fa-4x icon-3d"></i></a>
          </div>
        </div>
        <div className="full">
          <div className="container">
            <div className="copyright">
              &copy; Copyright <strong>Akash Agarwal</strong>.</div>

          </div>
        </div>

      </div>
    </footer>

  );
}

export default Footer;