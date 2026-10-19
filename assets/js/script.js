const imp_cons = document.getElementById("consola");

const cuerpo = document.getElementById("cuerpo");

const titulo = document.getElementById("title");

imp_cons.addEventListener("click", () => {
  const imagen = document.createElement("img");
  imagen.src =
    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original";
  titulo.textContent = "el texto que quieras poner";
  cuerpo.appendChild(imagen);
  imagen.style.width='300px';
});
