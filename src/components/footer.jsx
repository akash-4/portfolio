import React from "react";
function Footer() {
  var year = new Date().getFullYear();
  return (
    <section id="footer">
    <footer id="footer">
      <div className="foot">
        <div class="connect p-0">
          <div class="flex-center">
            <a href="https://github.com/akash-4" target="blank"><i class="fa fa-github fa-4x icon-3d"></i></a>
            <a href="https://www.linkedin.com/in/akashagarwal4/" target="blank"><i class="fa fa-linkedin fa-4x icon-3d"></i></a>
            <a href="https://www.instagram.com/akash.psd/" target="blank"><i class="fa fa-instagram fa-4x icon-3d"></i></a>
            <a href="https://twitter.com/akash_agarwal4" target="blank"><i class="fa fa-twitter fa-4x icon-3d"></i></a>
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
</section>
  );
}

export default Footer;