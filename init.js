document.getElementsByTagName("header")[0].innerHTML = `


       <nav class="navbar navbar-expand-lg navbar-light navbar-transparent py-3">
  <div class="container">

    <!-- LOGGA VÄNSTER -->
    <a class="navbar-brand d-flex align-items-center" href="index.html">
      <img src="pictures/Guldpäron.webp"
      alt="Guld päron" 
       class="logo img-fluid rounded-circle"
      style="width:30px; height:40px;">
      <span class="brand-text ms-2 ">Pärson Hotels</span>
    </a>

    <!-- MOBIL KNAPP -->
    <button class="navbar-toggler bg-light" id="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"  aria-label="Toggle navigation">
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
    <a href="kontakt.html"  id="book-btn" class="btn btn-warning" type="button" aria-label="Boka" alt="Boka">BOKA NU</a>

  </div>
</nav>
`;

document.getElementsByTagName("footer")[0].innerHTML = `

    <div class="row text-center text-md-start">

    
      <div class="col-md-4 mb-4">
        <h1>Kontakta oss</h1>
        <p class="mb-1">Storgatan 1</p>
        <p class="mb-1">123 45 Stad</p>
        <p>Tel: 012-345 6789</p>
      </div>

      
      <div class="col-md-4 mb-4">
        <h1>Snabblänkar</h1>
        <ul class="list-unstyled">
          <li><a href="index.html" class="a.footer-link">Hem</a></li>
          <li><a href="rum.html" class="a.footer-link">Våra Rum</a></li>
           <li><a href="om.html" class="a.footer-link">Om oss</a></li>
        
            <li><a href="Galleri.html" class="a.footer-link">Galleri</a></li>
          <li><a href="kontakt.html" class="a.footer-link">Kontakt</a></li>
        </ul>
      </div>

      
      

    </div>
  
`;

