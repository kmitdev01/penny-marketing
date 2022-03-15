import React from "react";
import {
   Button
} from './styles';
const SecondaryButton = ({ title, style, onClick, disabled }) => {
  return (
    <Button
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </Button>
  );
};

export default SecondaryButton;
