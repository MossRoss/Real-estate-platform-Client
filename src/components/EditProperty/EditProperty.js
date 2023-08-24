import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getPropertyByIdApi, updatePropertyByIdApi } from "../Api/API";

function EditProperty() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [property, setProperty] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    purpose: "",
    is_favorite: false,
    image_url: "",
  });

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await getPropertyByIdApi(id);
        setProperty(response.data[0]);
      } catch (error) {
        navigate("/404");
      }
    };
    fetchProperty();
  }, [id]);

  const handleTextChange = (e) => {
    setProperty({
      ...property,
      [e.target.id]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setProperty({
      ...property,
      is_favorite: !property.is_favorite,
    });
  };

  const updateProperty = async (id) => {
    try {
      await updatePropertyByIdApi(id, property);
    } catch (e) {
      console.log(e);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await updateProperty(id);

      navigate(`/properties/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            required
            type="text"
            name="title"
            id="title"
            value={property.title}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            required
            type="text"
            name="description"
            id="description"
            onChange={handleTextChange}
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
            onChange={handleTextChange}
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
            onChange={handleTextChange}
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
            onChange={handleTextChange}
            value={property.purpose}
          />
        </div>

        <div>
          <label>Favorite</label>
          <input
            type="checkbox"
            name="is_favorite"
            id="is_favorite"
            onChange={handleCheckboxChange}
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
            onChange={handleTextChange}
            value={property.image_url}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditProperty;
