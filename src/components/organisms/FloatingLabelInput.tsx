import React, { useState, ChangeEvent, FC } from "react";
import styled from "styled-components";
import { StyledInput, InputContainer } from "../atoms";

interface LabelProps {
  hasValue: boolean;
}

const Label = styled.label<LabelProps>`
  position: absolute;
  top: ${({ hasValue }) => (hasValue ? "14px" : "34px")};
  left: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  opacity: 0.6;
  transition: top 0.3s, font-size 0.3s;
`;

interface FloatingLabelInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FloatingLabelInput: FC<FloatingLabelInputProps> = ({
  id,
  label,
  ...props
}) => {
  const [hasValue, setHasValue] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHasValue(event.target.value.length > 0);
    if (props.onChange) props.onChange(event);
  };

  return (
    <InputContainer>
      <StyledInput {...props} id={id} onChange={handleChange} />
      <Label htmlFor={id} hasValue={hasValue}>
        {label}
      </Label>
    </InputContainer>
  );
};

export default FloatingLabelInput;
