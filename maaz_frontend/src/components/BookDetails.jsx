import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Text, Spinner, Flex } from '@chakra-ui/react';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await axios.get(`https://softwium.com/api/books/${id}`);
      const { data } = response;
      setBook(data);
      setLoading(false);
    } catch (error) {
      console.error("There's an error in fetching data of this book", error);
    }
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      backgroundColor="radial-gradient(circle, rgba(189,73,124,1) 0%, rgba(0,0,0,1) 63%)"
    >
      <Box
        padding="40px"
        borderRadius="10px"
        background="linear-gradient(to right, #00215E, grey)"
        boxShadow="0px 0px 10px 5px rgba(0,0,0,0.3)"
        width="70%"
        maxWidth="800px"
        textAlign="center"
      >
        {loading ? (
          <Spinner size="xl" color="white" />
        ) : (
          <>
            <h2 style={{ fontFamily: 'italic', fontSize: '4xl', fontWeight: 'bold', color: 'white', marginBottom: '20px' }}>{book.title}</h2>
            <Text fontSize="2xl" fontWeight="bold" color="white">ISBN: {book.isbn}</Text>
            <Text fontSize="2xl" fontWeight="bold" color="white" >Page Count: {book.pageCount}</Text>
            <Text fontSize="2xl" fontWeight="bold" color="white" >Authors: {book.authors.join(', ')}</Text>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default BookDetails;
