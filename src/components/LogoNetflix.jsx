import logoSrc from "../assets/netflix_logo.png";

const LogoNetflix = () => {
  return (
    <div className="navbar-brand">
      <img
        src={logoSrc}
        alt="Netflix Logo"
        style={{ width: "100px", height: "auto" }}
      />
    </div>
  );
};

export default LogoNetflix;
