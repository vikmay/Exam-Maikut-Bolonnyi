import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Styles //
import s from "./index.module.scss";

export default function SimpleAccordion() {
  const [accordionTitle, setAccordionTitle] = useState("Accordion 1");
  const [accordionText, setAccordionText] = useState("Lorem");
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={s.accordion__ico} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{accordionTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{accordionText}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
