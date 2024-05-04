import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Spinner, Flex, Text, Box } from '@chakra-ui/react';
import { FaBook } from 'react-icons/fa';
import "../stylesheets/style.css"

const GetBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://softwium.com/api/books');
      const { data } = response;
      setBooks(data);
      setLoading(false);
    } catch (error) {
      console.error("There's an error in fetching data", error);
    }
  };

  return (
    <div className='main'>
      <Flex
        direction="column"
        alignItems="center"
        marginTop="5vh"
        min-height="100vh"
        width="100vw"
      >
        <h1 style={{ fontFamily: 'italic', color: 'black', fontSize: "3rem", fontWeight: "bold" }}>
          HiraAcademy
        </h1>
        <Text style={{ fontFamily: 'italic', color: 'black', fontSize: "1.5rem", fontWeight: "bold" }}>
          Name: Maaz Saboowala
        </Text>
        <Text style={{ fontFamily: 'italic', color: 'black', fontSize: "1.5rem", fontWeight: "bold" }}>
          College: Dwarkadas J Sanghvi College of Engineering
        </Text>
        <Text style={{ fontFamily: 'italic', color: 'black', fontSize: "1.5rem", fontWeight: "bold" }}>
          SY Btech in CSE(DS)
        </Text>

        {loading ? (
          <Spinner size="xl" color="white" thickness="4px" />
        ) : (
          <Flex
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            width="90%"
            padding="20px"
          >
            {books.map(book => (
              <Box
                key={book.id}
                borderRadius="10px"
                background="linear-gradient(to right, #00215E,grey)"
                boxShadow="0px 0px 10px 5px rgba(0,0,0,0.3)"
                width="30%"
                minWidth="200px"
                maxWidth="300px"
                height="100px"
                margin="20px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                padding="20px"
                overflow="hidden"
                border="2px solid white"
                transition="all 0.3s"
                _hover={{
                  transform: 'scale(1.05)',
                  boxShadow: '0px 0px 20px 10px rgba(0,0,0,0.5)',
                  cursor: 'pointer',
                  background: "linear-gradient(to right,grey, #00215E)",
                }}
              >


                <FaBook size={24} style={{ marginBottom: '10px', color: "black" }} />
                <Link
                  to={`/${book.id}`}
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    textAlign: 'center',
                    _hover: {
                      color: 'black' 
                    }
                  }}
                >


                  <Text fontSize="md" fontWeight="bold" textAlign="center" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                    {book.title}
                  </Text>
                </Link>
              </Box>
            ))}
          </Flex>
        )}
      </Flex>
    </div>
  );
};

export default GetBooks;
