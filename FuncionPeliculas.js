function agregarPelicula() {
  var peliculaFavorita = document.getElementById("pelicula").value;
  var peliculas = document.getElementById("listaPeliculas");
  var nombrePeliculas = document.getElementById("nombrePelicula").value;
  var trailerPelicula = document.getElementById("trailerPeli").value;
  var enlace = document.createElement("a");
  enlace.href = trailerPeli;

  if (peliculaFavorita.endsWith("jpg")) {
    peliculas.innerHTML =
      peliculas.innerHTML +
      "<a href=" +
      trailerPelicula +
      " target=_blank>" +
      "<img src=" +
      peliculaFavorita +
      ">" +
      "</a>";

    peliculas.innerHTML =
      peliculas.innerHTML + "<p>" + nombrePeliculas + "</p>";
  } else {
    alert(
      "El link de la imagen debe de ser con terminación jpg o la imagen debe ser de formato jpg "
    );
  }
}
