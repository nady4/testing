import React, { useState } from "react";

type AccordionProps = {
  title: string;
  content: string;
};

function Accordion({ title, content }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h3>{title}</h3>
      <button onClick={() => setOpen(!open)}>{open ? "Close" : "Open"}</button>
      {open && <p>{content}</p>}
    </div>
  );
}

export default Accordion;
