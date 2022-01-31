import React from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled/macro';

interface InputContainerProps {
  inputTitle: string;
  children?: JSX.Element[] | JSX.Element;
}

const InputTitle = styled.span([
  tw`flex items-center mb-2 text-gray5 text-[1.2rem] leading-[1.4rem]`,
]);

const InputBox = styled.div([
  tw`flex items-center mt-1.5 text-gray2 rounded bg-gray0`,
]);

export default function InputContainer({
  inputTitle,
  children,
}: InputContainerProps) {
  return (
    <div className="mx-[1.6rem] my-0">
      <InputTitle>{inputTitle}</InputTitle>
      <InputBox>{children}</InputBox>
    </div>
  );
}
