import stringify from "postcss/lib/stringify";
import { Credential } from "../interface/Credential";

const header = new Headers();
header.append("Content-type", "application/json");

export const login = async (cretentials: Credential) => {
  const userName = cretentials.userName;
  const password = cretentials.password;
  try {
    const result = await fetch("http://localhost:5160/Login/login", {
      method: "post",
      headers: header,
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    });
    return result;
  } catch (error) {
    console.log("ERROR AQUI: " + error)
    throw error;
  }
};
