function Footer() {


const getCurrentYear = () => {
    return new Date().getFullYear();
  };

return (
    <div class="footer_container">
      <div class="row">
        <div class="col-12 col-md-6">
          <p class="text-muted">
            Copyright &copy; Focus Interiors LLC
          </p>
          <p>{getCurrentYear()}</p>
        </div>
        </div>
        
        <div>
        <p className="footer_disclaimer">This website created for educational purposes only<br></br> by Xeniya Plakhotnyuk</p>
        </div>
    </div>
  );
}

export default Footer;