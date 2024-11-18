import { getClientById } from "../services/client";
import { clientShow } from "./show/client";
import { cardShow } from "./show/card";
import { historyShow } from "./show/history";
import { countShow } from "./show/count";

const form = document.querySelector("form");
const search = document.getElementById("inputSearch");
const regexValidator = /^\d{3}\-\d{3}\-\d{3}\-\d{3}$/;

search.oninput = () => {
  let value = search.value.replace(/[A-Za-z]/g, "");
  search.value = value;
};

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const id = search.value;
    if (!id) return alert("Informe o nome do cliente!");

    const match = id.match(regexValidator);

    if (match === null)
      return alert(
        "Formato inválido. O ID deve seguir o formato 123-456-789-123."
      );

    const client = await getClientById({ id });

    clientShow({ client });
    cardShow({ client });
    historyShow({ client });
    countShow({ loyalty: client.loyaltyCard });
  } catch (error) {
    alert("Não foi possível realizar a busca.");
    console.log(error);
  }
};
