import React from "react";
import "./MiniTopBar.css";

const MiniTopBar = ({ onClose, title }) => {
  return (
    <div className="mini-topbar">
      {title && <span className="mini-title">{title}</span>}
      <button className="close-btn" aria-label="Back">
        ←
      </button>
    </div>
  );
};

export default MiniTopBar;
