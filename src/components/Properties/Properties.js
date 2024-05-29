import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge, Box, Text } from "@chakra-ui/react";

import { getAllPropertiesApi } from "../Api/API";

function Properties() {
  const [propertyData, setPropertyData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [sortKey, setSortKey] = useState("id");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSortKeyChange = (e) => {
    setSortKey(e.target.value);
  };

  const propertiesToDisplay = propertyData
    .filter((property) => {
      const { title } = property;
      return `${title}`.toLowerCase().includes(searchInput.toLowerCase());
    })
    .sort((a, b) => {
      if (sortKey === "title") {
        const titleA = a.title.toLowerCase;
        const titleB = b.title.toLowerCase;
        if (titleA < titleB) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      } else if (sortKey === "price") {
        return a.price - b.price;
      } else if (sortKey === "purpose") {
        const purposeA = a.purpose.toLowerCase;
        const purposeB = b.purpose.toLowerCase;
        if (purposeA < purposeB) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return a.id - b.id; //default sorted by ID
      }
    });

  async function fetchPropertiesData() {
    try {
      setError("");
      setLoading(true);
      let data = await getAllPropertiesApi();
      setPropertyData(data);
    } catch (e) {
      console.log(e.response);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchPropertiesData();
  }, []);

  function showData() {
    if (!propertiesToDisplay.length) {
      return <div>No result found for {searchInput}</div>;
    }
    return (
      <Box>
        <div>
          <input
            type="text"
            value={searchInput}
            onChange={handleChange}
            placeholder="Search by property type"
          />
          <label>Sort by:</label>
          <select value={sortKey} onChange={handleSortKeyChange}>
            <option value="id">default</option>
            <option value="title">title</option>
            <option value="price">price</option>
            <option value="purpose">purpose</option>
          </select>
        </div>

        <Box>
          {propertiesToDisplay.map(
            ({
              id,
              title,
              description,
              price,
              location,
              purpose,
              is_favorite,
              image_url,
            }) => {
              return (
                <Box
                  key={id}
                  marginBottom="4rem"
                  marginLeft="6rem"
                  backgroundColor="#fff"
                >
                  <Link to={`/properties/${id}`}>
                    <Box
                      backgroundImage={`url('${image_url}')`}
                      height="250px"
                      width="750px"
                      backgroundPosition="center center"
                      backgroundSize="cover"
                      position="relative"
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                    >
                      <Box margin="1rem">
                        <Badge colorScheme="green" height="2rem">
                          <Text fontSize="md" color="black">
                            {purpose}
                          </Text>
                        </Badge>
                      </Box>
                      <Box
                        height="45%"
                        bgGradient="linear(to-t, #0a0b1cd9, $ffff00 100%)"
                        display="flex"
                        alignItems="flex-end"
                      >
                        <Text
                          fontSize="4xl"
                          fontWeight="bold"
                          color={"whiteAlpha.800"}
                          m="4"
                        >
                          ${price}
                        </Text>
                      </Box>
                    </Box>
                    <Box
                      paddingTop="2"
                      alignContent="end"
                      justifyContent="right"
                    >
                      <Text fontSize="3xl" fontWeight="bold">
                        {title}
                      </Text>
                    </Box>
                  </Link>
                </Box>
              );
            }
          )}
        </Box>
      </Box>
    );
  }
  return (
    <Box>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <>
          {propertyData.length === 0 ? (
            <Text>Please go and create a Property</Text>
          ) : (
            showData()
          )}
        </>
      )}
    </Box>
  );
}

export default Properties;
