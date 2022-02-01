import React, { forwardRef, InputHTMLAttributes } from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled/macro';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  underline: boolean;
}

const InputBasic = styled.input([
  tw`w-full h-18 bg-gray0 text-center outline-none border-none border-gray3 rounded`,
]);

const InputUnderline = styled.input([
  tw`text-center border-none bg-none outline-none mx-0 my-6.4 px-0 py-1.6 border-b border-b-gray6`,
]);

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ underline = false, ...props }: InputProps, ref): JSX.Element => {
    return (
      <>
        {underline ? (
          <InputUnderline ref={ref} {...props} />
        ) : (
          <InputBasic ref={ref} {...props} />
        )}
      </>
    );
  }
);
Input.displayName = 'Input';

export default Input;
