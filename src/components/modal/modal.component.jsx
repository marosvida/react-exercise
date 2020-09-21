import React, { useState } from "react";

const Modal = ({ handleSave, handleClose }) => {
  const [label, setLabel] = useState("");

  const handleClick = () => {
    handleSave(label);
  };

  return (
    <div>
      <input
        name="changeLabel"
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <button type="submit" onClick={handleClose}>
        Cancel
      </button>
      <button type="submit" onClick={handleClick}>
        Save
      </button>
    </div>
  );
};

export default Modal;
