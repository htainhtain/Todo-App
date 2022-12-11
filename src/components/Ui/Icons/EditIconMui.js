import React from "react";

import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

import './Icon.css'

const EditIconMui = (props) => {
  return (
    <>
      <ModeEditOutlineIcon
        className="edit-button action-button"
        onClick={props.handleEdit}
        sx={{
          color: "#4f5271",
          "&:hover": { color: "#faf4e5" },
          transition: "all ease 0.2s",
        }}
      />
    </>
  );
};

export default EditIconMui;
