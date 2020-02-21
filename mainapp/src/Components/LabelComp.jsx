import React from "react";
import { Label } from "semantic-ui-react";

const colors = ["red"];

const LabelComp = ({ numberText }) => (
  <div>
    {colors.map(color => (
      <Label circular color={color} key={color}>
        {numberText}
      </Label>
    ))}
  </div>
);

export default LabelComp;
