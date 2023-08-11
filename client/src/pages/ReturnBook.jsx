import { Box } from "@mui/material";

import Header from "components/Header";
import FlexBetween from "components/FlexBetween";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAddMemberMutation } from "state/api";
import BookForm from "components/BookForm";

const ReturnBook = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [addMember] = useAddMemberMutation();

  const navigate = useNavigate();
  const handleFormSubmit = async (values) => {
    console.log(values);
    await addMember(values);
    alert("Member Added Successfully");
    navigate("/members");
  };

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween sx={{ m: "2vh 0" }}>
        <Header title="RETURN BOOKS" subtitle="Issue return of books" />
      </FlexBetween>
      <BookForm isNonMobile={isNonMobile} handleFormSubmit={handleFormSubmit} />
    </Box>
  );
};

export default ReturnBook;
