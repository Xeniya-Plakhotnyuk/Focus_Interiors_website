function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="footer">
      <div>
        <div>
          <p>Copyright &copy; Focus Interiors LLC</p>
          <p>{getCurrentYear()}</p>
        </div>
      </div>

      <div>
        <p className="footer_disclaimer">
          This website created for educational purposes only<br></br> by Xeniya
          Plakhotnyuk
        </p>
      </div>
    </div>
  );
}

export default Footer;
