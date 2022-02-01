import React from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled/macro';

interface InputContainerProps {
  inputTitle: string;
  children?: JSX.Element[] | JSX.Element;
}

const InputContainerWrapper = styled.div([tw`mx-0 my-6.4`]);

const InputTitle = styled.span([
  tw`flex items-center mb-2 text-gray5 text-4.8 leading-5.6`,
]);

const InputBox = styled.div([
  tw`flex items-center mt-1.5 text-gray2 rounded bg-gray0`,
]);

export default function InputContainer({
  inputTitle,
  children,
}: InputContainerProps) {
  return (
    <InputContainerWrapper>
      <InputTitle>{inputTitle}</InputTitle>
      <InputBox>{children}</InputBox>
    </InputContainerWrapper>
  );
}
