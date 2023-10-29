import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Accordian.module.css";

export default function AccordionUI({ faq }) {
  return (
    <div className={styles.AccordionWrapper}>
      <h1 className={styles.faqTitle}>FAQs</h1>
      {faq.map(({ question, answer }) => {
        return (
          <Accordion
            key={question}
           
            className={styles.accord}
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
              <Typography>{question}</Typography>
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
                <b>{answer}</b>
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}


