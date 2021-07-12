const resultado = document.getElementById("resultado");
const btnAgregar = document.querySelector(".btn-info");
      
let contador = 0;

      btnAgregar.addEventListener("click", () => {
        console.log("diste click");
        contador++;
        pintarContador();
      });

      pintarContador = () => {
        resultado.textContent = contador;
      };