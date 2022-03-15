import React from "react";
import {
   Button
} from './styles';
const PrimaryButton = ({ title, style, onClick, disabled }) => {
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

export default PrimaryButton;
