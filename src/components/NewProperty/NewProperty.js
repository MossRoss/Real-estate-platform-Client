import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPropertyApi } from "../Api/API";

function NewProperty() {
  let navigate = useNavigate();

  const [property, setProperty] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    purpose: "",
    is_favorite: false,
    image_url: "",
  });

  async function handleCreateProperty(e) {
    e.preventDefault();
    try {
      await createPropertyApi(property);
      setProperty({
        id: "",
        title: "",
        description: "",
        price: "",
        location: "",
        purpose: "",
        is_favorite: false,
        image_url: "",
      });

      navigate(`/properties`);
    } catch (e) {
      console.log(e);
    }
  }
  function handleOnchange(id, value) {
    setProperty({
      ...property,
      [id]: value,
    });
  }

  return (
    <div>
      <form onSubmit={handleCreateProperty}>
        <div>
          <label>Title</label>
          <input
            required
            type="text"
            name="title"
            id="title"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={property.title}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            required
            type="text"
            name="description"
            id="description"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={property.description}
          />
        </div>

        <div>
          <label>Price</label>
          <input
            required
            type="number"
            name="price"
            id="price"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={property.price}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            required
            type="text"
            name="location"
            id="location"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={property.location}
          />
        </div>
        <div>
          <label>Purpose</label>
          <input
            required
            type="Text"
            name="purpose"
            id="purpose"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={property.purpose}
          />
        </div>
        <div>
          <label>Favorite</label>
          <input
            type="checkbox"
            name="is_favorite"
            id="is_favorite"
            onChange={(e) => handleOnchange(e.target.id, e.target.checked)}
            checked={property.is_favorite}
          />
        </div>

        <div>
          <label>Image_url</label>
          <input
            required
            type="text"
            name="image_url"
            id="image_url"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={property.image_url}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewProperty;
