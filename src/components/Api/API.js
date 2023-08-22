import Axios from "./Axios";

async function getAllPropertiesApi() {
  try {
    let result = await Axios.get("/Properties");
    return result;
  } catch (err) {
    console.log(err);
  }
}
async function getPropertyByIdApi(id) {
  try {
    let result = await Axios.get(`/properties/${id}`);
    return result;
  } catch (err) {
    console.log(err);
  }
}
async function updatePropertyByIdApi(id, updatedProperty) {
  try {
    let result = await Axios.put(`/properties/${id}`, updatedProperty);
    return result;
  } catch (err) {
    console.log(err);
  }
}
async function deletePropertyApi(id) {
  try {
    let result = await Axios.delete(`/properties/${id}`);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function createPropertyApi(property) {
  try {
    let result = await Axios.post("/Properties", property);
    return result;
  } catch (err) {
    console.log(err);
  }
}

export {
  getAllPropertiesApi,
  getPropertyByIdApi,
  updatePropertyByIdApi,
  deletePropertyApi,
  createPropertyApi,
};
