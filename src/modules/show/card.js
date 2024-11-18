const cardId = document.querySelector("#card .card-infos #ID");
const cardChecks = document.querySelectorAll("#card .checks .check-item");

export function cardShow({ client }) {
  try {
    cardId.innerHTML = "";
    Array.from(cardChecks).map((card) => {
      card.classList.remove("checked");
    });

    cardId.append(`ID: ${client.id}`);

    for (let i = 0; i < client.loyaltyCard.totalCuts; i++) {
      cardChecks[i].classList.add("checked");
    }
  } catch (error) {
    console.log(error);
    alert("Não foi possível carregar o cartão fidelidade do cliente");
  }
}
