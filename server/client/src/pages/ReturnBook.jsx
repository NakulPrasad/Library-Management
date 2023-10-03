import { Box } from "@mui/material";
import React, { useState } from "react";
import Header from "components/Header";
import FlexBetween from "components/FlexBetween";
import BookForm from "components/BookForm";
import { useReturnBookMutation } from "services/api";

const ReturnBook = () => {
  const [returnBook] = useReturnBookMutation();
  const [alertMessage, setAlertMessage] = useState("");

  const handleFormSubmit = async (values) => {
    try {
      const response = await returnBook(values);
      if (response.data.success) {
        setAlertMessage(response.data.message);
      } else {
        setAlertMessage("Failed to return book: " + response.data.message);
      }
    } catch (error) {
      console.error("Error returning book:", error);
      setAlertMessage("An error occurred while returning the book.");
    }
  };

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween sx={{ m: "2vh 0" }}>
        <Header title="RETURN BOOKS" subtitle="Issue return of books" />
      </FlexBetween>
      {alertMessage && <div className="alert">{alertMessage}</div>}
      <BookForm handleFormSubmit={handleFormSubmit} />
    </Box>
  );
};

export default ReturnBook;
