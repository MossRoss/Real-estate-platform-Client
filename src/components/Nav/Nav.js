import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { HiHomeModern } from "react-icons/hi2";

function Nav() {
  return (
    <Box
      color="blue.600"
      paddingY="2rem"
      backgroundColor="beige"
      display={{ base: "none", md: "block" }}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <Flex alignItems="left" justifyContent="space-between">
          <Link to={"/properties"}>
            <Box display="flex" gap="2" alignItems="top">
              <HiHomeModern size="30" />
              <Text fontSize="2xl" fontWeight="black">
                Moss Real estate
              </Text>
            </Box>
          </Link>
          <Link to="/create-property">
            <Button
              padding="1.5rem"
              colorScheme="twitter"
              fontSize="0.8rem"
              fontWeight="medium"
            >
              ADD PROPERTY
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default Nav;
