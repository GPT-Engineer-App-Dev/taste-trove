import { Container, Text, VStack, Heading, Box, Image, SimpleGrid, GridItem, Link } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    image: "/images/spaghetti-carbonara.jpg",
    link: "#"
  },
  {
    title: "Chicken Alfredo",
    image: "/images/chicken-alfredo.jpg",
    link: "#"
  },
  {
    title: "Beef Tacos",
    image: "/images/beef-tacos.jpg",
    link: "#"
  },
  {
    title: "Vegetable Stir Fry",
    image: "/images/vegetable-stir-fry.jpg",
    link: "#"
  }
];

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Recipe Sharing Website</Heading>
        <Text fontSize="xl">Discover and share your favorite recipes!</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {recipes.map((recipe, index) => (
            <GridItem key={index} w="100%">
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={recipe.image} alt={recipe.title} />
                <Box p={6}>
                  <Heading as="h3" size="md" mb={2}>{recipe.title}</Heading>
                  <Link href={recipe.link} isExternal color="teal.500">
                    View Recipe <FaExternalLinkAlt />
                  </Link>
                </Box>
              </Box>
            </GridItem>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;