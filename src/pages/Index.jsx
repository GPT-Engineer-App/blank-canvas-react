import { Container, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box
        width={{ base: "100%", md: "80%" }}
        height={{ base: "80vh", md: "60vh" }}
        border="2px dashed #ccc"
        borderRadius="md"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="white"
      >
        {/* This is the empty canvas area */}
      </Box>
    </Container>
  );
};

export default Index;