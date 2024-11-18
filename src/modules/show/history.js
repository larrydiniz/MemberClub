const count = document.querySelector("#visit-history .header span");
const historyList = document.querySelector("#visit-history ul");

export function historyShow({ client }) {
  try {
    count.innerHTML = "";
    historyList.innerHTML = "";

    count.append(`${client.loyaltyCard.totalCuts} cortes`);

    client.appointmentHistory.map((appointment) => {
      const li = document.createElement("li");

      const span = document.createElement("span");

      const date = document.createElement("h3");
      date.textContent = appointment.date;

      const time = document.createElement("p");
      time.textContent = appointment.time;

      span.append(date, time);

      const img = document.createElement("div");

      const check = document.createElement("img");
      check.setAttribute("src", "src/assets/icons/check.svg");

      img.append(check);

      li.append(span, img);

      historyList.append(li);
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível carregar o histórico de cortes do cliente");
  }
}
