const cutsRemaining = document.querySelector("#count .info span h3");
const totalCuts = document.querySelector("#count .info .bar-info span");
const progressBar = document.querySelector("#count .info .bar-info .bar div");
const giftModal = document.querySelector(".gift-modal");

export function countShow({ loyalty }) {
  try {
    cutsRemaining.innerHTML = "";
    totalCuts.innerHTML = "";
    progressBar.removeAttribute("id");

    if (loyalty.totalCuts !== 10) {
      giftModal.classList.remove("show");
      giftModal.classList.add("hidden");
    }

    if (loyalty.totalCuts === 10) {
      giftModal.classList.remove("hidden");
      giftModal.classList.add("show");
    }

    cutsRemaining.textContent = loyalty.cutsRemaining;
    totalCuts.textContent = `${loyalty.totalCuts} de 10`;
    progressBar.setAttribute("id", `size${loyalty.totalCuts}`);
  } catch (error) {
    console.log(error);
    alert("Não foi possível carregar o progresso do cliente");
  }
}
