import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, useToast } from '@chakra-ui/react';

const RecipeSubmissionForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && image && link) {
      onSubmit({ title, image, link });
      setTitle('');
      setImage('');
      setLink('');
      toast({
        title: 'Recipe submitted.',
        description: "We've added your recipe to the list.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Error',
        description: 'Please fill in all fields.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} width="100%" maxWidth="500px" margin="auto">
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Recipe Title</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter recipe title" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Image URL</FormLabel>
          <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter image URL" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Recipe Link</FormLabel>
          <Input value={link} onChange={(e) => setLink(e.target.value)} placeholder="Enter recipe link" />
        </FormControl>
        <Button type="submit" colorScheme="teal">Submit Recipe</Button>
      </VStack>
    </Box>
  );
};

export default RecipeSubmissionForm;