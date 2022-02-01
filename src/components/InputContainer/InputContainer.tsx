import React from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled/macro';
import { cx } from '@emotion/css';

interface InputContainerProps {
  inputTitle: string;
  inputStatus?: 'success' | 'error' | 'default';
  errorMessage?: string;
  inputBox?: boolean;
  inputBoxCSSstyle?: string;
  children?: Array<JSX.Element> | JSX.Element;
}

const InputContainerWrapper = styled.div([tw`mx-0 my-6.4`]);

const InputTitle = styled.span([
  tw`flex items-center mb-2 text-gray5 text-4.8 leading-5.6`,
]);

const InputBox = styled.div([
  tw`flex items-center mt-1.5 text-gray2 rounded bg-gray0`,
]);

const InputErrorMessage = styled.p([tw`text-red-600`]);

export default function InputContainer({
  inputTitle,
  inputStatus = 'default',
  errorMessage,
  inputBox = true,
  inputBoxCSSstyle,
  children,
}: InputContainerProps) {
  return (
    <InputContainerWrapper>
      <InputTitle>{inputTitle}</InputTitle>
      {inputBox && (
        <InputBox className={cx(inputBoxCSSstyle)}>{children}</InputBox>
      )}
      {!inputBox && children}
      {errorMessage &&
        (inputStatus === 'success' ? null : (
          <InputErrorMessage role="alert">{errorMessage}</InputErrorMessage>
        ))}
    </InputContainerWrapper>
  );
}
