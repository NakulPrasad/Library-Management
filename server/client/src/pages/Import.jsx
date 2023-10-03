import { Box } from "@mui/material";
import React, { useState } from "react";
import Header from "components/Header";
import FlexBetween from "components/FlexBetween";
import ImportForm from "components/ImportForm";
import { useImportBookMutation } from "services/api";

const Import = () => {
  const [importBook] = useImportBookMutation();
  const [alertMessage, setAlertMessage] = useState("");
  const handleFormSubmit = async (values) => {
    try {
      const response = await importBook(values);
      if (response.data.success) {
        setAlertMessage(response.data.message);
      } else {
        setAlertMessage("Failed to Import book: " + response.data.message);
      }
    } catch (error) {
      console.error("Error importing book:", error);
      setAlertMessage("An error occurred while importing the book.");
    }
  };

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween sx={{ m: "2vh 0" }}>
        <Header title="IMPORT BOOKS" subtitle="Import new books" />
      </FlexBetween>
      {alertMessage && <div className="alert">{alertMessage}</div>}
      <ImportForm handleFormSubmit={handleFormSubmit} />
    </Box>
  );
};

export default Import;
