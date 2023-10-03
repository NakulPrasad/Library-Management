import { Box } from "@mui/material";
import Header from "components/Header";
import FlexBetween from "components/FlexBetween";
import { useNavigate } from "react-router-dom";
import { useAddMemberMutation } from "services/api";
import MemberForm from "components/MemberForm";

const AddMember = () => {
  //submit
  const [addMember] = useAddMemberMutation();
  const navigate = useNavigate();
  const handleFormSubmit = async (values) => {
    // console.log(values);
    await addMember(values);
    alert("Member Added Successfully");
    navigate("/members");
  };

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween sx={{ m: "2vh 0" }}>
        <Header title="ADD MEMBER" subtitle="Create a new user" />
      </FlexBetween>
      <MemberForm handleFormSubmit={handleFormSubmit} />
    </Box>
  );
};

export default AddMember;
