const imp_cons = document.getElementById("consola");

const cuerpo = document.getElementById("cuerpo");

const titulo = document.getElementById("title");

imp_cons.addEventListener("click", () => {
  const imagen = document.createElement("img");
  imagen.src =
    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original";
  titulo.textContent = "el texto que quieras poner";
  titulo.style.fontSize = "100px";
  cuerpo.appendChild(imagen);
  imagen.style.width = "300px";
});

const semaforo_rojo = document.getElementById("red");

semaforo_rojo.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});

const moving_text = document.getElementById("moving-text");
const text = document.getElementById("text");

moving_text.addEventListener("click", () => {
  text.style.textAlign = "center";
});

const squareBox = document.getElementById("square-box");
const box = document.getElementById("box");

squareBox.addEventListener("click", () => {
  box.style.borderRadius = "50px";
});

const transparecyBtn = document.getElementById("transparecy-btn");
const transparecy = document.getElementById("transparecy");

transparecyBtn.addEventListener("click", () => {
  transparecy.style.color = "#fff";
});

const ghostBtn = document.getElementById("ghost-btn");

ghostBtn.addEventListener("click", () => {
  ghostBtn.style.display = "none";
});

const pet = document.getElementById("pet");
const button = document.getElementById("change-image");

button.addEventListener("click", () => {
  pet.src =
    "https://i.guim.co.uk/img/media/327aa3f0c3b8e40ab03b4ae80319064e401c6fbc/377_133_3542_2834/master/3542.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=34d32522f47e4a67286f9894fc81c863";
});

const link=document.getElementById("link");
const button=document.getElementById("magic-btn");

button.addEventListener("click", () => {
    link.href="https://www.wikipedia.org"
});