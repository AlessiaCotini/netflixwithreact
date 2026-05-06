import { useState } from "react";

const NavbarSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="search-container d-flex align-items-center">
      <div className={`search-box ${showSearch ? "active" : ""}`}>
        <button className="btn text-white p-0" onClick={toggleSearch}>
          <ion-icon name="search" style={{ fontSize: "1.3rem" }}></ion-icon>
        </button>

        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus={showSearch}
        />
      </div>
    </div>
  );
};

export default NavbarSearch;
