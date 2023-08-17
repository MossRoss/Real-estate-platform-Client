import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// import { getAllProperties } from "../Api/API";

import { getAllProperties } from "../Api/API";

function Properties() {
  const [propertyData, setPropertyData] = useState([]);

  async function fetchPropertiesData() {
    try {
      let result = await getAllProperties();
      console.log(result.data);
      setPropertyData(result.data);
      console.log(propertyData);
    } catch (e) {
      console.log(e.response);
    }
  }
  useEffect(() => {
    fetchPropertiesData();
  }, []);

  return (
    <div>
      <ul>
        {propertyData.map(
          ({ id, title, description, price, location, image_url }) => {
            return <li key={id}> {title}- see this property</li>;
          }
        )}
      </ul>
    </div>
  );
}

export default Properties;
