import imagen1 from "../images/logo.png"
const Navbar = () => {
  return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={imagen1} style={{ height:"40px"}}/> Formula 1</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li>
          <a class="nav-link" href="#">Inicio</a>
        </li>
        <li>
          <a class="nav-link" href="#">Pilotos</a>
        </li>
        <li>
          <a class="nav-link" href="#">Tienda</a>
        </li>
        <li>
          <a class="nav-link" href="#">Pilotos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );

};
export default Navbar