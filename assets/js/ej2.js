let cajaCambiante = document.getElementById("caja");

let color1 = document.getElementById("btn-1");
color1.addEventListener("click", function () {
  cajaCambiante.style.backgroundColor = "#e53e3e";
});
let color2 = document.getElementById("btn-2");
color2.addEventListener("click", function () {
  cajaCambiante.style.backgroundColor = "#dd6b20";
});
let color3 = document.getElementById("btn-3");
color3.addEventListener("click", function () {
  cajaCambiante.style.backgroundColor = "#faf089";
});
let color4 = document.getElementById("btn-4");
color4.addEventListener("click", function () {
  cajaCambiante.style.backgroundColor = "#48bb78";
});
let color5 = document.getElementById("btn-5");
color5.addEventListener("click", function () {
  cajaCambiante.style.backgroundColor = "#81e6d9";
});
let color6 = document.getElementById("btn-6");
color6.addEventListener("click", function () {
  cajaCambiante.style.backgroundColor = color6.style.backgroundColor;
});

//$("#caja").setAttribute("style", "background-color: blue");
