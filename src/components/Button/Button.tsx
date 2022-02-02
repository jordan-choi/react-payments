import React, { ButtonHTMLAttributes } from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled/macro';
import { cx } from '@emotion/css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  buttonCSSstyle?: string;
}

const ButtonBox = styled.div([tw`relative w-full h-8`]);

const StyledButton = styled.button([
  tw`flex items-center justify-center border-none outline-none bg-transparent px-4 py-2 hover:cursor-pointer`,
]);

export default function Button({
  buttonText,
  buttonCSSstyle,
  ...props
}: ButtonProps) {
  return (
    <ButtonBox>
      <StyledButton {...props} className={cx(buttonCSSstyle)}>
        <span>{buttonText}</span>
      </StyledButton>
    </ButtonBox>
  );
}
