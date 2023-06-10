import React, { useState, ReactNode } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Styles //
import s from "./index.module.scss";

export default function SimpleAccordion({
  AccordionTitle,
  AccordionText,
  titleClassName,
  textClassName,
  sx,
  children, // Add children prop
}: {
  AccordionTitle: string;
  AccordionText: string;
  titleClassName?: string;
  textClassName?: string;
  sx?: any;
  children?: ReactNode; // Declare children prop with type ReactNode
}) {
  return (
    <div>
      <Accordion sx={sx}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={s.accordion__ico} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={titleClassName}>{AccordionTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {children} {/* Render children */}
          <Typography className={titleClassName}>{AccordionText}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
