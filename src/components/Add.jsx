import { AddCircle } from "@mui/icons-material";
import { Button, Container, FormControlLabel, IconButton, MenuItem, Modal, Radio, RadioGroup, TextField, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { Box } from "@mui/system";

const Add = () => {
  const [open, setOpen] = useState(false);
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 600,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <IconButton color="primary" sx={{ position: "fixed", bottom: 10, right: 10 }}>
          <AddCircle size="large" />
        </IconButton>
      </Tooltip>
      <Modal open={open}>
        <Container
          sx={{
            width: 500,
            height: 550,
            backgroundColor: "white",
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            margin: "auto",
            [theme.breakpoints.down("sm")]: {
              width: "100vh",
              height: "100vh",
            },
          }}
        >
          <Box sx={{ padding: 2 }}>
            <TextField id="utlined-basic" label="title" size="small" sx={{ width: "100%", marginBottom: 3, marginTop: 3 }} />
            <TextField multiline rows={4} id="outlined-multiline-static" label="Description" size="small" sx={{ width: "100%", marginBottom: 3 }} />
            <TextField select label="Visibility" sx={{ width: "100%", marginBottom: 3 }}>
              <MenuItem value="Public">Public</MenuItem>
              <MenuItem value="Private">Private</MenuItem>
              <MenuItem value="Unlisted">Unlisted</MenuItem>
            </TextField>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" sx={{ marginBottom: 3 }}>
              <FormControlLabel value="Everybody" control={<Radio size="small" />} label="Everybody" />
              <FormControlLabel value="My Friends" control={<Radio size="small" />} label="My Friends" />
              <FormControlLabel value="Nobody" control={<Radio size="small" />} label="Nobody" />
              <FormControlLabel value="Custom" disabled control={<Radio size="small" />} label="Custom (Premium)" />
            </RadioGroup>
            <Box sx={{ width: "100%", marginBottom: 3 }}>
              <Button variant="outlined" color="primary" sx={{ marginRight: 2 }}>
                Create
              </Button>
              <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Container>
      </Modal>
    </>
  );
};

export default Add;
