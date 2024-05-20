import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge, Box, Text } from "@chakra-ui/react";

import { getAllPropertiesApi } from "../Api/API";

function Properties() {
  const [propertyData, setPropertyData] = useState([]);
  const [error, setError] = useState("");

  async function fetchPropertiesData() {
    try {
      let data = await getAllPropertiesApi();

      setPropertyData(data);
      setError("");
    } catch (e) {
      console.log(e.response);
      setError(e.message);
    }
  }
  useEffect(() => {
    fetchPropertiesData();
  }, []);

  function showData() {
    return (
      <Box>
        <Box>
          {propertyData.map(
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
      {propertyData.length === 0 ? (
        <Text>Please go and create a Property</Text>
      ) : (
        showData()
      )}
    </Box>
  );
}

export default Properties;
