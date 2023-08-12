import { Box } from "@mui/material";

import Header from "components/Header";
import FlexBetween from "components/FlexBetween";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useImportBookMutation } from "state/api";
import ImportForm from "components/ImportForm";

const Import = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [addMember] = useImportBookMutation();

  const navigate = useNavigate();
  const handleFormSubmit = async (values) => {
    // console.log(values);
    await addMember(values);
    alert("Books Imported Successfully");
    navigate("/dashboard");
  };

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween sx={{ m: "2vh 0" }}>
        <Header title="IMPORT BOOKS" subtitle="Import new books" />
      </FlexBetween>
      <ImportForm
        isNonMobile={isNonMobile}
        handleFormSubmit={handleFormSubmit}
      />
    </Box>
  );
};

export default Import;
