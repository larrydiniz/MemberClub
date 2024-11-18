const infos = document.getElementById("infos");

const name = document.querySelector("#profile .info h3");
const since = document.querySelector("#profile .info p");
const img = document.querySelector("#profile .img");

export function clientShow({ client }) {
  try {
    name.innerHTML = "";
    since.innerHTML = "";
    img.innerHTML = "";

    infos.classList.remove("hidden");
    infos.classList.add("show");

    const clientImage = document.createElement("img");
    clientImage.setAttribute("src", `${client.avatar}`);
    img.append(clientImage);

    name.append(`${client.name}`);

    since.append(`Cliente desde ${client.clientSince}`);
  } catch (error) {
    console.log(error);
    alert("Não foi possível carregar o cliente");
  }
}
