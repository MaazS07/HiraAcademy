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
    <div className="main">
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      // backgroundColor="radial-gradient(circle, rgba(189,73,124,1) 0%, rgba(0,0,0,1) 63%)"
    >
      <Box
        padding="40px"
        borderRadius="10px"
        background="linear-gradient(to right, #00215E, grey)"
        boxShadow="0px 0px 10px 5px rgba(0,0,0,0.3)"
        width="65vw"
        textAlign="center"
      >
        {loading ? (
          <Spinner size="xl" color="white" />
        ) : (
          <>
            <Flex direction={"column"} gap={"2vw"}>
            <h2 style={{ fontFamily: 'italic', fontSize: '4xl', fontWeight: 'bold', color: 'white', marginBottom: '20px' }}>{book.title}</h2>
            <Text fontSize="2xl" fontWeight="bold"  color="white" margin={"3vh 3vw"}>ISBN :&nbsp;  {book.isbn}</Text>
            <Text fontSize="2xl" fontWeight="bold" color="white"margin={"3vh 3vw"} >Page Count :&nbsp;{book.pageCount}</Text>
            <Text fontSize="2xl" fontWeight="bold" margin={"3vh 3vw"} color="white" >Authors :&nbsp; {book.authors.join(', ')}</Text>
            </Flex>
          </>
        )}
      </Box>
    </Flex>
    </div>
  );
};

export default BookDetails;
