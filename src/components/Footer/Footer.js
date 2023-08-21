import { Box, Text } from "@chakra-ui/react";
import { HiHomeModern } from "react-icons/hi2";

function Footer() {
  return (
    <Box
      backgroundColor="blue.900"
      display="flex"
      padding="2rem"
      alignItems="center"
      flexDirection="column"
      color="White"
    >
      <Box display="flex" gap="1" alignItems="center">
        <HiHomeModern size="20" />
        <Text fontSize="lg" fontWeight="black">
          Moss Real estate
        </Text>
      </Box>
      <Text marginTop="1rem fontSize='xs" textAlign="center"></Text>
      All rights reserved - copyright Moss 2023
    </Box>
  );
}

export default Footer;
