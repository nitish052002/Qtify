import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function NavigationTab({ updateLabel }) {
  const [value, setValue] = React.useState("all");

  const handler = (event, label) => {
    console.log(event)
    setValue(label);
    updateLabel(label);
  };
  

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handler}
        textColor="#34c94b"
        indicatorColor="#34c94b"
        aria-label="primary tabs example"
        TabIndicatorProps={{
          style: {
            background: "var(--color-primary)",
            height: 3,
            fontWeight: "bolder",
          },
        }}
      >
        <Tab
          sx={{ textTransform: "none", fontWeight: "bolder" }}
          value="all"
          label="All"
        />
        <Tab
          sx={{ textTransform: "none", fontWeight: "bolder" }}
          value="rock"
          label="Rock"
        />
        <Tab
          sx={{ textTransform: "none", fontWeight: "bolder" }}
          value="pop"
          label="Pop"
        />
        <Tab
          sx={{ textTransform: "none", fontWeight: "bolder" }}
          value="jazz"
          label="Jazz"
        />
        <Tab
          sx={{ textTransform: "none", fontWeight: "bolder" }}
          value="blues"
          label="Blues"
        />
      </Tabs>
    </Box>
  );
}
