const li = document.getElementById("linkedin");

li.addEventListener("click", function() {
  const link = "https://www.linkedin.com/in/ryanzin10/";
  const input = document.createElement("input");
  input.value = link;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  alert("Link copiado para a área de transferência!");
});

const gb = document.getElementById("github");

gb.addEventListener("click", function() {
  const link = "https://github.com/ryanzin10";
  const input = document.createElement("input");
  input.value = link;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  alert("Link copiado para a área de transferência!");
});

const wpp = document.getElementById("whatsapp");

wpp.addEventListener("click", function() {
  const link = "https://api.whatsapp.com/send?phone=5582981053081";
  const input = document.createElement("input");
  input.value = link;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  alert("Link copiado para a área de transferência!");
});