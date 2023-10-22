import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Accordian.module.css";

export default function AccordionUI() {
  return (
    <div className={styles.AccordionWrapper}>
      <h1>FAQs</h1>
      <Accordion
        sx={{
          width: "800px",
          backgroundColor: "var(--color-black)",
          border: "solid 1px var(--color-white)",
          color: "var(--color-white)",
          marginBottom: "20px",
          borderRadius: "8px!important",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{ color: "var(--color-primary)", fontSize: "3rem" }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is Q-TIfy free to use ?</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "var(--color-white)",
            color: "var(--color-black)",
            paddingTop: "20px",
            borderRadius: "0 0 8px 8px!important",
          }}
        >
          <Typography>
            <b>Yes! It is 100% free, and has 0% ads!</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          width: "800px",
          backgroundColor: "var(--color-black)",
          border: "solid 1px var(--color-white)",
          color: "var(--color-white)",
          marginBottom: "20px",
          borderRadius: "8px!important",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{ color: "var(--color-primary)", fontSize: "3rem" }}
            />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can i download and listen to songs offline ? </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "var(--color-white)",
            color: "var(--color-black)",
            paddingTop: "20px",
            borderRadius: "0 0 8px 8px!important",
          }}
        >
          <Typography>
            <b>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </b>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
