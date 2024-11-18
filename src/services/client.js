import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function getClientById({ id }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    alert("Não foi possível encontrar um cliente com este ID");
  }
}
