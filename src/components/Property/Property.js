import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Box, Image, Text, Flex, Spacer, Button } from "@chakra-ui/react";

import { getPropertyByIdApi, deletePropertyApi } from "../Api/API";

function Property() {
  const [property, setProperty] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchPropertyById(id);
  }, []);

  async function fetchPropertyById(id) {
    try {
      let result = await getPropertyByIdApi(id);
      setProperty(result.data[0]);
    } catch (err) {
      return err;
    }
  }
  const deleteProperty = async () => {
    try {
      const response = await deletePropertyApi(id);

      const { title } = response.data;
      alert(`Property ${title} has been deleted`);
      navigate("/properties");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Box>
        {property && (
          <Box key={property.id} width="900px" overflow="hidden" p="1">
            <Image
              alt="property"
              src={property.image_url}
              width={1000}
              height={500}
            />
            <Box w="full" p="6">
              <Flex paddingTop="2" alignItems="center">
                <Text fontSize="4xl" fontWeight="bold" color={"B"} mtop="6">
                  {property.title}
                </Text>
                <Box paddingRight="3" color="green.400"></Box>
                <Text fontWeight="bold" fontSize="lg">
                  USD {property.price}
                </Text>
                <Spacer />
              </Flex>
            </Box>
            <Box marginTop="2">
              <Text lineHeight=".05" color="gray.800">
                {property.description}
              </Text>
            </Box>
            <Flex
              flexWrap="wrap"
              textTransform="uppercase"
              justifyContent="space-between"
            >
              <Flex
                justifyContent="space-between"
                w="400px"
                borderBottom="1px"
                borderColor="gray.100"
                p="3"
              >
                <Text>Purpose</Text>
                <Text fontWeight="bold">{property.purpose}</Text>
              </Flex>

              <Box maxWidth="1000px" margin="auto" p="4">
                <Box display="flex" gap="1.5">
                  <Box>
                    <Link to={`/properties/${id}/edit`}>
                      <Button>Edit</Button>
                    </Link>
                  </Box>
                  <Box>
                    <Button onClick={() => deleteProperty()}>Delete</Button>
                  </Box>
                  <Box>
                    <Button onClick={() => navigate("/properties")}>
                      Back
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Property;
