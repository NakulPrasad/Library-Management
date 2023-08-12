import { Box } from "@mui/material";

import Header from "components/Header";
import FlexBetween from "components/FlexBetween";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useIssueBookMutation } from "state/api";
import BookForm from "components/BookForm";

const IssueBook = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [issueBook] = useIssueBookMutation();

  const navigate = useNavigate();
  const handleFormSubmit = async (values) => {
    // console.log(values);
    await issueBook(values);
    alert("Book Issued Successfully");
    navigate("/members");
  };

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween sx={{ m: "2vh 0" }}>
        <Header title="ISSUE BOOKS" subtitle="Issue books to user" />
      </FlexBetween>
      <BookForm isNonMobile={isNonMobile} handleFormSubmit={handleFormSubmit} />
    </Box>
  );
};

export default IssueBook;
