import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Rating,
  useTheme,
  TextField,
} from "@mui/material";
import Header from "components/Header";
import FlexBetween from "components/FlexBetween";
import { useGetBooksQuery } from "services/api";

const Book = ({
  _id,
  title,
  authors,
  average_rating,
  isbn,
  publisher,
  quantity,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color={theme.palette.secondary[300]}>
          {publisher}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[300]}>
          Quantity: {Number(quantity)}
        </Typography>
        <Rating value={average_rating} readOnly />
        <Typography>Book ID: {_id}</Typography>
        <Typography>ISBN: {isbn}</Typography>
        <Typography>Author: {authors}</Typography>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const { data } = useGetBooksQuery();
  //search
  const [searchQuery, setSearchQuery] = useState("");
  if (!data) {
    return <div>Loading...</div>;
  }
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  // console.log(data);

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Book" subtitle="List of all available books" />
        <Box>
          <TextField
            label="Title, Authors, Publisher"
            variant="standard"
            onChange={handleSearch}
            sx={{
              "& .Mui-focused": {
                color: "blue",
              },
            }}
          />
        </Box>
      </FlexBetween>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        justifyContent="space-between"
        rowGap="20px"
        columnGap="1.33%"
      >
        {data
          .filter(
            ({ title, authors, publisher }) =>
              title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
              publisher.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(
            ({
              bookID,
              title,
              authors,
              average_rating,
              language_code,
              publisher,
              isbn,
              isbn13,
              publication_date,
              quantity,
            }) => (
              <Book
                key={bookID}
                _id={bookID}
                title={title}
                authors={authors}
                average_rating={average_rating}
                language_code={language_code}
                publisher={publisher}
                publication_date={publication_date}
                quantity={quantity}
                isbn13={isbn13}
                isbn={isbn}
              />
            )
          )}
      </Box>
    </Box>
  );
};

export default Dashboard;
