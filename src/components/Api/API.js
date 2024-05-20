// import Axios from "./Axios";

const API_URL = process.env.REACT_APP_API_URL;

async function getAllPropertiesApi() {
  try {
    // let result = await Axios.get("/Properties");
    //return result;
    const response = await fetch(`${API_URL}/properties`);
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = `Error: ${response.status} ${response.statusText}`;
      throw new Error(errorMsg);
    } else {
      return data;
    }
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}
async function getPropertyByIdApi(id) {
  try {
    // let result = await Axios.get(`/properties/${id}`);
    // return result;
    const response = await fetch(`${API_URL}/properties/${id}`);
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = `Error: ${response.status} ${response.statusText}`;
      throw new Error(errorMsg);
    } else {
      return data;
    }
  } catch (err) {
    console.error(err.message);
  }
}
async function updatePropertyByIdApi(id, updatedProperty) {
  try {
    // let result = await Axios.put(`/properties/${id}`, updatedProperty);
    // return result;
    const response = await fetch(`/properties/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProperty),
    });

    if (!response.ok) {
      const errorMsg = `Error: ${response.status} ${response.statusText}`;
      throw new Error(errorMsg);
    }
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err.message);
  }
}
async function deletePropertyApi(id) {
  try {
    // let result = await Axios.delete(`/properties/${id}`);
    // return result;
    const response = await fetch(`/properties/${id}`, {
      method: "PUT",
    });
    if (!response.ok) {
      const errorMsg = `Error: ${response.status} ${response.statusText}`;
      throw new Error(errorMsg);
    }
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err.message);
  }
}

async function createPropertyApi(property) {
  try {
    // let result = await Axios.post("/Properties", property);
    // return result;

    const response = await fetch(`/properties`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(property),
    });
    if (!response.ok) {
      const errorMsg = `Error: ${response.status} ${response.statusText}`;
      throw new Error(errorMsg);
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err.message);
  }
}

export {
  getAllPropertiesApi,
  getPropertyByIdApi,
  updatePropertyByIdApi,
  deletePropertyApi,
  createPropertyApi,
};
