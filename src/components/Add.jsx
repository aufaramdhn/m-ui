import { AddCircle } from "@mui/icons-material";
import { Container, IconButton, Tooltip } from "@mui/material";
import React from "react";

const Add = () => {
  return (
    <>
      <Tooltip title="Add" aria-label="add">
        <IconButton
          color="primary"
          sx={{ position: "fixed", bottom: 10, right: 10 }}
        >
          <AddCircle size="large" />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default Add;
