import React from "react";
import "./accordian.css";
import arrowIconDown from "./images/icon-arrow-down.svg";

interface Item {
  index: number;
  label: string;
  content: string;
}

const content =
  "No more than 2GB. All files in your account must fit your allotted storage space";

const items: Item[] = [
  {
    index: 0,
    label: "How many team members can I invite?",
    content,
  },
  { index: 1, label: "What is the maximum file upload size?", content },
  { index: 2, label: "How do I reset my password?", content },
  { index: 3, label: "Can I cancel my subscription?", content },
  { index: 4, label: "Do you provide additional support?", content },
];

function Accordian() {
  const [selectedIndex, setselectedIndex] = React.useState<number>(-1);

  return (
    <>
      {items.map((item) => (
        <AccordianItem
          key={item.index}
          label={item.label}
          isCollapsed={selectedIndex !== item.index}
          onClick={() => setselectedIndex(item.index)}
        >
          {item.content}
        </AccordianItem>
      ))}
    </>
  );
}

interface AccordianItemProps {
  label: string;
  onClick: () => void;
  isCollapsed: boolean;
  children: React.ReactNode;
}

function AccordianItem({
  label,
  onClick,
  isCollapsed,
  children,
}: AccordianItemProps) {
  return (
    <div className="item">
      <button className="accordian-button" onClick={onClick}>
        <span className={isCollapsed ? "un-selected" : "selected"}>
          {label}
        </span>
        <img
          className={isCollapsed ? "arrow-icon-down" : "arrow-icon-up"}
          src={arrowIconDown}
          alt="read more"
        />
      </button>
      <div
        className={`accordian-content ${
          isCollapsed ? "collapsed" : "expanded"
        }`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordian;
