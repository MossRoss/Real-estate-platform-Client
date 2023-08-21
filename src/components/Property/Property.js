import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Box, Image, Text, Flex, Spacer } from "@chakra-ui/react";

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
      console.log(property);
    } catch (err) {
      return err;
      // navigate("/404");
    }
  }
  const deleteProperty = async (id) => {
    try {
      const response = await deletePropertyApi(id);
      console.log(response);
      const { title } = response.data;
      alert(`Property ${title} has been deleted`);
      navigate("/properties");
    } catch (error) {
      console.log(error);
    }
  };

  // const formattedPrice = property.price.toLocalString("en-US", {
  //   style: "currency",
  //   currency: "USD",
  //   maximumFractionDigits: 0,
  // });

  return (
    <Box>
      <Box>
        {property && (
          <Box
            key={property.id}
            width="900px"
            propertyId={property.id}
            overflow="hidden"
            p="1"
          >
            <Image
              alt="property"
              placeholder="blur"
              blurDataURL={property.image_url}
              src={property.image_url}
              width={1000}
              height={500}
            />

            <Box w="full" p="6">
              <Flex paddingTop="2" alignItems="center">
                <Text fontSize="4xl" fontWeight="bold" color={"B"} mtop="6">
                  {property.title}
                </Text>
                <Box paddingRight="3" color="green.400">
                  {/* {isVerified && <GoVerified />} */}
                </Box>
                <Text fontWeight="bold" fontSize="lg">
                  USD {property.price}
                </Text>
                <Spacer />
              </Flex>
              {/* <Flex
                alignItems="center"
                p="1"
                justifyContent="space-between"
                w="250px"
                color="blue.400"
              >
                {rooms}
                <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
                <BsGridFill />
              </Flex> */}
            </Box>
            <Box marginTop="2">
              {/* <Text fontSize="lg" marginBottom="2" fontWeight="bold">
                {title}
              </Text> */}
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
                {/* // backgroundImage={`url('${property.image_url}')`} 
                // title: {property.title}
                // description: {property.description}
                // price: {"price"}
                // location: {property.location}
                // favorite: {property.is_favorite ? "true" : "false"}*/}
                {/* <img {property.image_url} /> */}

                <Link to={`/properties/${id}/edit`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => deleteProperty()}>Delete</button>
                <button onClick={() => navigate("/properties")}>Back</button>
              </Box>
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Property;
