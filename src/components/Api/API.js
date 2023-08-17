import Axios from "./Axios";

async function getAllProperties() {
  try {
    let result = await Axios.get("/Properties");
    return result;
  } catch (e) {
    console.log(e);
  }
}
export { getAllProperties };
