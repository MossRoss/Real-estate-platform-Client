import { Box, Text } from "@chakra-ui/react";

function Home() {
  return (
    <Box
      backgroundImage={`url('https://source.unsplash.com/1950x1000/?house')`}
      height="550px"
      backgroundPosition="center center"
      backgroundSize="cover"
      position="relative"
    >
      <Text
        textColor="blackAlpha.900"
        fontSize="4rem"
        fontWeight="extrabold"
        padding="24"
        marginLeft="5rem"
      >
        Wellcome To Your Real Estate Platform.
      </Text>
    </Box>
  );
}

export default Home;
