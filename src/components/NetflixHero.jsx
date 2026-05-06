import { Button } from "react-bootstrap";

const NetflixHero = () => {
  return (
    <div
      className="position-relative text-white mb-4"
      style={{ height: "50vh", overflow: "hidden" }}
    >
      <img
        src="https://th.bing.com/th/id/OIP.x0BYF2nRoBmeurBc_ZhQcAHaEK?w=263&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
        alt="Hero Banner"
        className="w-100 h-100"
        style={{ objectFit: "cover", opacity: "0.6" }}
      />
      <div
        className="position-absolute bottom-0 start-0 p-5 w-100"
        style={{ background: "linear-gradient(to top, black, transparent)" }}
      >
        <h1 className="display-2 fw-bold">Interstellar</h1>
        <p className="fs-5 w-50 d-none d-md-block">
          Un gruppo di astronauti viaggia attraverso un wormhole alla ricerca di
          una nuova casa per l'umanità.
        </p>
        <div className="d-flex gap-2">
          <Button variant="light" className="fw-bold px-4">
            <i className="bi bi-play-fill"></i> Play
          </Button>
          <Button variant="outline-light" className="fw-bold px-4">
            <i className="bi bi-info-circle"></i> Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NetflixHero;
