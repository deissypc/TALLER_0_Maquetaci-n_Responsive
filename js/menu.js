const hamburguer = document.getElementById("si");
    const menu = document.getElementById("menu");
    hamburguer.addEventListener("click", (e) => {
      menu.classList.toggle("arriba");
      console.log("click");
    });