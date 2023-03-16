const Footer = () => {
  return (
    <div>
      <footer className="p-5 text-white text-center footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <a className="footer-a" href="mailto:chriskeno95@gmail.com">
                Email: Chriskeno95@gmail.com
              </a>
            </div>
            <div className="col-md-4">
              <a className="footer-a" href="https://github.com/chriskeno95">
                Github: @Chriskeno95
              </a>
            </div>
            <div className="col-md-4">
              <a className="footer-a" href="https://www.instagram.com/chriskennedydesigns/">
                Instagram: @Chriskennedydesigns
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;