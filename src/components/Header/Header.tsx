import React, { MouseEventHandler } from 'react';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';
import BackButton from '../Button/BackButton';

interface HeaderProps {
  headerTitle: string;
  backButtonOnclick?: MouseEventHandler<HTMLButtonElement>;
}

const HeaderWrapper = styled.div([tw`w-full flex items-center`]);
const PageTitle = styled.h2([
  tw`font-medium text-8 leading-[2.2rem] flex items-center text-gray6`,
]);

export default function Header({
  headerTitle,
  backButtonOnclick,
}: HeaderProps) {
  return (
    <HeaderWrapper>
      <BackButton onClick={backButtonOnclick} />
      <PageTitle>{headerTitle}</PageTitle>
    </HeaderWrapper>
  );
}
