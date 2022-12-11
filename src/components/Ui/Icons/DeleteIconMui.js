import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";

import './Icon.css'

const DeleteIconMui = (props) => {
  return (
    <>
      <DeleteIcon
        className="delete-button action-button"
        onClick={props.handleDelete}
        sx={{
          color: "#4f5271",
          "&:hover": { color: "#faf4e5" },
          transition: 'all ease 0.2s'
        }}
      />
    </>
  );
};

export default DeleteIconMui;
