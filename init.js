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
          <a class="nav-link " href="galleri.html">Galleri</a>
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

document.getElementsByTagName( "footer")[0].innerHTML = `

    <div class="card text-center">

      <div class="card-body ">
        <figure>
          <blockquote class="blockquote">
            <p>Roses for every special moment</p>
          </blockquote>
          <figcaption class="blockquote-footer ">
            Someone famous in <cite title="Source Title">Bouquettis</cite>
          </figcaption>
        </figure>
      </div>

    </div>


`;

