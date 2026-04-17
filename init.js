document.getElementsByTagName("header")[0].innerHTML = `


       <nav class="navbar navbar-expand-lg navbar-light navbar-transparent py-3">
  <div class="container">

    <!-- LOGGA VÄNSTER -->
    <a class="navbar-brand d-flex align-items-center" href="index.html">
      <img src="https://thumbs.dreamstime.com/b/gl%C3%A4nt-gyllene-p%C3%A4ron-av-guld-p%C3%A5-vit-bakgrund-som-%C3%A4r-perfekt-f%C3%B6r-opulent-dekortematreklam-och-konstn%C3%A4rlig-reklam-decour-themes-303121975.jpg?w=992"
      alt="Pärson Hotels"
      class="logo img-fluid rounded-circle"
      style="width:40px; height:40px;">
      <span class="brand-text ms-2 ">Pärson Hotels</span>
    </a>

    <!-- MOBIL KNAPP -->
    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- MENY MITTEN -->
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav gap-4">

        <li class="nav-item">
          <a class="nav-link " href="index.html">Hem</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="rum.html">Våra Rum</a>
        </li>

        <li class="nav-item">
          <a class="nav-link " href="om.html">Om oss</a>
        </li>

        <li class="nav-item">
          <a class="nav-link " href="Galleri.html">Galleri</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="kontakt.html">Kontakt</a>
        </li>

      </ul>
    </div>

    <!-- BOKA KNAPP HÖGER -->
    <a href="bokning.html" class="btn btn-warning">BOKA NU</a>

  </div>
</nav>
`;

document.getElementsByTagName("foot")[0].innerHTML = `
<footer class="bg-dark text-light py-4">
    <div class="row text-center text-md-start">

    
      <div class="col-md-4 mb-4">
        <h5>Kontakta oss</h5>
        <p class="mb-1">Storgatan 1</p>
        <p class="mb-1">123 45 Stad</p>
        <p>Tel: 012-345 6789</p>
      </div>

      
      <div class="col-md-4 mb-4">
        <h5>Snabblänkar</h5>
        <ul class="list-unstyled">
          <li><a href="index.html" class="footer-link">Hem</a></li>
          <li><a href="#" class="footer-link">Våra Rum</a></li>
          <li><a href="#" class="footer-link">Spa & Relax</a></li>
          <li><a href="#" class="footer-link">Kontakt</a></li>
        </ul>
      </div>

      
      <div class="col-md-4 mb-4 text-md-end">
        <h5>Följ oss</h5>
        
      </div>

    </div>
    </footer>
`;

